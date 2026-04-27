import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@altrugenix/core";

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  align?: "left" | "center" | "right";
  side?: "top" | "bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      className,
      trigger,
      align = "center",
      side = "bottom",
      open,
      onOpenChange,
      children,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = open !== undefined ? open : internalOpen;

    const setIsOpen = useCallback(
      (val: boolean) => {
        setInternalOpen(val);
        onOpenChange?.(val);
      },
      [onOpenChange]
    );

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, setIsOpen]);

    const alignStyles = {
      left: "left-0",
      center: "left-1/2 -translate-x-1/2",
      right: "right-0",
    };

    const sideStyles = {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
    };

    return (
      <div ref={containerRef} className="relative inline-block">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          {trigger}
        </div>
        {isOpen && (
          <div
            ref={ref}
            className={cn(
              "absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
              "animate-in fade-in-0 zoom-in-95",
              alignStyles[align],
              sideStyles[side],
              className
            )}
            role="dialog"
            {...props}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);
Popover.displayName = "Popover";
