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
    try {
      return this.prisma.mascota.findMany({
        orderBy: { id: 'asc' },
      });
    } catch (error) {
      return error;
    }
  }

  //POST CREAR
  async create(createMascotasDto: CreateMascotasDto) {
    try {
      return await this.prisma.mascota.create({
        data: createMascotasDto,
      });
    } catch (error) {
      return error;
    }
  }

  //GET BY ID
  async findOne(id: number) {
    try {
      const mascotax = await this.prisma.mascota.findUnique({
        where: { id },
      });
      if (!mascotax) {
        throw new NotFoundException(`No se ha encontrado la mascota con el ID ${id}`);
      }
      return mascotax;
    } catch (error) {
      return error;
    }
  }

  //PUT ACTUALIZAR
  async update(id: number, UpdateMascotasDto: UpdateMascotasDto) {
    try {
      return await this.prisma.mascota.update({
        where: { id },
        data: UpdateMascotasDto,
      });
    } catch (error) {
      return error;
    }
  }

  //DELETE
  async remove(id: number) {
    try {
      const mascotax = await this.prisma.mascota.findUnique({
        where: { id },
      });
      if (!mascotax) {
        throw new NotFoundException(`No se ha encontrado la mascota con el ID ${id}`);
      }
      return await this.prisma.mascota.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}

  