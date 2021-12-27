import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloResolver } from './hello.resolver';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController],
  providers: [HelloResolver, HelloService],
})
export class HelloModule {}
