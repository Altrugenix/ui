import React, { useId } from "react";
import { cn } from "@altrugenix/core";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div className="items-top flex space-x-2">
        <input
          type="checkbox"
          id={checkboxId}
          ref={ref}
          className={cn(
            "border-primary bg-background ring-offset-background checked:border-primary checked:bg-primary focus-visible:ring-ring peer h-4 w-4 shrink-0 appearance-none rounded-sm border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            "after:border-primary-foreground relative after:absolute after:top-[2px] after:left-[5px] after:hidden after:h-[8px] after:w-[4px] after:rotate-45 after:border-r-2 after:border-b-2 after:content-[''] checked:after:block",
            className
          )}
          {...props}
        />
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={checkboxId}
              className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
