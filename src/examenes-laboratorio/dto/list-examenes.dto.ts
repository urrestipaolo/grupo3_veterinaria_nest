import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { EstadoExamen } from '../../../generated/prisma/enums.js';

export class ListExamenesDto {
  @IsOptional()
  @IsEnum(EstadoExamen)
  estado?: EstadoExamen;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  atencionId?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  LaboratoristaId?: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number = 20;
}
