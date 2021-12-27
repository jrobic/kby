import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { NestConfig } from './config/config.interface';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: { level: 'info' } }),
  );

  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest');

  await app.listen(process.env.PORT || nestConfig?.port || 3000);
}

bootstrap();
