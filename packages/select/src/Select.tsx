import React, { useId } from "react";
import { cn } from "@altrugenix/core";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: boolean;
  errorText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, errorText, children, id, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const errorId = `${selectId}-error`;

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            className={cn(
              "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full appearance-none items-center justify-between rounded-md border px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              (error || errorText) &&
                "border-destructive focus-visible:ring-destructive",
              className
            )}
            ref={ref}
            id={selectId}
            aria-invalid={!!error || !!errorText}
            aria-describedby={errorText ? errorId : undefined}
            {...props}
          >
            {children}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 opacity-50" />
        </div>
        {errorText && (
          <p id={errorId} className="text-destructive text-xs font-medium">
            {errorText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
