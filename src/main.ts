import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule, ObserveInstrument } from './app.module.js';
import { PrismaExceptionFilter } from './common/filters/prisma-exception.filters.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.useGlobalFilters(new PrismaExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //await app.listen(process.env.PORT ?? 3000);
  const configService = app.get(ConfigService);
  await app.listen(configService.getOrThrow<number>('PORT'));
}
await bootstrap();