import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsuariosService,
    private readonly config: ConfigService,
  ) {}

  async register(CreateUserDto: CreateUsuarioDto) {
    return this.userService.create(CreateUserDto);
  }

  async login(LoginDto: LoginDto) {
    const user = await this.userService.findByEmail(LoginDto.email);
    if (!user) {
      throw new UnauthorizedException('Credenciales Invalidas');
    }
    const isMatch = await bcrypt.compare(LoginDto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciales Invalidas');
    }
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.rol, name: user.nombre },
      this.config.getOrThrow<string>('JWT_SECRET'),
      {
        expiresIn: this.config.get<string>(
          'JWT_EXPIRES_IN',
          '8h',
        ) as jwt.SignOptions['expiresIn'],
      },
    );
    return { token };
  }
}
