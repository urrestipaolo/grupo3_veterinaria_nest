import { IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber, IsPositive, IsInt, Matches } from 'class-validator';


export class CreateMascotasDto {
    @IsString()
    @IsNotEmpty({ message: 'Ingrese un nombre valido' })
    @Matches(/\S/, {message: 'El nombre  no puede contener solo espacios'})
    nombre: string;

    @IsString()
    @IsNotEmpty({ message: 'La especie debe ser PERRO o GATO' })
    especie: "PERRO" | "GATO"

    @IsString()
    @IsNotEmpty({ message: 'Ingrese una raza valida' })
    raza: string;

    @IsNotEmpty({ message: 'Ingrese un peso valido en numero' })
    @IsNumber( {maxDecimalPlaces: 2}, { message: 'Ingrese un peso valido en numero' })
    @IsPositive({ message: 'Ingrese un valor positivo' })
    peso: number;

    @IsNotEmpty({ message: 'Ingrese una edad valida en numero' })
    @IsInt({ message: 'Ingrese una edad valida en numero entero' })
    @IsPositive({ message: 'Ingrese un valor positivo' })
    edadAproximada: number;

    @IsNotEmpty({ message: 'Ingrese una ID valida en numero' })
    @IsInt({ message: 'Ingrese una ID valida en numero entero' })
    @IsPositive({ message: 'Ingrese un valor positivo' })
    dueñoId: number;
}
