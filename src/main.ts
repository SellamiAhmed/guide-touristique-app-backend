import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(), {
    snapshot: true,
    logger: ['log', 'debug', 'error', 'fatal', 'verbose', 'warn'],
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
