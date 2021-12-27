import * as ReactDOM from "react-dom";
import { StrictMode } from "react";
import { ReactQueryDevtools } from "react-query/devtools";

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { App } from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.querySelector("#root")
);
