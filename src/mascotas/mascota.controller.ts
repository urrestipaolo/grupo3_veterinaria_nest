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
import { MascotasService } from './mascota.service.js';
import { CreateMascotasDto } from './dto/create-mascota.dto.js';
import { UpdateMascotasDto } from './dto/update-mascota.dto.js';
import { Roles } from '../auth/decorators/roles.decorators.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guards/roles.guard.js';

@Controller('mascotas')
export class MascotasController { 
    constructor(private readonly mascotasService: MascotasService) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('RECEPCIONISTA')
    create(@Body() CreateMascotasDto: CreateMascotasDto) {
        return this.mascotasService.create(CreateMascotasDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('RECEPCIONISTA', 'VETERINARIO')
    findAll() {
        return this.mascotasService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('RECEPCIONISTA', 'VETERINARIO')
    findOne(@Param('id') id: string) {
        return this.mascotasService.findOne(+id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('RECEPCIONISTA')
    update(@Param('id') id: string, @Body() UpdateMascotasDto: UpdateMascotasDto) {
        return this.mascotasService.update(+id, UpdateMascotasDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('RECEPCIONISTA')
    @Delete('id')
    remove(@Param('id') id: string) {
        return this.mascotasService.remove(+id);
    }
}