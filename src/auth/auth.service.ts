import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import jwt, { type SignOptions } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { LoginDto } from './dto/login.dto.js';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsuariosService,
    private readonly configService: ConfigService,
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
      this.configService.get<string>('JWT_SECRET') as string,
      {
        expiresIn: this.configService.get<string>(
          'JWT_EXPIRES_IN',
        ) as SignOptions['expiresIn'],
      },
    );
    return { token };
  }
}