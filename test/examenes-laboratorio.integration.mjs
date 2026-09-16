import 'reflect-metadata';
import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { randomUUID } from 'node:crypto';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { ExamenesLaboratorioModule } from '../dist/src/examenes-laboratorio/examenes-laboratorio.module.js';
import { PrismaService } from '../dist/src/prisma/prisma.service.js';

// Usa una base de pruebas migrada previamente, nunca la DATABASE_URL del grupo.
const testUrl = process.env.TEST_DATABASE_URL;
if (!testUrl || !new URL(testUrl).pathname.endsWith('_test')) {
  throw new Error(
    'Configura TEST_DATABASE_URL con una base dedicada cuyo nombre termine en _test',
  );
}
process.env.DATABASE_URL = testUrl;

let app,
  db,
  veterinario,
  laboratorista,
  recepcionista,
  atencion,
  alta,
  mascota,
  dueno;
const usuarioIds = [];
const atencionIds = [];
const base = '/examenes-laboratorio';
const body = () => ({
  atencionId: atencion.id,
  solicitadoPorId: veterinario.id,
  LaboratoristaId: laboratorista.id,
  tipoExamen: 'HEMOGRAMA',
});
const create = () =>
  request(app.getHttpServer()).post(base).send(body()).expect(201);

before(async () => {
  const module = await Test.createTestingModule({
    imports: [ExamenesLaboratorioModule],
  }).compile();
  app = module.createNestApplication();
  await app.init();
  db = app.get(PrismaService);
  for (const rol of ['VETERINARIO', 'LABORATORISTA', 'RECEPCIONISTA']) {
    const usuario = await db.usuario.create({
      data: {
        nombre: `Prueba ${rol}`,
        email: `${randomUUID()}@example.test`,
        password: 'hash-solo-pruebas',
        rol,
      },
    });
    usuarioIds.push(usuario.id);
    if (rol === 'VETERINARIO') veterinario = usuario;
    if (rol === 'LABORATORISTA') laboratorista = usuario;
    if (rol === 'RECEPCIONISTA') recepcionista = usuario;
  }
  dueno = await db.dueño.create({
    data: { nombre: 'Prueba', telefono: '00000000' },
  });
  mascota = await db.mascota.create({
    data: {
      nombre: 'Prueba',
      especie: 'PERRO',
      peso: 5,
      edadAproximada: 2,
      dueñoId: dueno.id,
    },
  });
  for (const estado of ['EN_CONSULTA', 'DADA_DE_ALTA']) {
    const nueva = await db.atencionMedica.create({
      data: {
        mascotaId: mascota.id,
        veterinarioId: veterinario.id,
        abiertaPorId: recepcionista.id,
        motivoConsulta: 'Prueba de integración',
        estado,
      },
    });
    atencionIds.push(nueva.id);
    if (estado === 'EN_CONSULTA') atencion = nueva;
    else alta = nueva;
  }
});

after(async () => {
  try {
    if (db) {
      await db.examenLaboratorio.deleteMany({
        where: { atencionId: { in: atencionIds } },
      });
      await db.atencionMedica.deleteMany({
        where: { id: { in: atencionIds } },
      });
      if (mascota) await db.mascota.delete({ where: { id: mascota.id } });
      if (dueno) await db.dueño.delete({ where: { id: dueno.id } });
      await db.usuario.deleteMany({ where: { id: { in: usuarioIds } } });
    }
  } finally {
    await app?.close();
  }
});

void test('crea pendiente sin fecha ni resultados y no expone contraseñas', async () => {
  const { body: examen } = await create();
  assert.equal(examen.estado, 'PENDIENTE');
  assert.equal(examen.fechaResultado, null);
  assert.equal(examen.resultados, null);
  assert.equal(examen.solicitadoPor.id, veterinario.id);
  assert.equal('password' in examen.solicitadoPor, false);
  assert.equal('password' in examen.laboratorista, false);
  const stored = await db.examenLaboratorio.findUnique({
    where: { id: examen.id },
  });
  assert.equal(stored.fechaResultado, null);
});

void test('consulta por ID y filtra por atención, estado y laboratorista con paginación', async () => {
  const { body: examen } = await create();
  await request(app.getHttpServer()).get(`${base}/${examen.id}`).expect(200);
  const { body: lista } = await request(app.getHttpServer())
    .get(base)
    .query({
      atencionId: atencion.id,
      LaboratoristaId: laboratorista.id,
      estado: 'PENDIENTE',
      limit: 1,
    })
    .expect(200);
  assert.equal(lista.length, 1);
  assert.equal(lista[0].id, examen.id);
});

