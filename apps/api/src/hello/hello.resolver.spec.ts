import { Test, TestingModule } from '@nestjs/testing';
import { HelloResolver } from './hello.resolver';
import { HelloService } from './hello.service';

describe('HelloResolver', () => {
  let resolver: HelloResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloResolver, HelloService],
    }).compile();

    resolver = module.get<HelloResolver>(HelloResolver);
  });

  it('should be defined', () => {
    expect(resolver.hello()).toBe('Hello World!');
  });
});
