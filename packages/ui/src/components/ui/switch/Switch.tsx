import React, { useId } from "react";
import { cn } from "~/lib/utils/cn";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = useId();
    const switchId = id || generatedId;

    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={switchId}
          ref={ref}
          className={cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer appearance-none items-center rounded-full border-2 border-transparent bg-input transition-colors checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            "relative after:pointer-events-none after:absolute after:block after:h-5 after:w-5 after:translate-x-0 after:rounded-full after:bg-background after:shadow-lg after:ring-0 after:transition-transform after:content-[''] checked:after:translate-x-5",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={switchId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);
Switch.displayName = "Switch";
