import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RoleGuard } from 'src/shared/middlewares/guards/role.guard';
import { Reflector } from '@nestjs/core';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  app.setGlobalPrefix('fiverr')
  app.useGlobalGuards(new RoleGuard(app.get(Reflector)));
  await app.listen(8080);
}
bootstrap();
