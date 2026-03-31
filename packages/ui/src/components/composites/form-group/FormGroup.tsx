import React from "react";
import { cn } from "~/lib/utils/cn";

export interface FormGroupProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** Vertical spacing between form fields */
  spacing?: "sm" | "md" | "lg";
}

const spacingMap = {
  sm: "space-y-3",
  md: "space-y-5",
  lg: "space-y-8",
};

/**
 * FormGroup wraps a set of form fields and provides consistent vertical spacing.
 */
export const FormGroup = React.forwardRef<HTMLFormElement, FormGroupProps>(
  ({ className, spacing = "md", children, ...props }, ref) => {
    return (
      <form ref={ref} className={cn(spacingMap[spacing], className)} {...props}>
        {children}
      </form>
    );
  }
);
FormGroup.displayName = "FormGroup";
