import {
  IsEnum,
  IsInt,
  IsISO8601,
  IsString,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';
import { EstadoExamen, TipoExamen } from '../../../generated/prisma/enums.js';
export class CreateExamenDto {
  @IsInt()
  @Min(1)
  @Max(2147483647)
  atencionId: number;
  @IsEnum(TipoExamen)
  tipoExamen: TipoExamen;
  @IsInt()
  @Min(1)
  @Max(2147483647)
  solicitadoPorId: number;
  @IsInt()
  @Min(1)
  @Max(2147483647)
  LaboratoristaId: number;
  @ValidateIf(
    (_object, value: unknown) => value !== undefined && value !== null,
  )
  @IsString()
  resultados?: string | null;
  @ValidateIf(
    (_object, value: unknown) => value !== undefined && value !== null,
  )
  @IsString()
  observaciones?: string | null;
  @ValidateIf((_object, value: unknown) => value !== undefined)
  @IsEnum(EstadoExamen)
  estado?: EstadoExamen;
  @ValidateIf((_object, value: unknown) => value !== undefined)
  @IsISO8601({ strict: true })
  fechaResultado?: string;
}
