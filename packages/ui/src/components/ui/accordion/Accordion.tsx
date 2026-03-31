import React, { useState } from "react";
import { cn } from "~/lib/utils/cn";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow multiple items open at once */
  type?: "single" | "multiple";
  /** Default open items */
  defaultValue?: string[];
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, items, type = "single", defaultValue = [], ...props }, ref) => {
    const [openItems, setOpenItems] = useState<string[]>(defaultValue);

    const toggle = (value: string) => {
      if (type === "single") {
        setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
      } else {
        setOpenItems((prev) =>
          prev.includes(value)
            ? prev.filter((v) => v !== value)
            : [...prev, value]
        );
      }
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {items.map((item) => {
          const isOpen = openItems.includes(item.value);

          return (
            <div key={item.value} className="border-b">
              <button
                type="button"
                disabled={item.disabled}
                onClick={() => toggle(item.value)}
                className={cn(
                  "flex w-full items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline",
                  item.disabled && "cursor-not-allowed opacity-50"
                )}
                aria-expanded={isOpen}
              >
                {item.trigger}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  isOpen ? "max-h-96 pb-4" : "max-h-0"
                )}
              >
                <div className="text-sm text-muted-foreground">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
Accordion.displayName = "Accordion";
