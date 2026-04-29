import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { FileUpload } from "./FileUpload";

describe("FileUpload component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<FileUpload />);
    expect(getByText("Click or drag to upload")).toBeInTheDocument();
  });

  it("handles file selection via input", () => {
    const onFilesSelected = vi.fn();
    const { container } = render(
      <FileUpload onFilesSelected={onFilesSelected} />
    );
    const input = container.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;

    const file = new File(["hello"], "hello.png", { type: "image/png" });
    fireEvent.change(input, { target: { files: [file] } });

    expect(onFilesSelected).toHaveBeenCalled();
    expect(screen.getByText("hello.png")).toBeInTheDocument();
  });
});
