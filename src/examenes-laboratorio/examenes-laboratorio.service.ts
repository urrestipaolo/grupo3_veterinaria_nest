import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateExamenDto } from './dto/create-examen.dto.js';
import { UpdateExamenDto } from './dto/update-examen.dto.js';

@Injectable()
export class ExamenesLaboratorioService {
  constructor(private readonly prisma: PrismaService) {}
  private validarId(id: number) {
    if (!Number.isInteger(id) || id < 1 || id > 2147483647)
      throw new BadRequestException(
        'El ID debe ser un entero entre 1 y 2147483647',
      );
  }
  private async ejecutar<T>(operation: () => Promise<T>): Promise<T> {
    try {
      return await operation();
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025')
          throw new NotFoundException('Examen no encontrado');
        if (error.code === 'P2003')
          throw new ConflictException(
            'La atención o uno de los usuarios referenciados no existe',
          );
      }
      throw error;
    }
  }
  create(dto: CreateExamenDto) {
    return this.ejecutar(() =>
      this.prisma.examenLaboratorio.create({ data: dto }),
    );
  }
  findAll() {
    return this.prisma.examenLaboratorio.findMany({ orderBy: { id: 'asc' } });
  }
  async findOne(id: number) {
    this.validarId(id);
    const examen = await this.prisma.examenLaboratorio.findUnique({
      where: { id },
    });
    if (!examen) throw new NotFoundException('Examen no encontrado');
    return examen;
  }
  update(id: number, dto: UpdateExamenDto) {
    this.validarId(id);
    return this.ejecutar(() =>
      this.prisma.examenLaboratorio.update({ where: { id }, data: dto }),
    );
  }
  remove(id: number) {
    this.validarId(id);
    return this.ejecutar(() =>
      this.prisma.examenLaboratorio.delete({ where: { id } }),
    );
  }
}