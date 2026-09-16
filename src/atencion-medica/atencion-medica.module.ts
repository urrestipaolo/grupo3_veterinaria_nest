import { Module } from '@nestjs/common';
import { AtencionesMedicasService } from '../atencion-medica/atencion-medica.service.js';
import { AtencionesMedicasController } from './atencion-medica.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
@Module({
  imports: [PrismaModule],
  controllers: [AtencionesMedicasController],
  providers: [AtencionesMedicasService],
})
export class AtencionMedicaModule {}
