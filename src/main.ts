import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // white list solo deja que la data necesaria sea ingresada, SOLO la necesaria
      whitelist: true,
      // "property banana should not exist"
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
