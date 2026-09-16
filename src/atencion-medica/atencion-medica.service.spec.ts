import { Test, TestingModule } from '@nestjs/testing';
import { AtencionesMedicasService } from './atencion-medica.service.js';

describe('AtencionMedicaService', () => {
  let service: AtencionesMedicasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtencionesMedicasService],
    }).compile();

    service = module.get<AtencionesMedicasService>(AtencionesMedicasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
