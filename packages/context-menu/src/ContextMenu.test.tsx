import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContextMenu } from "./index";

describe("ContextMenu", () => {
  it("should render without crashing", () => {
    const { container } = render(<ContextMenu menu={<></>}>Test</ContextMenu>);
    expect(container).toBeTruthy();
  });
});
