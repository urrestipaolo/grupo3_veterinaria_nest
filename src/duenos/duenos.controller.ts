import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DuenosService } from './duenos.service.js';
import { CreateDuenoDto } from './dto/create-dueno.dto.js';
import { UpdateDuenoDto } from './dto/update-dueno.dto.js';

@Controller('duenos')
export class DuenosController {
  constructor(private readonly duenosService: DuenosService) {}

  @Post()
  create(@Body() createDuenoDto: CreateDuenoDto) {
    return this.duenosService.create(createDuenoDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.duenosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDuenoDto: UpdateDuenoDto) {
    return this.duenosService.update(id, updateDuenoDto);
  }
}