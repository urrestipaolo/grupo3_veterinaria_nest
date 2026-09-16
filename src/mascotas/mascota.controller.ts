import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MascotasService } from './mascota.service.js';
import { CreateMascotasDto } from './dto/create-mascota.dto.js';
import { UpdateMascotasDto } from './dto/update-mascota.dto.js';

@Controller('mascotas')
export class MascotasController { 
    constructor(private readonly mascotasService: MascotasService) {}

    @Post()
    create(@Body() CreateMascotasDto: CreateMascotasDto) {
        return this.mascotasService.create(CreateMascotasDto);
    }

    @Get()
    findAll() {
        return this.mascotasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.mascotasService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateMascotasDto: UpdateMascotasDto) {
        return this.mascotasService.update(+id, UpdateMascotasDto);
    }

    @Delete('id')
    remove(@Param('id') id: string) {
        return this.mascotasService.remove(+id);
    }
}