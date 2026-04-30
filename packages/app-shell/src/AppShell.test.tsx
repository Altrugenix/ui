import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AppShell } from "./index";

describe("AppShell", () => {
  it("should render without crashing", () => {
    const { container } = render(<AppShell>Test</AppShell>);
    expect(container).toBeTruthy();
  });
});
