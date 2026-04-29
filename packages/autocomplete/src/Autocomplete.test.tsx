import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Autocomplete } from "./Autocomplete";

describe("Autocomplete component", () => {
  const options = ["Apple", "Banana", "Cherry"];

  it("renders input and shows options on focus", () => {
    const { getByRole, queryByText } = render(
      <Autocomplete options={options} />
    );
    const input = getByRole("textbox");

    expect(queryByText("Apple")).not.toBeInTheDocument();

    fireEvent.focus(input);
    expect(queryByText("Apple")).toBeInTheDocument();
  });

  it("filters options based on input", () => {
    const { getByRole, queryByText } = render(
      <Autocomplete options={options} />
    );
    const input = getByRole("textbox");

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "App" } });

    expect(queryByText("Apple")).toBeInTheDocument();
    expect(queryByText("Banana")).not.toBeInTheDocument();
  });
});
