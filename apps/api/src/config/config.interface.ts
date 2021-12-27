export interface Config {
  nest: NestConfig;
  graphql: GraphqlConfig;
}

export interface NestConfig {
  port: number;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}
