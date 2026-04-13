import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar, AvatarGroup } from "./index";
import React from "react";

describe("Avatar", () => {
  it("renders fallback when src is missing", () => {
    render(<Avatar fallback="JD" />);
    expect(screen.getByText("JD")).toBeDefined();
  });

  it("renders initials from alt when src is missing", () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText("Jo")).toBeDefined();
  });
});

describe("AvatarGroup", () => {
  it("renders correct number of children", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar alt="A" />
        <Avatar alt="B" />
        <Avatar alt="C" />
      </AvatarGroup>
    );
    expect(screen.getByText("+1")).toBeDefined();
  });
});
