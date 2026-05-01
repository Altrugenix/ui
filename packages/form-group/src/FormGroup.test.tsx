import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormGroup } from "./index";
import "@testing-library/jest-dom";

describe("FormGroup", () => {
  it("should render without crashing", () => {
    const { container } = render(<FormGroup>Test</FormGroup>);
    expect(container).toBeInTheDocument();
  });
  it("renders children correctly", () => {
    render(
      <FormGroup>
        <input data-testid="input-1" />
        <input data-testid="input-2" />
      </FormGroup>
    );
    expect(screen.getByTestId("input-1")).toBeInTheDocument();
    expect(screen.getByTestId("input-2")).toBeInTheDocument();
  });

  it("applies correct spacing classes", () => {
    const { container: smContainer } = render(<FormGroup spacing="sm">Test</FormGroup>);
    expect(smContainer.firstChild).toHaveClass("space-y-3");

    const { container: lgContainer } = render(<FormGroup spacing="lg">Test</FormGroup>);
    expect(lgContainer.firstChild).toHaveClass("space-y-8");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLFormElement>();
    render(<FormGroup ref={ref}>Test</FormGroup>);
    expect(ref.current).toBeInstanceOf(HTMLFormElement);
  });

  it("applies custom className and passes through additional props", () => {
    const { container } = render(
      <FormGroup className="custom-form" id="form-id" onSubmit={(e) => e.preventDefault()}>
        Test
      </FormGroup>
    );
    expect(container.firstChild).toHaveClass("custom-form");
    expect(container.firstChild).toHaveAttribute("id", "form-id");
  });
});
