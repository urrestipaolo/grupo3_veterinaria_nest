import { Test, TestingModule } from '@nestjs/testing';
import { AtencionesMedicasController } from './atencion-medica.controller.js';
import { AtencionesMedicasService } from './atencion-medica.service.js';

describe('AtencionMedicaController', () => {
  let controller: AtencionesMedicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtencionesMedicasController],
      providers: [AtencionesMedicasService],
    }).compile();

    controller = module.get<AtencionesMedicasController>(
      AtencionesMedicasController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});