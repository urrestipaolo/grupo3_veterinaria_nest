import { PartialType } from '@nestjs/mapped-types';
import { CreateAtencionMedicaDto } from './create-atencion-medica.dto.js';

export class UpdateAtencionMedicaDto extends PartialType(CreateAtencionMedicaDto) {}
