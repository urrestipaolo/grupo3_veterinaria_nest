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

void test('CRUD usa los valores predeterminados del esquema original', async () => {
  const { body: examen } = await create();
  assert.equal(examen.estado, 'PENDIENTE');
  assert.ok(Number.isFinite(Date.parse(examen.fechaResultado)));
  await request(app.getHttpServer()).get(base).expect(200);
  await request(app.getHttpServer())
    .get(base + '/' + examen.id)
    .expect(200);
  await request(app.getHttpServer())
    .patch(base + '/' + examen.id)
    .send({ resultados: 'Resultado', estado: 'COMPLETADO' })
    .expect(200);
  await request(app.getHttpServer())
    .delete(base + '/' + examen.id)
    .expect(200);
  await request(app.getHttpServer())
    .get(base + '/' + examen.id)
    .expect(404);
});
void test('no impone roles ni estados de atención que el esquema no exige', async () => {
  const { body: examen } = await request(app.getHttpServer())
    .post(base)
    .send({
      ...body(),
      atencionId: alta.id,
      solicitadoPorId: recepcionista.id,
      LaboratoristaId: veterinario.id,
      estado: 'COMPLETADO',
    })
    .expect(201);
  await request(app.getHttpServer())
    .patch(base + '/' + examen.id)
    .send({ estado: 'CANCELADO', resultados: null })
    .expect(200);
});
void test('valida tipos, campos y referencias del esquema', async () => {
  for (const data of [
    { ...body(), tipoExamen: 'OTRO' },
    { ...body(), atencionId: null },
    { ...body(), extra: true },
  ]) {
    await request(app.getHttpServer()).post(base).send(data).expect(400);
  }
  await request(app.getHttpServer())
    .post(base)
    .send({ ...body(), atencionId: 2147483647 })
    .expect(409);
  await request(app.getHttpServer())
    .get(base + '/abc')
    .expect(400);
  await request(app.getHttpServer())
    .patch(base + '/2147483647')
    .send({ observaciones: 'Prueba' })
    .expect(404);
  await request(app.getHttpServer())
    .delete(base + '/2147483647')
    .expect(404);
});
void test('mantiene la fecha indicada y permite editar todos los campos del modelo', async () => {
  const fechaResultado = '2026-09-16T12:00:00.000Z';
  const { body: examen } = await request(app.getHttpServer())
    .post(base)
    .send({ ...body(), fechaResultado })
    .expect(201);
  assert.equal(examen.fechaResultado, fechaResultado);
  const { body: actualizado } = await request(app.getHttpServer())
    .patch(base + '/' + examen.id)
    .send({
      atencionId: alta.id,
      solicitadoPorId: recepcionista.id,
      observaciones: null,
    })
    .expect(200);
  assert.equal(actualizado.atencionId, alta.id);
  await request(app.getHttpServer())
    .patch(base + '/' + examen.id)
    .send({ fechaResultado: null })
    .expect(400);
});
