import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AspectRatio } from "./AspectRatio";
import "@testing-library/jest-dom";

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

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<AspectRatio ref={ref}>Ref Content</AspectRatio>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <AspectRatio
        className="custom-aspect"
        data-testid="aspect"
        id="aspect-id"
      >
        Content
      </AspectRatio>
    );
    expect(container.firstChild).toHaveClass("custom-aspect");
    expect(container.firstChild).toHaveAttribute("id", "aspect-id");
  });
});
