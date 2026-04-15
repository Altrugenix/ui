import { describe, it, expect } from "vitest";
import { cn } from "./cn";

describe("cn utility", () => {
  it("merges classes correctly", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("handles conditional classes correctly", () => {
    const isEnabled = true;
    const isHidden = false;

    expect(cn("a", isEnabled && "b", isHidden && "c")).toBe("a b");
  });

  it("merges tailwind classes and resolves conflicts", () => {
    expect(cn("px-2 py-2", "px-4")).toBe("py-2 px-4");
  });
});
