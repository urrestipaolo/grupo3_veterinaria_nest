import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class CreateDuenoDto{
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @Matches(/\S/, {message: 'El nombre  no puede contener solo espacios'})
  nombre!: string;

  @IsString()
  @IsNotEmpty({ message: 'El telefono es obligatorio' })
  @Matches(/\S/, {message: 'El telefono  no puede contener solo espacios'})
  telefono!: string;

  @IsEmail({}, { message: 'El email no es válido' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  @Matches(/\S/, {message: 'El email  no puede contener solo espacios'})
  email!: string;

  @IsOptional()
  @IsString()
  direccion?: string;
}