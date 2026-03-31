import React, { useId } from "react";
import { cn } from "~/lib/utils/cn";

export interface FormFieldProps {
  /** Label text displayed above the input */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message — when set, field shows error styling */
  error?: string;
  /** Whether the field is required (shows asterisk) */
  required?: boolean;
  /** Additional className for the wrapper */
  className?: string;
  /** The form control element */
  children: React.ReactElement;
}

/**
 * FormField composes a label + input + error/helper text into a unified field.
 * It automatically wires up the `id`, `aria-describedby`, and `aria-invalid` props
 * to the child input element.
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  helperText,
  error,
  required,
  className,
  children,
}) => {
  const generatedId = useId();
  const fieldId =
    ((children.props as Record<string, unknown>).id as string) || generatedId;
  const errorId = `${fieldId}-error`;
  const helperId = `${fieldId}-helper`;
  const describedBy = error ? errorId : helperText ? helperId : undefined;

  // Clone the child element to inject accessibility props
  const enhancedChild = React.cloneElement(children, {
    id: fieldId,
    "aria-invalid": !!error,
    "aria-describedby": describedBy,
  } as React.HTMLAttributes<HTMLElement>);

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {label && (
        <label
          htmlFor={fieldId}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && (
            <span className="ml-1 text-destructive" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      {enhancedChild}
      {(error || helperText) && (
        <p
          id={error ? errorId : helperId}
          className={cn(
            "text-xs font-medium",
            error ? "text-destructive" : "text-muted-foreground"
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};
FormField.displayName = "FormField";
