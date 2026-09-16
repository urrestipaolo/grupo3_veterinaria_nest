import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client.js';
import { Role } from '../../generated/prisma/enums.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateExamenDto } from './dto/create-examen.dto.js';
import { UpdateExamenDto } from './dto/update-examen.dto.js';
import { ListExamenesDto } from './dto/list-examenes.dto.js';
import { RegistrarResultadosDto } from './dto/registrar-resultados.dto.js';

// Selecciones explícitas: nunca devolver hashes de contraseña de los usuarios.
const include = {
  solicitadoPor: { select: { id: true, nombre: true, rol: true } },
  laboratorista: { select: { id: true, nombre: true, rol: true } },
} satisfies Prisma.ExamenLaboratorioInclude;

@Injectable()
export class ExamenesLaboratorioService {
  constructor(private readonly prisma: PrismaService) {}

  private async verificarRol(
    db: Prisma.TransactionClient,
    id: number,
    rol: Role,
  ) {
    const usuario = await db.usuario.findUnique({
      where: { id },
      select: { rol: true },
    });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);
    if (usuario.rol !== rol)
      throw new BadRequestException(`El usuario ${id} debe tener rol ${rol}`);
  }

  private async transaccion<T>(
    operation: (db: Prisma.TransactionClient) => Promise<T>,
  ): Promise<T> {
    try {
      return await this.prisma.$transaction(operation, {
        isolationLevel: 'Serializable',
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2034')
          throw new ConflictException(
            'Los datos cambiaron durante la operación. Vuelve a intentarlo',
          );
        if (error.code === 'P2003')
          throw new ConflictException(
            'Una de las referencias del examen ya no está disponible',
          );
        if (error.code === 'P2025')
          throw new NotFoundException('Examen no encontrado');
      }
      throw error;
    }
  }

  create(dto: CreateExamenDto) {
    return this.transaccion(async (db) => {
      const atencion = await db.atencionMedica.findUnique({
        where: { id: dto.atencionId },
      });
      if (!atencion)
        throw new NotFoundException(`Atención ${dto.atencionId} no encontrada`);
      if (atencion.estado === 'DADA_DE_ALTA')
        throw new ConflictException('La atención ya fue dada de alta');
      await this.verificarRol(db, dto.solicitadoPorId, 'VETERINARIO');
      await this.verificarRol(db, dto.LaboratoristaId, 'LABORATORISTA');
      return db.examenLaboratorio.create({
        data: {
          atencionId: dto.atencionId,
          tipoExamen: dto.tipoExamen,
          solicitadoPorId: dto.solicitadoPorId,
          LaboratoristaId: dto.LaboratoristaId,
          observaciones: dto.observaciones,
          estado: 'PENDIENTE',
          fechaResultado: null,
        },
        include,
      });
    });
  }

  findAll(query: ListExamenesDto) {
    return this.prisma.examenLaboratorio.findMany({
      where: {
        estado: query.estado,
        atencionId: query.atencionId,
        LaboratoristaId: query.LaboratoristaId,
      },
      orderBy: { id: 'desc' },
      skip: (query.page - 1) * query.limit,
      take: query.limit,
      include,
    });
  }

  async findOne(id: number) {
    if (!Number.isInteger(id) || id < 1 || id > 2147483647)
      throw new BadRequestException(
        'El ID debe ser un entero entre 1 y 2147483647',
      );
    const examen = await this.prisma.examenLaboratorio.findUnique({
      where: { id },
      include,
    });
    if (!examen) throw new NotFoundException(`Examen ${id} no encontrado`);
    return examen;
  }

  private cambiarPendiente(
    id: number,
    data: Prisma.ExamenLaboratorioUncheckedUpdateInput,
    laboratoristaId?: number,
  ) {
    if (!Number.isInteger(id) || id < 1 || id > 2147483647)
      throw new BadRequestException(
        'El ID debe ser un entero entre 1 y 2147483647',
      );
    return this.transaccion(async (db) => {
      const examen = await db.examenLaboratorio.findUnique({ where: { id } });
      if (!examen) throw new NotFoundException(`Examen ${id} no encontrado`);
      if (examen.estado !== 'PENDIENTE')
        throw new ConflictException(
          'Solo se pueden modificar exámenes pendientes',
        );
      if (laboratoristaId !== undefined)
        await this.verificarRol(db, laboratoristaId, 'LABORATORISTA');
      return db.examenLaboratorio.update({
        where: { id, estado: 'PENDIENTE' },
        data,
        include,
      });
    });
  }

  update(id: number, dto: UpdateExamenDto) {
    if (Object.values(dto).every((value) => value === undefined))
      throw new BadRequestException('Debes indicar al menos un campo');
    return this.cambiarPendiente(id, dto, dto.LaboratoristaId);
  }

  registrarResultados(id: number, dto: RegistrarResultadosDto) {
    return this.cambiarPendiente(id, {
      resultados: dto.resultados.trim(),
      estado: 'COMPLETADO',
      fechaResultado: new Date(),
    });
  }

  cancelar(id: number) {
    return this.cambiarPendiente(id, {
      estado: 'CANCELADO',
      fechaResultado: null,
    });
  }
}
