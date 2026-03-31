import React from "react";
import { cn } from "~/lib/utils/cn";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";

export interface ValidationMessage {
  message: string;
  type: "error" | "success" | "info";
}

export interface FormValidationProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: ValidationMessage[];
}

const typeConfig = {
  error: {
    icon: AlertCircle,
    style: "text-destructive",
  },
  success: {
    icon: CheckCircle2,
    style: "text-success",
  },
  info: {
    icon: Info,
    style: "text-info",
  },
};

/**
 * Displays a list of validation messages with corresponding icons.
 */
export const FormValidation = React.forwardRef<
  HTMLDivElement,
  FormValidationProps
>(({ className, messages, ...props }, ref) => {
  if (messages.length === 0) return null;

  return (
    <div
      ref={ref}
      className={cn("space-y-1", className)}
      role="alert"
      aria-live="polite"
      {...props}
    >
      {messages.map((msg, index) => {
        const { icon: Icon, style } = typeConfig[msg.type];

        return (
          <div
            key={index}
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium",
              style
            )}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            <span>{msg.message}</span>
          </div>
        );
      })}
    </div>
  );
});
FormValidation.displayName = "FormValidation";
