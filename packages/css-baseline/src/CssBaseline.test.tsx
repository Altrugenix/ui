import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { CssBaseline } from "./CssBaseline";

describe("CssBaseline component", () => {
  it("adds classes to body on mount and removes on unmount", () => {
    const { unmount } = render(<CssBaseline />);
    expect(document.body).toHaveClass("bg-background");
    expect(document.body).toHaveClass("text-foreground");
    expect(document.body).toHaveClass("antialiased");

    unmount();
    expect(document.body).not.toHaveClass("bg-background");
  });
});
