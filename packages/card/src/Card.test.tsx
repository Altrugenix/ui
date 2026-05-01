import React from "react";
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

    expect(screen.getByText("Card Title")).toBeTruthy();
    expect(screen.getByText("Card Description")).toBeTruthy();
    expect(screen.getByText("Card Content")).toBeTruthy();
    expect(screen.getByText("Card Footer")).toBeTruthy();
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

  it("forwards refs correctly for all components", () => {
    const cardRef = React.createRef<HTMLDivElement>();
    const headerRef = React.createRef<HTMLDivElement>();
    const titleRef = React.createRef<HTMLHeadingElement>();
    const descRef = React.createRef<HTMLParagraphElement>();
    const contentRef = React.createRef<HTMLDivElement>();
    const footerRef = React.createRef<HTMLDivElement>();

    render(
      <Card ref={cardRef}>
        <CardHeader ref={headerRef}>
          <CardTitle ref={titleRef}>Title</CardTitle>
          <CardDescription ref={descRef}>Desc</CardDescription>
        </CardHeader>
        <CardContent ref={contentRef}>Content</CardContent>
        <CardFooter ref={footerRef}>Footer</CardFooter>
      </Card>
    );

    expect(cardRef.current).toBeInstanceOf(HTMLDivElement);
    expect(headerRef.current).toBeInstanceOf(HTMLDivElement);
    expect(titleRef.current).toBeInstanceOf(HTMLHeadingElement);
    expect(descRef.current).toBeInstanceOf(HTMLParagraphElement);
    expect(contentRef.current).toBeInstanceOf(HTMLDivElement);
    expect(footerRef.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies custom classNames and passes props", () => {
    render(
      <Card className="c-1" data-testid="card">
        <CardHeader className="c-2" data-testid="header" />
        <CardContent className="c-3" data-testid="content" />
        <CardFooter className="c-4" data-testid="footer" />
      </Card>
    );

    expect(screen.getByTestId("card")).toHaveClass("c-1");
    expect(screen.getByTestId("header")).toHaveClass("c-2");
    expect(screen.getByTestId("content")).toHaveClass("c-3");
    expect(screen.getByTestId("footer")).toHaveClass("c-4");
  });
});
