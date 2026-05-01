import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { RichTextEditor } from "./RichTextEditor";
import "@testing-library/jest-dom";

describe("RichTextEditor", () => {
  it("renders correctly", () => {
    render(<RichTextEditor placeholder="Enter text" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders initial value", () => {
    render(<RichTextEditor initialValue="<p>Hello World</p>" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
  it("triggers onChange when content is typed", () => {
    const onChange = vi.fn();
    render(<RichTextEditor onChange={onChange} />);
    const editor = screen.getByRole("textbox");
    
    editor.innerHTML = "New content";
    fireEvent.input(editor);
    
    expect(onChange).toHaveBeenCalledWith("New content");
  });

  it("triggers bold command when button is clicked", () => {
    if (typeof document.execCommand !== "function") {
      document.execCommand = vi.fn();
    }
    const execSpy = vi.spyOn(document, "execCommand");
    render(<RichTextEditor />);
    
    // Find bold button by its icon (or button aria label if it had one)
    // Looking at the code, it uses lucide-react Bold.
    // I'll search for the button.
    const buttons = screen.getAllByRole("button");
    // Bold is the first button in the toolbar
    fireEvent.click(buttons[0]);
    
    expect(execSpy).toHaveBeenCalledWith("bold", false, undefined);
    execSpy.mockRestore();
  });

  it("applies custom className to the wrapper", () => {
    const { container } = render(<RichTextEditor className="custom-editor" />);
    expect(container.firstChild).toHaveClass("custom-editor");
  });
});
