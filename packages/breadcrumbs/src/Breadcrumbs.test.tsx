import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

describe("Breadcrumbs", () => {
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Gadgets", href: "/products/gadgets" },
  ];

  it("renders the correct number of items", () => {
    render(<Breadcrumbs items={items} />);
    const breadcrumbItems = screen.getAllByRole("listitem");
    expect(breadcrumbItems).toHaveLength(items.length);
  });

  it("renders the correct labels", () => {
    render(<Breadcrumbs items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("renders links for items with href", () => {
    render(<Breadcrumbs items={items} />);
    const links = screen.getAllByRole("link");
    // All items in the mock have href, but the last one is rendered as an 'a' with pointer-events-none and font-medium,
    // it's still an 'a' tag in the current implementation.
    expect(links).toHaveLength(items.length);
    expect(links[0]).toHaveAttribute("href", "/");
    expect(links[1]).toHaveAttribute("href", "/products");
  });

  it("calls onClick when provided", () => {
    const handleClick = vi.fn();
    const itemsWithClick: BreadcrumbItem[] = [
      { label: "Home", href: "/" },
      { label: "Products", onClick: handleClick },
    ];
    render(<Breadcrumbs items={itemsWithClick} />);

    const clickItem = screen.getByText("Products");
    fireEvent.click(clickItem);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders custom separator when provided", () => {
    const separator = <span data-testid="custom-separator">/</span>;
    render(<Breadcrumbs items={items} separator={separator} />);

    const separators = screen.getAllByTestId("custom-separator");
    expect(separators).toHaveLength(items.length - 1);
  });

  it("sets aria-current='page' on the last item", () => {
    render(<Breadcrumbs items={items} />);
    const lastItem = screen.getByText("Gadgets");
    expect(lastItem).toHaveAttribute("aria-current", "page");

    const firstItem = screen.getByText("Home");
    expect(firstItem).not.toHaveAttribute("aria-current");
  });

  it("renders as span if no href or onClick is provided", () => {
    const itemsNoLink: BreadcrumbItem[] = [
      { label: "Home" },
      { label: "Products" },
    ];
    render(<Breadcrumbs items={itemsNoLink} />);

    const item = screen.getByText("Home");
    expect(item.tagName).toBe("SPAN");
  });
});
