import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import * as bcrypt from 'bcryptjs';
import { Role } from '../generated/prisma/enums.js';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUsuarioDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return await this.prisma.usuario.create({
      data: {
        nombre: createUserDto.nombre,
        email: createUserDto.email,
        password: hashedPassword,
        rol: createUserDto.rol ?? Role.RECEPCIONISTA,
      },
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        createdAt: true,
      },
    });
  }

  async findAll() {
    try {
      return await this.prisma.usuario.findMany({ omit: { password: true } });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        createdAt: true,
      },
    });
    if (!user) {
      throw new NotFoundException(`usuario de ID: ${id} no encontrado`);
    }
    return user;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`usuario de ID: ${id} no encontrado`);
    }
    return await this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`usuario de ID: ${id} no encontrado`);
    }
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
      select: {
        id: true,
        nombre: true,
        email: true,
        rol: true,
        createdAt: true,
        password: true,
      },
    });
  }
}
