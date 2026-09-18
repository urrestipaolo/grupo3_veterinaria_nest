import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';

import { AtencionesMedicasService } from '../atencion-medica/atencion-medica.service.js';

import { CreateAtencionMedicaDto } from './dto/create-atencion-medica.dto.js';

import { UpdateAtencionMedicaDto } from './dto/update-atencion-medica.dto.js';
import { Roles } from '../auth/decorators/roles.decorators.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';

@Controller('atenciones-medicas')
export class AtencionesMedicasController {
  constructor(
    private readonly atencionesMedicasService: AtencionesMedicasService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('VETERINARIO')
  create(@Body() createAtencionMedicaDto: CreateAtencionMedicaDto) {
    return this.atencionesMedicasService.create(createAtencionMedicaDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('VETERINARIO')
  findAll() {
    return this.atencionesMedicasService.findAll();
  }

  @Get('mascota/:mascotaId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('VETERINARIO')
  findByMascota(@Param('mascotaId') mascotaId: string) {
    return this.atencionesMedicasService.findByMascota(+mascotaId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('VETERINARIO')
  findOne(@Param('id') id: string) {
    return this.atencionesMedicasService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('VETERINARIO')
  update(
    @Param('id') id: string,
    @Body() updateAtencionMedicaDto: UpdateAtencionMedicaDto,
  ) {
    return this.atencionesMedicasService.update(+id, updateAtencionMedicaDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('VETERINARIO')
  remove(@Param('id') id: string) {
    return this.atencionesMedicasService.remove(+id);
  }
}