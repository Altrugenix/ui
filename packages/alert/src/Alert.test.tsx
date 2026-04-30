import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "./index";

describe("Alert", () => {
  it("should render without crashing", () => {
    const { container } = render(<Alert>Test</Alert>);
    expect(container).toBeTruthy();
  });
});
