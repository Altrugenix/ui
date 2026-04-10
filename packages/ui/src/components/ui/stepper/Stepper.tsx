import React from "react";
import { Check } from "lucide-react";
import { cn } from "~/lib/utils/cn";

export interface Step {
  label: string;
  description?: string;
  optional?: boolean;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: Step[];
  activeStep: number;
  orientation?: "horizontal" | "vertical";
}

/**
 * A component for multi-step flows, guiding users through a sequence of tasks.
 */
export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  orientation = "horizontal",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex w-full",
        orientation === "vertical"
          ? "flex-col gap-4"
          : "flex-row items-center justify-between",
        className
      )}
      {...props}
    >
      {steps.map((step, index) => {
        const isCompleted = index < activeStep;
        const isActive = index === activeStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <div
              className={cn(
                "flex items-start gap-4",
                orientation === "horizontal" && "flex-1 flex-col items-center"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    isCompleted &&
                      "border-primary bg-primary text-primary-foreground",
                    isActive && "border-primary text-primary",
                    !isActive &&
                      !isCompleted &&
                      "border-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="text-xs font-bold">{index + 1}</span>
                  )}
                </div>
                {orientation === "vertical" && (
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "text-sm font-semibold",
                        isActive && "text-primary"
                      )}
                    >
                      {step.label}
                    </span>
                    {step.description && (
                      <span className="text-xs text-muted-foreground">
                        {step.description}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {orientation === "horizontal" && (
                <div className="mt-2 text-center">
                  <span
                    className={cn(
                      "inline-block text-xs font-semibold",
                      isActive && "text-primary"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              )}
            </div>

            {!isLast && (
              <div
                className={cn(
                  "bg-muted transition-colors",
                  orientation === "horizontal"
                    ? "mx-4 h-px flex-1"
                    : "my-1 ml-4 h-8 w-px",
                  isCompleted && "bg-primary"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

Stepper.displayName = "Stepper";
