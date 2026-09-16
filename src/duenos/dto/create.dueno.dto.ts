import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDuenoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre!: string;

  @IsString()
  @IsNotEmpty({ message: 'El telefono es obligatorio' })
  telefono!: string;

  @IsEmail({}, { message: 'El email no es válido' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  email!: string;

  @IsOptional()
  @IsString()
  direccion?: string;
}