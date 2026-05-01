import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FileUpload } from "./FileUpload";
import "@testing-library/jest-dom";

describe("FileUpload", () => {
  it("renders correctly", () => {
    render(<FileUpload />);
    expect(screen.getByText("Click or drag to upload")).toBeInTheDocument();
  });

  it("handles file selection via input", () => {
    const onFilesSelected = vi.fn();
    render(<FileUpload onFilesSelected={onFilesSelected} />);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;

    const file = new File(["hello"], "hello.png", { type: "image/png" });
    fireEvent.change(input, { target: { files: [file] } });

    expect(onFilesSelected).toHaveBeenCalled();
    expect(screen.getByText("hello.png")).toBeInTheDocument();
  });

  it("handles drag and drop", () => {
    const onFilesSelected = vi.fn();
    render(<FileUpload onFilesSelected={onFilesSelected} />);
    const dropzone = screen.getByText("Click or drag to upload").closest("div");
    
    const file = new File(["content"], "test.txt", { type: "text/plain" });
    const dragEvent = {
      dataTransfer: {
        files: [file],
      },
    };
    
    fireEvent.drop(dropzone!, dragEvent);
    
    expect(onFilesSelected).toHaveBeenCalled();
    expect(screen.getByText("test.txt")).toBeInTheDocument();
  });

  it("removes a file from the list", () => {
    render(<FileUpload />);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["content"], "test.txt", { type: "text/plain" });
    fireEvent.change(input, { target: { files: [file] } });
    
    expect(screen.getByText("test.txt")).toBeInTheDocument();
    
    const removeButton = screen.getByRole("button");
    fireEvent.click(removeButton);
    
    expect(screen.queryByText("test.txt")).not.toBeInTheDocument();
  });

  it("ignores files that exceed maxSize", () => {
    const onFilesSelected = vi.fn();
    render(<FileUpload onFilesSelected={onFilesSelected} maxSize={0.000001} />); // Very small limit
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    
    const largeFile = new File(["content content content"], "large.txt", { type: "text/plain" });
    fireEvent.change(input, { target: { files: [largeFile] } });
    
    expect(onFilesSelected).toHaveBeenCalledWith([]);
    expect(screen.queryByText("large.txt")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<FileUpload className="custom-upload" />);
    expect(container.firstChild).toHaveClass("custom-upload");
  });
});
