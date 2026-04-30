import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { RichTextEditor } from "./RichTextEditor";

describe("RichTextEditor component", () => {
  it("renders correctly", () => {
    const { getByRole } = render(<RichTextEditor placeholder="Enter text" />);
    // Check for toolbar buttons (Bold is a good candidate)
    const editor = getByRole("textbox");
    expect(editor).toBeTruthy();
  });

  it("renders initial value", () => {
    const { getByText } = render(
      <RichTextEditor initialValue="<p>Hello World</p>" />
    );
    expect(getByText("Hello World")).toBeTruthy();
  });
});
