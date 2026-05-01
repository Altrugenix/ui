import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar, AvatarGroup } from "./index";
import "@testing-library/jest-dom";

describe("Avatar", () => {
  it("renders fallback when src is missing", () => {
    render(<Avatar fallback="JD" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders initials from alt when src is missing", () => {
    render(<Avatar alt="John Doe" />);
    expect(screen.getByText("Jo")).toBeInTheDocument();
  });
  it("renders image when src is provided", () => {
    render(<Avatar src="avatar.png" alt="User" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "avatar.png");
    expect(img).toHaveAttribute("alt", "User");
  });

  it("switches to fallback on image error", () => {
    render(<Avatar src="invalid.png" fallback="FB" />);
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(screen.getByText("FB")).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Avatar ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom className", () => {
    const { container } = render(<Avatar className="custom-avatar" />);
    expect(container.firstChild).toHaveClass("custom-avatar");
  });
});

describe("AvatarGroup", () => {
  it("renders correct number of children and surplus", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar alt="A" />
        <Avatar alt="B" />
        <Avatar alt="C" />
      </AvatarGroup>
    );
    expect(screen.getByText("+1")).toBeInTheDocument();
    // 2 visible + 1 surplus = 3 total elements that look like avatars
    // Actually it clones 2 visible and adds 1 surplus div.
    expect(screen.getAllByText(/[A-C]|\+1/)).toHaveLength(3);
  });

  it("applies size classes to all children", () => {
    const { container } = render(
      <AvatarGroup size="lg">
        <Avatar alt="A" />
      </AvatarGroup>
    );
    // Size lg should apply h-12 w-12
    expect(container.querySelector(".h-12")).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<AvatarGroup ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
