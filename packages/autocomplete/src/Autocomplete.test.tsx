import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Autocomplete } from "./Autocomplete";

describe("Autocomplete component", () => {
  const options = ["Apple", "Banana", "Cherry"];

  it("renders input and shows options on focus", () => {
    const { getByRole, queryByText } = render(
      <Autocomplete options={options} />
    );
    const input = getByRole("textbox");

    expect(queryByText("Apple")).not.toBeTruthy();

    fireEvent.focus(input);
    expect(queryByText("Apple")).toBeTruthy();
  });

  it("filters options based on input (case-insensitive)", () => {
    const { getByRole, queryByText } = render(
      <Autocomplete options={options} />
    );
    const input = getByRole("textbox");

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "apple" } });

    expect(queryByText("Apple")).toBeTruthy();
    expect(queryByText("Banana")).not.toBeTruthy();
  });

  it("selects an option on click", () => {
    const onChange = vi.fn();
    const { getByRole, getByText, queryByRole } = render(
      <Autocomplete options={options} onChange={onChange} />
    );
    const input = getByRole("textbox") as HTMLInputElement;

    fireEvent.focus(input);
    fireEvent.click(getByText("Banana"));

    expect(input.value).toBe("Banana");
    expect(onChange).toHaveBeenCalledWith("Banana");
    expect(queryByRole("list")).not.toBeInTheDocument();
  });

  it("closes the menu when clicking outside", () => {
    const { getByRole, queryByText } = render(
      <div>
        <div data-testid="outside">Outside</div>
        <Autocomplete options={options} />
      </div>
    );
    const input = getByRole("textbox");

    fireEvent.focus(input);
    expect(queryByText("Apple")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByTestId("outside"));
    expect(queryByText("Apple")).not.toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Autocomplete options={options} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
