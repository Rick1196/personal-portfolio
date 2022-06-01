import React from "react";
import { render, screen } from "@utils/test-utils";
import renderer from "react-test-renderer";
import Login from "@components/login";

describe("Login component", () => {
  it("Login must render", () => {
    render(<Login />);
    expect(screen.getByText("Login with")).toBeInTheDocument();
  });

  it("Renders correctly", () => {
    // Updated test case with a Link to a different address
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
