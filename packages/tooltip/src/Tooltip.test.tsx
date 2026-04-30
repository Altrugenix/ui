import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tooltip } from "./index";

describe("Tooltip", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <Tooltip content="Test" children={<button>Test</button>} />
    );
    expect(container).toBeTruthy();
  });
});
