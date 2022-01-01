import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@nestjs/terminus';

import { HelloModule } from './hello/hello.module';
import { GraphqlConfig } from './config/config.interface';
import { HealthController } from './health/health.controller';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return graphqlConfig
          ? {
              installSubscriptionHandlers: true,
              buildSchemaOptions: {
                numberScalarMode: 'integer',
              },
              sortSchema: graphqlConfig.sortSchema,
              autoSchemaFile:
                graphqlConfig.schemaDestination || './src/schema.graphql',
              debug: graphqlConfig.debug,
              playground: graphqlConfig.playgroundEnabled,
              context: ({ req }) => ({ req }),
            }
          : {};
      },
      inject: [ConfigService],
    }),
    TerminusModule,
    HelloModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
