import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { loginUsuarioDto } from './dto/login-usuario.dto.js';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}
  async register(createUsuarioDto: CreateUsuarioDto) {
      return await this.prisma.usuario.create({ data: createUsuarioDto });
    }


  async login(loginUsuarioDto: loginUsuarioDto) {
    const { email, password } = loginUsuarioDto;


      const user = await this.prisma.usuario.findUnique({
        where: { email },
      });

      if (!user || user.password !== password) {
        throw new UnauthorizedException('Credenciales invalidas');
      }

      return {
        mensaje: 'Acceso correcto',
        usuario: {
          id: user.id,
          nombre: user.nombre,
          email: user.email,
          rol: user.rol,
        },
      };
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
}   