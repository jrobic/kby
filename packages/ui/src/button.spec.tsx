import { render } from "@testing-library/react";
import { Button } from "./Button";

test("should render", () => {
  const { asFragment } = render(<Button />);

  expect(asFragment()).toMatchSnapshot();
});
