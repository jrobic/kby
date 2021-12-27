import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000,
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
};

export default (): Config => config;
