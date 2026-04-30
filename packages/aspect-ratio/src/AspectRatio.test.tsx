import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AspectRatio } from "./AspectRatio";

describe("AspectRatio", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <AspectRatio ratio={16 / 9}>
        <div>Content</div>
      </AspectRatio>
    );

    expect(getByText("Content")).toBeTruthy();
  });

  it("applies the correct padding for the aspect ratio", () => {
    const { container } = render(
      <AspectRatio ratio={2}>
        <div>Content</div>
      </AspectRatio>
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.paddingBottom).toBe("50%");
  });

  it("defaults to 1:1 ratio if not provided", () => {
    const { container } = render(
      <AspectRatio>
        <div>Content</div>
      </AspectRatio>
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.paddingBottom).toBe("100%");
  });
});
