import * as ReactDOM from "react-dom";
import { StrictMode } from "react";

import "./index.css";
import { App } from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
