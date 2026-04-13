import { describe, it, expect } from "vitest";
import { cn } from "./cn";

describe("cn utility", () => {
  it("merges classes correctly", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("handles conditional classes", () => {
    expect(cn("a", true && "b", false && "c")).toBe("a b");
  });

  it("merges tailwind classes and resolves conflicts", () => {
    expect(cn("px-2 py-2", "px-4")).toBe("py-2 px-4");
  });
});
