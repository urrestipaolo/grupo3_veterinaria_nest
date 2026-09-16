import { Module } from '@nestjs/common';
import { MascotasService } from './mascota.service.js';
import { MascotasController } from './mascota.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';

@Module({
    imports: [PrismaModule],
    controllers: [MascotasController],
    providers: [MascotasService],
})
export class MascotasModule{}