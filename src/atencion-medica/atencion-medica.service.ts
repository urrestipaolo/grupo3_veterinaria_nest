import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAtencionMedicaDto } from './dto/create-atencion-medica.dto.js';
import { UpdateAtencionMedicaDto } from './dto/update-atencion-medica.dto.js';

@Injectable()
export class AtencionesMedicasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAtencionMedicaDto: CreateAtencionMedicaDto) {
    return this.prisma.atencionMedica.create({
      data: createAtencionMedicaDto,
    });
  }

  async findAll() {
    return this.prisma.atencionMedica.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const atencion = await this.prisma.atencionMedica.findUnique({
      where: { id },
    });

    if (!atencion) {
      throw new NotFoundException(`Atención médica de ID: ${id} no encontrada`);
    }

    return atencion;
  }

  async findByMascota(mascotaId: number) {
    return this.prisma.atencionMedica.findMany({
      where: { mascotaId },
      orderBy: { fechaIngreso: 'desc' },
    });
  }

  async update(id: number, updateAtencionMedicaDto: UpdateAtencionMedicaDto) {
    await this.findOne(id);

    return this.prisma.atencionMedica.update({
      where: { id },
      data: updateAtencionMedicaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.atencionMedica.delete({
      where: { id },
    });
  }
}