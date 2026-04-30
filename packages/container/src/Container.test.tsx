import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./index";

describe("Container", () => {
  it("should render without crashing", () => {
    const { container } = render(<Container>Test</Container>);
    expect(container).toBeTruthy();
  });
});
