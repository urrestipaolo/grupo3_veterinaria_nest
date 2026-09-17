import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMascotasDto } from './dto/create-mascota.dto.js';
import { UpdateMascotasDto } from './dto/update-mascota.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class MascotasService {
  constructor(private readonly prisma: PrismaService) {}

  //GET VER TODO
  async findAll() {
      return this.prisma.mascota.findMany({
        orderBy: { id: 'asc' },
      });
    }

  //POST CREAR
  async create(createMascotasDto: CreateMascotasDto) {
      return await this.prisma.mascota.create({
        data: createMascotasDto,
      });
    }

  //GET BY ID
  async findOne(id: number) {
      const mascotax = await this.prisma.mascota.findUnique({
        where: { id },
      });
      if (!mascotax) {
        throw new NotFoundException(`No se ha encontrado la mascota con el ID ${id}`);
      }
      return mascotax;
    }

  //PUT ACTUALIZAR
  async update(id: number, UpdateMascotasDto: UpdateMascotasDto) {
      return await this.prisma.mascota.update({
        where: { id },
        data: UpdateMascotasDto,
      });
    }

  //DELETE
  async remove(id: number) {
      const mascotax = await this.prisma.mascota.findUnique({
        where: { id },
      });
      if (!mascotax) {
        throw new NotFoundException(`No se ha encontrado la mascota con el ID ${id}`);
      }
      return await this.prisma.mascota.delete({
        where: { id },
      });
    }
  }

  