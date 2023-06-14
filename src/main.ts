import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RoleGuard } from 'src/shared/middlewares/guards/role.guard';
import { Reflector } from '@nestjs/core';
import * as express from 'express';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.setGlobalPrefix('fiverr')
  app.useGlobalGuards(new RoleGuard(app.get(Reflector)));
  app.use(express.static('.'))
  await app.listen(8080);
}
bootstrap();
