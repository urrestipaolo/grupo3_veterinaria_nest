import { Module } from '@nestjs/common';
import { DuenosController } from './duenos.controller.js';
import { DuenosService } from './duenos.service.js';

@Module({
  controllers: [DuenosController],
  providers: [DuenosService],
})
export class DuenosModule {}