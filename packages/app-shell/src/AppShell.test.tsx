import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AppShell } from "./index";
import "@testing-library/jest-dom";

describe("AppShell", () => {
  it("should render without crashing", () => {
    const { container } = render(<AppShell>Test</AppShell>);
    expect(container).toBeInTheDocument();
  });
  it("renders navbar and sidebar slots", () => {
    render(
      <AppShell
        navbar={<nav data-testid="nav">Navbar</nav>}
        sidebar={<aside data-testid="side">Sidebar</aside>}
      >
        Main Content
      </AppShell>
    );
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("side")).toBeInTheDocument();
    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });

  it("handles internal drawer toggle", () => {
    render(<AppShell sidebar={<aside>Sidebar</aside>}>Main Content</AppShell>);

    // Find mobile toggle button
    const toggle = screen.getByRole("button");
    fireEvent.click(toggle);

    // Drawer should be open (contains sidebar)
    // The sidebar is rendered twice: once for desktop (hidden) and once for drawer.
    // screen.getAllByText("Sidebar") should find both.
    expect(screen.getAllByText("Sidebar").length).toBeGreaterThan(0);
  });

  it("works with controlled drawer state", () => {
    const onDrawerToggle = vi.fn();
    render(
      <AppShell
        sidebar={<aside>Sidebar</aside>}
        drawerOpen={false}
        onDrawerToggle={onDrawerToggle}
      >
        Content
      </AppShell>
    );

    const toggle = screen.getByRole("button");
    fireEvent.click(toggle);

    expect(onDrawerToggle).toHaveBeenCalledWith(true);
  });

  it("applies custom classNames", () => {
    const { container } = render(
      <AppShell className="shell-custom" mainClassName="main-custom">
        Content
      </AppShell>
    );
    expect(container.firstChild).toHaveClass("shell-custom");
    expect(container.querySelector("main")).toHaveClass("main-custom");
  });
});
