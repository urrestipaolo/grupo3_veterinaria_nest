import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { AtencionesMedicasService } from '../atencion-medica/atencion-medica.service.js';

import { CreateAtencionMedicaDto } from './dto/create-atencion-medica.dto.js';

import { UpdateAtencionMedicaDto } from './dto/update-atencion-medica.dto.js';

@Controller('atenciones-medicas')
export class AtencionesMedicasController {
  constructor(
    private readonly atencionesMedicasService: AtencionesMedicasService,
  ) {}

  @Post()
  create(@Body() createAtencionMedicaDto: CreateAtencionMedicaDto) {
    return this.atencionesMedicasService.create(createAtencionMedicaDto);
  }

  @Get()
  findAll() {
    return this.atencionesMedicasService.findAll();
  }

  @Get('mascota/:mascotaId')
  findByMascota(@Param('mascotaId') mascotaId: string) {
    return this.atencionesMedicasService.findByMascota(+mascotaId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atencionesMedicasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAtencionMedicaDto: UpdateAtencionMedicaDto,
  ) {
    return this.atencionesMedicasService.update(+id, updateAtencionMedicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atencionesMedicasService.remove(+id);
  }
}
