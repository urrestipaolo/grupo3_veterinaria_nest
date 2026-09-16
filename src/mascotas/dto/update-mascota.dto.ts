import { PartialType } from '@nestjs/mapped-types';
import { CreateMascotasDto } from './create-mascota.dto.js';

export class UpdateMascotasDto extends PartialType(CreateMascotasDto) {}