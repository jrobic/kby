import { render } from "@testing-library/react";
import { App } from "./App";

test.skip("should render", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
