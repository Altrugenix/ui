import React from "react";
import { cn } from "~/lib/utils/cn";

export interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "destructive";
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
}

const dotVariants = {
  default: "border-primary bg-primary",
  success: "border-success bg-success",
  warning: "border-warning bg-warning",
  destructive: "border-destructive bg-destructive",
};

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative space-y-0", className)} {...props}>
        {items.map((item, index) => {
          const variant = item.variant || "default";
          const isLast = index === items.length - 1;

          return (
            <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
              {/* Line */}
              {!isLast && (
                <div className="absolute left-[0.6875rem] top-6 h-full w-px bg-border" />
              )}

              {/* Dot / Icon */}
              <div className="relative z-10 flex shrink-0">
                {item.icon ? (
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background",
                      dotVariants[variant].replace("bg-", "border-")
                    )}
                  >
                    <span className="h-3 w-3">{item.icon}</span>
                  </div>
                ) : (
                  <div
                    className={cn(
                      "mt-1 h-3.5 w-3.5 rounded-full border-2",
                      dotVariants[variant]
                    )}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{item.title}</p>
                  {item.date && (
                    <time className="text-xs text-muted-foreground">
                      {item.date}
                    </time>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";
