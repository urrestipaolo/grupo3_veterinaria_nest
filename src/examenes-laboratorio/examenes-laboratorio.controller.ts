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
} from '@nestjs/common';
import { CreateExamenDto } from './dto/create-examen.dto.js';
import { UpdateExamenDto } from './dto/update-examen.dto.js';
import { ExamenesLaboratorioService } from './examenes-laboratorio.service.js';

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
  create(@Body() dto: CreateExamenDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateExamenDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
