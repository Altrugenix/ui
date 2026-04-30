import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./index";

describe("Spinner", () => {
  it("should render without crashing", () => {
    const { container } = render(<Spinner>Test</Spinner>);
    expect(container).toBeTruthy();
  });
});
