import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { Popover } from "./Popover";

describe("Popover component", () => {
  it("renders trigger and shows content on click", () => {
    const { getByText, queryByText } = render(
      <Popover trigger={<button>Open</button>}>
        <div>Content</div>
      </Popover>
    );

    expect(getByText("Open")).toBeInTheDocument();
    expect(queryByText("Content")).not.toBeInTheDocument();

    fireEvent.click(getByText("Open"));
    expect(getByText("Content")).toBeInTheDocument();
  });

  it("closes on click outside", () => {
    const { getByText, queryByText } = render(
      <Popover trigger={<button>Open</button>}>
        <div>Content</div>
      </Popover>
    );

    fireEvent.click(getByText("Open"));
    expect(getByText("Content")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(queryByText("Content")).not.toBeInTheDocument();
  });
});
