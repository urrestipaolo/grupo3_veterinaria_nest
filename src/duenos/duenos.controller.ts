import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { DuenosService } from './duenos.service.js';
import { CreateDuenoDto } from './dto/create-dueno.dto.js';
import { UpdateDuenoDto } from './dto/update-dueno.dto.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';
import { Roles } from '../auth/decorators/roles.decorators.js';


@Controller('duenos')
export class DuenosController {
  constructor(private readonly duenosService: DuenosService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('RECEPCIONISTA')
  create(@Body() createDuenoDto: CreateDuenoDto) {
    return this.duenosService.create(createDuenoDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('RECEPCIONISTA', 'VETERINARIO')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.duenosService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('RECEPCIONISTA')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDuenoDto: UpdateDuenoDto) {
    return this.duenosService.update(id, updateDuenoDto);
  }
}