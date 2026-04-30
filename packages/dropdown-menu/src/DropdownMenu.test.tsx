import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DropdownMenu } from "./index";

describe("DropdownMenu", () => {
  it("should render without crashing", () => {
    const { container } = render(<DropdownMenu trigger={<></>} />);
    expect(container).toBeTruthy();
  });
});
