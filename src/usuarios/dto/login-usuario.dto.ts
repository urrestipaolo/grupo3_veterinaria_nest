import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class loginUsuarioDto {
  @IsEmail({}, { message: 'el email debe estar en el formato correcto' })
  @IsNotEmpty({ message: 'el email es obligatorio' })
  email: string;
  @IsString({ message: 'el password debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'el password es obligatorio' })
  @MinLength(6, { message: 'el password debe tener almenos 6 caracteres' })
  @Matches(/\S/, {
    message: 'el password no puede contener solo espacios',
  })
  password: string;
}
