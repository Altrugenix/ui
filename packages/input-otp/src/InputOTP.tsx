"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@altrugenix/core";
import { Input } from "@altrugenix/input";

export interface InputOTPProps {
  /** Number of total digits (default: 6) */
  length?: number;
  /** Current OTP value (for controlled usage) */
  value?: string;
  /** Callback triggered on every digit change */
  onChange?: (value: string) => void;
  /** Callback triggered when the OTP is completely filled */
  onComplete?: (value: string) => void;
  /** Whether the inputs are interactable */
  disabled?: boolean;
  /** Custom class for the container */
  className?: string;
  /** Custom class for individual digit inputs */
  inputClassName?: string;
}

/**
 * A specialized multi-digit input for One-Time Passwords (OTP).
 * Features automatic focus management, backspace handling, and paste support.
 */
export const InputOTP = ({
  length = 6,
  value = "",
  onChange,
  onComplete,
  disabled = false,
  className,
  inputClassName,
}: InputOTPProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Sync internal state if used uncontrolled
  const [internalValue, setInternalValue] = useState(value);
  const currentValue = value || internalValue;

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (index: number, val: string) => {
    if (disabled) return;

    // Extract the last character typed (in case of double input)
    const char = val.slice(-1);

    // Construct new value string
    const newArr = currentValue.split("");
    while (newArr.length < length) newArr.push(""); // Pad with blanks
    newArr[index] = char;

    const newVal = newArr.join("").slice(0, length);

    if (onChange) {
      onChange(newVal);
    } else {
      setInternalValue(newVal);
    }

    // Advance focus if a character was entered
    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // Trigger onComplete when all digits are populated
    if (
      newVal.length === length &&
      !newArr.slice(0, length).includes("") &&
      onComplete
    ) {
      onComplete(newVal);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (disabled) return;

    // Handle backspace navigation
    if (e.key === "Backspace" && !currentValue[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    if (disabled) return;
    e.preventDefault();
    const text = e.clipboardData.getData("text").trim().slice(0, length);

    if (onChange) {
      onChange(text);
    } else {
      setInternalValue(text);
    }

    // Move focus to the appropriate field after paste
    const focusIdx = Math.min(text.length, length - 1);
    inputsRef.current[focusIdx]?.focus();

    if (text.length === length && onComplete) {
      onComplete(text);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 md:gap-3",
        className
      )}
      onPaste={handlePaste}
    >
      {Array.from({ length }).map((_, i) => (
        <Input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={currentValue[i] || ""}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          disabled={disabled}
          className={cn(
            "h-12 w-10 px-0 text-center text-xl font-bold selection:bg-transparent md:h-14 md:w-12",
            "focus:border-primary focus:ring-primary/10 border-2 transition-all duration-200 focus:ring-4",
            currentValue[i]
              ? "border-primary/50 bg-primary/5 shadow-soft"
              : "border-muted/50 bg-muted/20",
            inputClassName
          )}
        />
      ))}
    </div>
  );
};
