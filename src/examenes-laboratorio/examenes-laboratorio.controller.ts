import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards
} from '@nestjs/common';
import { CreateExamenDto } from './dto/create-examen.dto.js';
import { UpdateExamenDto } from './dto/update-examen.dto.js';
import { ExamenesLaboratorioService } from './examenes-laboratorio.service.js';
import { Roles } from '../auth/decorators/roles.decorators.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';

@Controller('examenes-laboratorio')
@UsePipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
)
export class ExamenesLaboratorioController {
  constructor(private readonly service: ExamenesLaboratorioService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('LABORATORISTA')
  create(@Body() dto: CreateExamenDto) {
    return this.service.create(dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('LABORATORISTA')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('LABORATORISTA')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('LABORATORISTA')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateExamenDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('LABORATORISTA')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}