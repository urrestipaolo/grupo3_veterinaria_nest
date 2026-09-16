import {
  IsEnum,
  IsInt,
  IsString,
  Max,
  MaxLength,
  Min,
  ValidateIf,
} from 'class-validator';
import { TipoExamen } from '../../../generated/prisma/enums.js';

export class UpdateExamenDto {
  @ValidateIf((_object, value: unknown) => value !== undefined)
  @IsEnum(TipoExamen)
  tipoExamen?: TipoExamen;

  @ValidateIf((_object, value: unknown) => value !== undefined)
  @IsInt()
  @Min(1)
  @Max(2147483647)
  LaboratoristaId?: number;

  @ValidateIf((_object, value: unknown) => value !== undefined)
  @IsString()
  @MaxLength(5000)
  observaciones?: string;
}
