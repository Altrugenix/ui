import React from "react";
import { type VariantProps } from "class-variance-authority";
import { inputVariants } from "./input.styles";

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /**
   * The text label for the input.
   */
  label?: string;
  /**
   * Optional helper text to display below the input.
   */
  helperText?: string;
  /**
   * Optional error message to display below the input.
   */
  errorText?: string;
  /**
   * Optional left side element (e.g., search icon).
   */
  leftAddon?: React.ReactNode;
  /**
   * Optional right side element (e.g., clear button).
   */
  rightAddon?: React.ReactNode;
}
