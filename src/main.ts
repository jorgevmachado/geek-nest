import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('geek-nest')
    .setDescription('The geek API description')
    .setVersion('1.0')
    .addTag('geek-nest')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('response', app, document);

  await app.listen(3001);

  console.log('Application is running on: http://localhost:3001');
}
bootstrap();
