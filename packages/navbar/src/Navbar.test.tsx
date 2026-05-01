import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Navbar } from "./index";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("renders the brand correctly", () => {
    render(<Navbar brand={<span data-testid="brand">MyBrand</span>} />);
    expect(screen.getByTestId("brand")).toBeInTheDocument();
  });

  it("renders children in desktop view", () => {
    render(
      <Navbar>
        <a href="/">Home</a>
      </Navbar>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("toggles the mobile menu when the toggle button is clicked", () => {
    render(
      <Navbar>
        <span data-testid="mobile-link">Mobile Link</span>
      </Navbar>
    );

    // Initially the mobile menu is not rendered (it's inside mobileOpen && ...)
    expect(screen.queryByTestId("mobile-link")).toBeInTheDocument(); // It's in the desktop div too, but hidden by CSS

    const toggleButton = screen.getByLabelText("Toggle navigation");
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");

    // X icon should be visible (mocking icons might be hard, but we check aria)
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  it("applies sticky class by default", () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild).toHaveClass("sticky");
  });

  it("removes sticky class when sticky prop is false", () => {
    const { container } = render(<Navbar sticky={false} />);
    expect(container.firstChild).not.toHaveClass("sticky");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLElement>();
    render(<Navbar ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it("passes through additional props and className", () => {
    render(<Navbar className="custom-nav" data-testid="navbar" id="nav-id" />);
    const nav = screen.getByTestId("navbar");
    expect(nav).toHaveClass("custom-nav");
    expect(nav.id).toBe("nav-id");
  });
});
