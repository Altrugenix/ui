import React, { useState } from "react";
import { cn } from "@altrugenix/core";

export interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  /** Controlled value — the currently active tab value */
  value?: string;
  /** Default active tab value (uncontrolled) */
  defaultValue?: string;
  /** Callback when the active tab changes */
  onValueChange?: (value: string) => void;
  /** Visual variant of the tab list */
  variant?: "default" | "pills" | "underline";
  /** Orientation of the tab list */
  orientation?: "horizontal" | "vertical";
  /** Whether the tab list is scrollable when items overflow */
  scrollable?: boolean;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      className,
      items,
      value: controlledValue,
      defaultValue,
      onValueChange,
      variant = "default",
      orientation = "horizontal",
      scrollable = false,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(
      defaultValue || items[0]?.value || ""
    );
    const activeValue = controlledValue ?? internalValue;

    const handleTabClick = (tabValue: string) => {
      if (controlledValue === undefined) {
        setInternalValue(tabValue);
      }
      onValueChange?.(tabValue);
    };

    const activeContent = items.find((item) => item.value === activeValue)?.content;

    const listStyles = {
      default:
        "inline-flex h-auto items-center justify-start rounded-md bg-muted p-1 text-muted-foreground",
      pills:
        "inline-flex h-auto items-center justify-start gap-1 text-muted-foreground",
      underline:
        "inline-flex h-auto items-center justify-start gap-4 border-b text-muted-foreground",
    };

    const triggerStyles = {
      default:
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      pills:
        "inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      underline:
        "inline-flex items-center justify-center whitespace-nowrap pb-2.5 pt-1.5 px-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-b-2 -mb-px",
    };

    const activeTriggerStyles = {
      default: "bg-background text-foreground shadow-sm",
      pills: "bg-primary text-primary-foreground shadow-sm",
      underline: "border-primary text-foreground",
    };

    const inactiveTriggerStyles = {
      default: "",
      pills: "hover:bg-muted hover:text-foreground",
      underline: "border-transparent hover:text-foreground",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          orientation === "vertical" ? "flex gap-6" : "flex-col",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            listStyles[variant],
            orientation === "vertical" && "h-auto w-auto min-w-[120px] flex-col",
            scrollable &&
              (orientation === "horizontal"
                ? "scrollbar-hide overflow-x-auto"
                : "overflow-y-auto")
          )}
          role="tablist"
        >
          {items.map((item) => (
            <button
              key={item.value}
              role="tab"
              aria-selected={activeValue === item.value}
              aria-controls={`tabpanel-${item.value}`}
              disabled={item.disabled}
              onClick={() => handleTabClick(item.value)}
              className={cn(
                triggerStyles[variant],
                orientation === "vertical" && "w-full justify-start",
                activeValue === item.value
                  ? activeTriggerStyles[variant]
                  : inactiveTriggerStyles[variant]
              )}
            >
              {item.icon && (
                <span
                  className={cn(
                    "inline-flex",
                    orientation === "horizontal" ? "mr-2" : "mr-3"
                  )}
                >
                  {item.icon}
                </span>
              )}
              {item.label}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`tabpanel-${activeValue}`}
          className={cn(orientation === "horizontal" ? "mt-4" : "flex-1")}
        >
          {activeContent}
        </div>
      </div>
    );
  }
);
Tabs.displayName = "Tabs";
