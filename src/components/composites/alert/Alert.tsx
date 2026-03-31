import React from "react";
import { cn } from "@/lib/utils/cn";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  X,
} from "lucide-react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "info";
  title?: string;
  /** Show a close button */
  onClose?: () => void;
}

const variantStyles = {
  default: "bg-background text-foreground border-border",
  success: "border-success/50 bg-success/10 text-success [&>svg]:text-success",
  warning:
    "border-warning/50 bg-warning/10 text-warning-foreground [&>svg]:text-warning",
  destructive:
    "border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive",
  info: "border-info/50 bg-info/10 text-info [&>svg]:text-info",
};

const iconMap = {
  default: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle,
  info: Info,
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, variant = "default", title, onClose, children, ...props },
    ref
  ) => {
    const IconComponent = iconMap[variant];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative flex w-full items-start gap-3 rounded-lg border p-4",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        <IconComponent className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="flex-1 space-y-1">
          {title && (
            <h5 className="text-sm font-semibold leading-none tracking-tight">
              {title}
            </h5>
          )}
          {children && (
            <div className="text-sm opacity-90 [&_p]:leading-relaxed">
              {children}
            </div>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-md p-0.5 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";
