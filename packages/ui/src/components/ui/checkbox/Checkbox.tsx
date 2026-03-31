import React, { useId } from "react";
import { cn } from "~/lib/utils/cn";

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
            "peer h-4 w-4 shrink-0 appearance-none rounded-sm border border-primary bg-background ring-offset-background checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "relative after:absolute after:left-[5px] after:top-[2px] after:hidden after:h-[8px] after:w-[4px] after:rotate-45 after:border-b-2 after:border-r-2 after:border-primary-foreground after:content-[''] checked:after:block",
            className
          )}
          {...props}
        />
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={checkboxId}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
