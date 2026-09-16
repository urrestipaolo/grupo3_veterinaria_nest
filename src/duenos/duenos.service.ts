import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateDuenoDto } from './dto/create-dueno.dto.js';
import { UpdateDuenoDto } from './dto/update-dueno.dto.js';

@Injectable()
export class DuenosService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateDuenoDto) {
    return this.prisma.dueño.create({ data });
  }

  async findOne(id: number) {
    const dueño = await this.prisma.dueño.findUnique({
      where: { id },
      include: { mascotas: true },
    });

    if (!dueño) {
      throw new NotFoundException('Dueño no encontrado');
    }

    return dueño;
  }

  async update(id: number, data: UpdateDuenoDto) {
    await this.findOne(id);

    return this.prisma.dueño.update({
      where: { id },
      data,
    });
  }
}