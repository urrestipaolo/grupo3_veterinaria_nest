import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateExamenDto } from './dto/create-examen.dto.js';
import { UpdateExamenDto } from './dto/update-examen.dto.js';
import { ListExamenesDto } from './dto/list-examenes.dto.js';
import { RegistrarResultadosDto } from './dto/registrar-resultados.dto.js';
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
  findAll(@Query() query: ListExamenesDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateExamenDto) {
    return this.service.update(id, dto);
  }

  @Patch(':id/resultados')
  registrarResultados(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: RegistrarResultadosDto,
  ) {
    return this.service.registrarResultados(id, dto);
  }

  @Patch(':id/cancelar')
  cancelar(@Param('id', ParseIntPipe) id: number) {
    return this.service.cancelar(id);
  }
}
