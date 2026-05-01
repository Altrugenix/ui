import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { InputOTP } from "./InputOTP";

describe("InputOTP component", () => {
  it("renders the correct number of inputs based on length", () => {
    render(<InputOTP length={4} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  it("calls onChange and moves focus when a digit is entered", () => {
    const onChange = vi.fn();
    render(<InputOTP length={4} onChange={onChange} />);
    const inputs = screen.getAllByRole("textbox");
    
    fireEvent.change(inputs[0], { target: { value: "1" } });
    expect(onChange).toHaveBeenCalledWith("1");
    expect(inputs[1]).toHaveFocus();
  });

  it("calls onComplete when all digits are filled", () => {
    const onComplete = vi.fn();
    render(<InputOTP length={3} onComplete={onComplete} />);
    const inputs = screen.getAllByRole("textbox");
    
    fireEvent.change(inputs[0], { target: { value: "1" } });
    fireEvent.change(inputs[1], { target: { value: "2" } });
    fireEvent.change(inputs[2], { target: { value: "3" } });
    
    expect(onComplete).toHaveBeenCalledWith("123");
  });

  it("moves focus back on Backspace if current input is empty", () => {
    render(<InputOTP length={4} value="12" />);
    const inputs = screen.getAllByRole("textbox");
    
    // Move focus to index 2 (third input, which is empty)
    inputs[2].focus();
    expect(inputs[2]).toHaveFocus();
    
    fireEvent.keyDown(inputs[2], { key: "Backspace" });
    expect(inputs[1]).toHaveFocus();
  });

  it("handles paste events correctly", () => {
    const onChange = vi.fn();
    render(<InputOTP length={4} onChange={onChange} />);
    const inputs = screen.getAllByRole("textbox");
    
    const pasteData = {
      clipboardData: {
        getData: (type: string) => (type === "text" ? "1234" : ""),
      },
    };
    
    fireEvent.paste(inputs[0].parentElement!, pasteData);
    expect(onChange).toHaveBeenCalledWith("1234");
    expect(inputs[3]).toHaveFocus();
  });

  it("handles paste events with onComplete", () => {
    const onComplete = vi.fn();
    render(<InputOTP length={4} onComplete={onComplete} />);
    const inputs = screen.getAllByRole("textbox");
    
    const pasteData = {
      clipboardData: {
        getData: (type: string) => (type === "text" ? "1234" : ""),
      },
    };
    
    fireEvent.paste(inputs[0].parentElement!, pasteData);
    expect(onComplete).toHaveBeenCalledWith("1234");
  });

  it("prevents interaction when disabled", () => {
    const onChange = vi.fn();
    render(<InputOTP length={4} disabled onChange={onChange} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    
    inputs.forEach(input => {
      expect(input).toBeDisabled();
    });
    
    fireEvent.change(inputs[0], { target: { value: "1" } });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("works in uncontrolled mode", () => {
    render(<InputOTP length={3} />);
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    
    fireEvent.change(inputs[0], { target: { value: "5" } });
    expect(inputs[0].value).toBe("5");
    expect(inputs[1]).toHaveFocus();
  });
});
