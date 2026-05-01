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

  it("handles null, undefined and boolean values", () => {
    expect(cn("a", null, undefined, false, "b")).toBe("a b");
  });

  it("handles object inputs", () => {
    expect(cn({ "bg-red-500": true, "text-white": false, "p-4": true })).toBe(
      "bg-red-500 p-4"
    );
  });

  it("handles array inputs", () => {
    expect(cn(["a", "b"], ["c"])).toBe("a b c");
  });

  it("resolves complex tailwind conflicts", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
    expect(cn("p-2", "p-4", "p-8")).toBe("p-8");
  });
});
