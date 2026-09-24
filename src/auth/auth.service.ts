import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import jwt, { SignOptions } from 'jsonwebtoken';
import { UsuariosService } from '../usuarios/usuarios.service.js';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ConfigService } from '@nestjs/config';
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

    const secret = this.configService.getOrThrow<string>('JWT_SECRET');
    const expiresIn = this.configService.getOrThrow<string>('JWT_EXPIRES_IN');
    const options: SignOptions = {
      expiresIn: expiresIn as SignOptions['expiresIn'],
    };


    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.rol, name: user.nombre },
      secret,
      options,

/*       process.env.JWT_SECRET as string,
      { expiresIn: '8h' }, */
    );
    return { token };
  }
}
