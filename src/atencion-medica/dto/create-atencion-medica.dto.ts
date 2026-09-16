import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  IsEnum,
} from 'class-validator';

import { Type } from 'class-transformer';

import { EstadoAtencion } from '../../generated/prisma/client.js';

export class CreateAtencionMedicaDto {
  @Type(() => Number)
  @IsInt({ message: 'el mascotaId debe ser un número entero' })
  @Min(1, { message: 'el mascotaId debe ser mayor a 0' })
  mascotaId: number;

  @Type(() => Number)
  @IsInt({ message: 'el veterinarioId debe ser un número entero' })
  @Min(1, { message: 'el veterinarioId debe ser mayor a 0' })
  veterinarioId: number;

  @Type(() => Number)
  @IsInt({ message: 'el abiertaPorId debe ser un número entero' })
  @Min(1, { message: 'el abiertaPorId debe ser mayor a 0' })
  abiertaPorId: number;

  @IsString({
    message: 'el motivo de consulta debe ser una cadena de texto',
  })
  @IsNotEmpty({
    message: 'el motivo de consulta es obligatorio',
  })
  @MinLength(2, {
    message: 'el motivo de consulta debe tener al menos 2 caracteres',
  })
  motivoConsulta: string;

  @IsOptional()
  @IsString({
    message: 'el diagnóstico preliminar debe ser una cadena de texto',
  })
  @MinLength(2, {
    message: 'el diagnóstico preliminar debe tener al menos 2 caracteres',
  })
  diagnosticoPreliminar?: string;

  @IsOptional()
  @IsString({
    message: 'el tratamiento debe ser una cadena de texto',
  })
  @MinLength(2, {
    message: 'el tratamiento debe tener al menos 2 caracteres',
  })
  tratamiento?: string;

  @IsOptional()
  @IsEnum(EstadoAtencion, {
    message: 'el estado no es válido',
  })
  estado?: EstadoAtencion;
}
