import { GraphQLClient } from "graphql-request";

import { Button } from "@kby/ui";

import { useHelloQuery } from "./generated/types-and-hooks";
import "./App.css";

const client = new GraphQLClient(process.env.KBY_API_GRAPHQL_URL as string, {});

export function App() {
  const { data } = useHelloQuery(client);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data?.hello}</p>
        <Button label="Boop" primary size="small" />
      </header>
    </div>
  );
}
