import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CommandPalette, type CommandPaletteItem } from "./CommandPalette";
import "@testing-library/jest-dom";

describe("CommandPalette", () => {
  const mockItems: CommandPaletteItem[] = [
    { id: "1", label: "Dashboard", onSelect: vi.fn(), group: "Pages" },
    { id: "2", label: "Settings", onSelect: vi.fn(), group: "Pages" },
    { id: "3", label: "Users", onSelect: vi.fn(), group: "Admin" },
  ];

  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    items: mockItems,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock scrollIntoView which is not implemented in JSDOM
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it("renders when isOpen is true", () => {
    render(<CommandPalette {...defaultProps} />);
    expect(
      screen.getByPlaceholderText("Search components, docs, or actions...")
    ).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(<CommandPalette {...defaultProps} isOpen={false} />);
    expect(
      screen.queryByPlaceholderText("Search components, docs, or actions...")
    ).not.toBeInTheDocument();
  });

  it("filters items based on search query", () => {
    render(<CommandPalette {...defaultProps} />);
    const input = screen.getByPlaceholderText(
      "Search components, docs, or actions..."
    );

    fireEvent.change(input, { target: { value: "User" } });

    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
  });

  it("calls onSelect and onClose when an item is clicked", () => {
    render(<CommandPalette {...defaultProps} />);
    const item = screen.getByText("Dashboard");

    fireEvent.click(item);

    expect(mockItems[0].onSelect).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("navigates with keyboard ArrowDown and ArrowUp", () => {
    render(<CommandPalette {...defaultProps} />);
    screen.getByPlaceholderText("Search components, docs, or actions...");

    // Initial active index is 0 (Dashboard)
    fireEvent.keyDown(window, { key: "ArrowDown" });
    // Now index 1 (Settings) should be active
    const settingsItem = screen
      .getByText("Settings")
      .closest('div[data-active="true"]');
    expect(settingsItem).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "ArrowUp" });
    // Back to index 0 (Dashboard)
    const dashboardItem = screen
      .getByText("Dashboard")
      .closest('div[data-active="true"]');
    expect(dashboardItem).toBeInTheDocument();
  });

  it("selects active item with Enter key", () => {
    render(<CommandPalette {...defaultProps} />);

    fireEvent.keyDown(window, { key: "Enter" });

    expect(mockItems[0].onSelect).toHaveBeenCalledTimes(1);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape key is pressed", () => {
    render(<CommandPalette {...defaultProps} />);

    fireEvent.keyDown(window, { key: "Escape" });

    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("displays 'No results found' when search query has no matches", () => {
    render(<CommandPalette {...defaultProps} />);
    const input = screen.getByPlaceholderText(
      "Search components, docs, or actions..."
    );

    fireEvent.change(input, { target: { value: "nonexistent" } });

    expect(screen.getByText(/No results found for/)).toBeInTheDocument();
    expect(screen.getByText('"nonexistent"')).toBeInTheDocument();
  });

  it("renders group headers", () => {
    render(<CommandPalette {...defaultProps} />);
    expect(screen.getByText("PAGES")).toBeInTheDocument();
    expect(screen.getByText("ADMIN")).toBeInTheDocument();
  });

  it("renders icons and shortcuts", () => {
    const itemsWithExtras: CommandPaletteItem[] = [
      {
        id: "1",
        label: "Dash",
        onSelect: vi.fn(),
        icon: <span data-testid="custom-icon">Icon</span>,
        shortcut: ["G", "D"],
      },
    ];
    render(<CommandPalette {...defaultProps} items={itemsWithExtras} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(screen.getByText("G")).toBeInTheDocument();
    expect(screen.getByText("D")).toBeInTheDocument();
  });

  it("closes when clicking the backdrop", () => {
    render(<CommandPalette {...defaultProps} />);
    // The backdrop is the motion.div with bg-background/60
    const backdrop = document.querySelector(".bg-background\\/60");
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(defaultProps.onClose).toHaveBeenCalled();
    }
  });

  it("uses custom placeholder", () => {
    render(<CommandPalette {...defaultProps} placeholder="Custom Placeholder" />);
    expect(screen.getByPlaceholderText("Custom Placeholder")).toBeInTheDocument();
  });
});
