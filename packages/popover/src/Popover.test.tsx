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

    expect(getByText("Open")).toBeTruthy();
    expect(queryByText("Content")).not.toBeTruthy();

    fireEvent.click(getByText("Open"));
    expect(getByText("Content")).toBeTruthy();
  });

  it("closes on click outside", () => {
    const { getByText, queryByText } = render(
      <Popover trigger={<button>Open</button>}>
        <div>Content</div>
      </Popover>
    );

    fireEvent.click(getByText("Open"));
    expect(getByText("Content")).toBeTruthy();

    fireEvent.mouseDown(document.body);
    expect(queryByText("Content")).not.toBeTruthy();
  });
});
