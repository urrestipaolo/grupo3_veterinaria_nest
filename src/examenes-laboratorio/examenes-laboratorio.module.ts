import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ExamenesLaboratorioController } from './examenes-laboratorio.controller.js';
import { ExamenesLaboratorioService } from './examenes-laboratorio.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [ExamenesLaboratorioController],
  providers: [ExamenesLaboratorioService],
})
export class ExamenesLaboratorioModule {}
