import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

describe("Card", () => {
  it("renders all card components", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });

  it("applies custom background and hover styles", () => {
    const { container } = render(<Card variant="secondary" hover />);
    const card = container.firstChild as HTMLElement;

    expect(card).toHaveClass("bg-secondary/50");
    expect(card).toHaveClass("hover:shadow-md");
  });

  it("renders as ghost variant", () => {
    const { container } = render(<Card variant="ghost" />);
    const card = container.firstChild as HTMLElement;

    expect(card).toHaveClass("border-none");
    expect(card).toHaveClass("shadow-none");
  });
});
