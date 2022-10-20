import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/http-exception.filter';
import { QueryExceptionFilter } from './exceptions/query-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter(), new QueryExceptionFilter());

  await app.listen(3000, () => {
    Logger.log(`Listen on port ${3000}`);
  });
}
bootstrap();
