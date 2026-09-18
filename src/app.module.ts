import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MascotasModule } from './mascotas/mascota.module.js';
import { DuenosModule } from './duenos/duenos.module.js';
import { ExamenesLaboratorioModule } from './examenes-laboratorio/examenes-laboratorio.module.js';
import { AtencionMedicaModule } from './atencion-medica/atencion-medica.module.js';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './auth/auth.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ExamenesLaboratorioModule,

    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'veterinaria-nest',
    }),
    MascotasModule,
    DuenosModule,
    ExamenesLaboratorioModule,
    AtencionMedicaModule,
    UsuariosModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}