import React, { useId } from "react";
import { cn } from "@altrugenix/core";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = useId();
    const radioId = id || generatedId;

    return (
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          id={radioId}
          ref={ref}
          className={cn(
            "border-primary bg-background text-primary ring-offset-background checked:border-primary focus-visible:ring-ring peer aspect-square h-4 w-4 appearance-none rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "after:bg-primary relative after:absolute after:top-1/2 after:left-1/2 after:hidden after:h-2.5 after:w-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:content-[''] checked:after:block",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Radio.displayName = "Radio";
