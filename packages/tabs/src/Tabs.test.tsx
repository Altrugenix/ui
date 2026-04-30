import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tabs, type TabItem } from "./Tabs";

describe("Tabs", () => {
  const mockItems: TabItem[] = [
    {
      label: "Account",
      value: "account",
      content: <div data-testid="account-content">Account Content</div>,
    },
    {
      label: "Password",
      value: "password",
      content: <div data-testid="password-content">Password Content</div>,
    },
    {
      label: "Settings",
      value: "settings",
      content: <div data-testid="settings-content">Settings Content</div>,
      disabled: true,
    },
  ];

  it("renders all tab triggers", () => {
    render(<Tabs items={mockItems} />);
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders the first tab content by default", () => {
    render(<Tabs items={mockItems} />);
    expect(screen.getByTestId("account-content")).toBeInTheDocument();
    expect(screen.queryByTestId("password-content")).not.toBeInTheDocument();
  });

  it("renders the content of the default active tab if defaultValue is provided", () => {
    render(<Tabs items={mockItems} defaultValue="password" />);
    expect(screen.getByTestId("password-content")).toBeInTheDocument();
    expect(screen.queryByTestId("account-content")).not.toBeInTheDocument();
  });

  it("switches content when a tab is clicked", () => {
    render(<Tabs items={mockItems} />);
    const passwordTab = screen.getByText("Password");

    fireEvent.click(passwordTab);

    expect(screen.getByTestId("password-content")).toBeInTheDocument();
    expect(screen.queryByTestId("account-content")).not.toBeInTheDocument();
  });

  it("calls onValueChange when a tab is clicked", () => {
    const onValueChange = vi.fn();
    render(<Tabs items={mockItems} onValueChange={onValueChange} />);
    const passwordTab = screen.getByText("Password");

    fireEvent.click(passwordTab);

    expect(onValueChange).toHaveBeenCalledWith("password");
  });

  it("does not switch content when a disabled tab is clicked", () => {
    render(<Tabs items={mockItems} />);
    const settingsTab = screen.getByText("Settings");

    fireEvent.click(settingsTab);

    expect(screen.getByTestId("account-content")).toBeInTheDocument();
    expect(screen.queryByTestId("settings-content")).not.toBeInTheDocument();
    expect(settingsTab).toBeDisabled();
  });

  it("works as a controlled component", () => {
    const { rerender } = render(<Tabs items={mockItems} value="account" />);
    expect(screen.getByTestId("account-content")).toBeInTheDocument();

    rerender(<Tabs items={mockItems} value="password" />);
    expect(screen.getByTestId("password-content")).toBeInTheDocument();
  });

  it("applies correct classes for variants", () => {
    const { rerender } = render(<Tabs items={mockItems} variant="pills" />);
    const tabList = screen.getByRole("tablist");
    expect(tabList).toHaveClass("gap-1");

    rerender(<Tabs items={mockItems} variant="underline" />);
    expect(tabList).toHaveClass("border-b");
  });

  it("renders icons if provided", () => {
    const itemsWithIcon = [
      {
        label: "Account",
        value: "account",
        content: "Account",
        icon: <span data-testid="account-icon">Icon</span>,
      },
    ];
    render(<Tabs items={itemsWithIcon} />);
    expect(screen.getByTestId("account-icon")).toBeInTheDocument();
  });

  it("applies vertical orientation correctly", () => {
    const { container } = render(
      <Tabs items={mockItems} orientation="vertical" />
    );
    expect(container.firstChild).toHaveClass("flex");
    expect(screen.getByRole("tablist")).toHaveClass("flex-col");
  });
});
