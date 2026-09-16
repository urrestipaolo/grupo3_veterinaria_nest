import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { TipoExamen } from '../../../generated/prisma/enums.js';

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

  // Conserva el nombre definido en el esquema compartido del grupo.
  @IsInt()
  @Min(1)
  @Max(2147483647)
  LaboratoristaId: number;

  @IsOptional()
  @IsString()
  @MaxLength(5000)
  observaciones?: string;
}