void test('rechaza campos inesperados, IDs inválidos, tipos y consultas incorrectos', async () => {
  for (const data of [
    { ...body(), estado: 'COMPLETADO' },
    { ...body(), atencionId: -1 },
    { ...body(), tipoExamen: 'OTRO' },
    { ...body(), LaboratoristaId: null },
  ]) {
    await request(app.getHttpServer()).post(base).send(data).expect(400);
  }
  for (const path of [
    '/abc',
    '/0',
    '?limit=101',
    '?estado=OTRO',
    '?page=0',
    '?atencionId=abc',
  ]) {
    await request(app.getHttpServer())
      .get(base + path)
      .expect(400);
  }
});

void test('rechaza referencias inexistentes, roles incorrectos y atenciones dadas de alta', async () => {
  await request(app.getHttpServer())
    .post(base)
    .send({ ...body(), atencionId: 2147483647 })
    .expect(404);
  await request(app.getHttpServer())
    .post(base)
    .send({ ...body(), solicitadoPorId: 2147483647 })
    .expect(404);
  await request(app.getHttpServer())
    .post(base)
    .send({ ...body(), solicitadoPorId: recepcionista.id })
    .expect(400);
  await request(app.getHttpServer())
    .post(base)
    .send({ ...body(), LaboratoristaId: veterinario.id })
    .expect(400);
  await request(app.getHttpServer())
    .post(base)
    .send({ ...body(), atencionId: alta.id })
    .expect(409);
});

void test('edita pendientes y rechaza cambios vacíos, nulos o fuera del contrato', async () => {
  const { body: examen } = await create();
  const { body: actualizado } = await request(app.getHttpServer())
    .patch(`${base}/${examen.id}`)
    .send({ tipoExamen: 'RAYOS_X', observaciones: 'Ayuno indicado' })
    .expect(200);
  assert.equal(actualizado.tipoExamen, 'RAYOS_X');
  for (const data of [
    {},
    { tipoExamen: null },
    { LaboratoristaId: null },
    { estado: 'COMPLETADO' },
    { atencionId: alta.id },
    { LaboratoristaId: veterinario.id },
  ]) {
    await request(app.getHttpServer())
      .patch(`${base}/${examen.id}`)
      .send(data)
      .expect(400);
  }
});

void test('registra resultados y fecha de forma atómica; bloquea cambios posteriores', async () => {
  const { body: examen } = await create();
  await request(app.getHttpServer())
    .patch(`${base}/${examen.id}/resultados`)
    .send({ resultados: '  ' })
    .expect(400);
  const { body: completo } = await request(app.getHttpServer())
    .patch(`${base}/${examen.id}/resultados`)
    .send({ resultados: '  Dentro del rango  ' })
    .expect(200);
  assert.equal(completo.estado, 'COMPLETADO');
  assert.equal(completo.resultados, 'Dentro del rango');
  assert.ok(Number.isFinite(Date.parse(completo.fechaResultado)));
  await request(app.getHttpServer())
    .patch(`${base}/${examen.id}`)
    .send({ observaciones: 'Cambio' })
    .expect(409);
  await request(app.getHttpServer())
    .patch(`${base}/${examen.id}/cancelar`)
    .expect(409);
  await request(app.getHttpServer())
    .patch(`${base}/${examen.id}/resultados`)
    .send({ resultados: 'Otro' })
    .expect(409);
});

void test('cancela sin eliminar el registro ni inventar fecha de resultado', async () => {
  const { body: examen } = await create();
  const { body: cancelado } = await request(app.getHttpServer())
    .patch(`${base}/${examen.id}/cancelar`)
    .expect(200);
  assert.equal(cancelado.estado, 'CANCELADO');
  assert.equal(cancelado.fechaResultado, null);
  await request(app.getHttpServer()).get(`${base}/${examen.id}`).expect(200);
  await request(app.getHttpServer())
    .patch(`${base}/${examen.id}/resultados`)
    .send({ resultados: 'Otro' })
    .expect(409);
});

void test('devuelve 404 al consultar o modificar un examen inexistente', async () => {
  await request(app.getHttpServer()).get(`${base}/2147483647`).expect(404);
  await request(app.getHttpServer())
    .patch(`${base}/2147483647/cancelar`)
    .expect(404);
});

void test('dos cambios simultáneos no pueden completar y cancelar el mismo examen', async () => {
  const { body: examen } = await create();
  const responses = await Promise.all([
    request(app.getHttpServer())
      .patch(`${base}/${examen.id}/resultados`)
      .send({ resultados: 'Resultado final' }),
    request(app.getHttpServer()).patch(`${base}/${examen.id}/cancelar`),
  ]);
  assert.deepEqual(
    responses.map((response) => response.status).sort((a, b) => a - b),
    [200, 409],
  );
});
