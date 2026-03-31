import React from "react";
import { cn } from "~/lib/utils/cn";
import { inputVariants } from "./input.styles";
import { type InputProps } from "./input.types";

/**
 * Standard input component with support for labels, error states, and helper text.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      errorText,
      helperText,
      leftAddon,
      rightAddon,
      size,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${label?.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftAddon && (
            <div className="pointer-events-none absolute left-3 flex items-center text-muted-foreground">
              {leftAddon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({
                error: !!error || !!errorText,
                size,
                className,
              }),
              leftAddon && "pl-10",
              rightAddon && "pr-10"
            )}
            ref={ref}
            id={inputId}
            aria-invalid={!!error || !!errorText}
            aria-describedby={
              errorText ? errorId : helperText ? helperId : undefined
            }
            {...props}
          />
          {rightAddon && (
            <div className="absolute right-3 flex items-center text-muted-foreground">
              {rightAddon}
            </div>
          )}
        </div>
        {(errorText || helperText) && (
          <p
            id={errorText ? errorId : helperId}
            className={cn(
              "text-xs font-medium",
              errorText ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {errorText || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
