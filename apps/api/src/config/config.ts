import path from 'path';
import { Config } from './config.interface';

const isProduction = process.env.NODE_ENV === 'production';

const config: Config = {
  nest: {
    port: process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000,
  },
  graphql: {
    playgroundEnabled: !isProduction,
    debug: !isProduction,
    schemaDestination: isProduction
      ? path.join(__dirname, '../schema.graphql')
      : './src/schema.graphql',
    sortSchema: true,
  },
};

export default (): Config => config;
