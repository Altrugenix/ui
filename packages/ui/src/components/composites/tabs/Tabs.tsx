import React, { useState } from "react";
import { cn } from "~/lib/utils/cn";

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

    const activeContent = items.find(
      (item) => item.value === activeValue
    )?.content;

    const listStyles = {
      default:
        "inline-flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground",
      pills:
        "inline-flex h-10 items-center justify-start gap-1 text-muted-foreground",
      underline:
        "inline-flex h-10 items-center justify-start gap-4 border-b text-muted-foreground",
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
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className={cn(listStyles[variant])} role="tablist">
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
                activeValue === item.value
                  ? activeTriggerStyles[variant]
                  : inactiveTriggerStyles[variant]
              )}
            >
              {item.icon && (
                <span className="mr-2 inline-flex">{item.icon}</span>
              )}
              {item.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" id={`tabpanel-${activeValue}`} className="mt-4">
          {activeContent}
        </div>
      </div>
    );
  }
);
Tabs.displayName = "Tabs";
