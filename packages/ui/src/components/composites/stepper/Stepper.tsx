import React from "react";
import { cn } from "~/lib/utils/cn";
import { Check } from "lucide-react";

export interface StepItem {
  label: string;
  description?: string;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: StepItem[];
  /** Current active step (0-indexed) */
  activeStep: number;
  /** Orientation */
  orientation?: "horizontal" | "vertical";
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    { className, steps, activeStep, orientation = "horizontal", ...props },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";

    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full",
          isHorizontal ? "items-start" : "flex-col",
          className
        )}
        role="list"
        aria-label="Progress"
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;

          return (
            <div
              key={index}
              role="listitem"
              className={cn(
                "flex",
                isHorizontal ? "flex-1 items-start" : "items-start gap-4"
              )}
            >
              <div
                className={cn(
                  "flex",
                  isHorizontal
                    ? "flex-col items-center"
                    : "flex-row items-start gap-3"
                )}
              >
                {/* Indicator */}
                <div className="flex items-center">
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
                      isCompleted
                        ? "border-primary bg-primary text-primary-foreground"
                        : isActive
                          ? "border-primary bg-background text-primary"
                          : "border-muted-foreground/30 bg-background text-muted-foreground"
                    )}
                  >
                    {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
                  </div>

                  {/* Connector line (horizontal) */}
                  {isHorizontal && index < steps.length - 1 && (
                    <div
                      className={cn(
                        "mx-2 h-0.5 min-w-[2rem] flex-1 transition-colors duration-300",
                        isCompleted ? "bg-primary" : "bg-muted-foreground/20"
                      )}
                    />
                  )}
                </div>

                {/* Labels */}
                <div className={cn(isHorizontal ? "mt-2 text-center" : "")}>
                  <p
                    className={cn(
                      "text-sm font-medium",
                      isActive || isCompleted
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Connector line (vertical) */}
              {!isHorizontal && index < steps.length - 1 && (
                <div
                  className={cn(
                    "ml-4 mt-1 h-8 w-0.5 transition-colors duration-300",
                    isCompleted ? "bg-primary" : "bg-muted-foreground/20"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
);
Stepper.displayName = "Stepper";
