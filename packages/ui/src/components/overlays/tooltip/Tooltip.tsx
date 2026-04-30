import React, { useState } from "react";
import { cn } from "~/lib/utils/cn";

export interface TooltipProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "content"
> {
  /** The content to display in the tooltip */
  content: React.ReactNode;
  /** Side to show the tooltip */
  side?: "top" | "bottom" | "left" | "right";
  /** Delay before showing (ms) */
  delay?: number;
  children: React.ReactNode;
}

const sideStyles = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export const Tooltip: React.FC<TooltipProps> = ({
  className,
  content,
  side = "top",
  delay = 300,
  children,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  const show = () => {
    timeoutRef.current = window.setTimeout(() => setIsVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      {...props}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            "bg-primary text-primary-foreground absolute z-50 max-w-xs rounded-md px-3 py-1.5 text-xs shadow-md",
            "animate-in fade-in-0 zoom-in-95",
            sideStyles[side],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
Tooltip.displayName = "Tooltip";
