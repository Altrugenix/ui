import React, { useState, useRef, useEffect } from "react";
import { cn } from "~/lib/utils/cn";

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The trigger element */
  trigger: React.ReactNode;
  /** Alignment of the dropdown */
  align?: "left" | "right";
}

export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ className, trigger, align = "left", children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
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

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div
        ref={containerRef}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {trigger}
        </div>
        {isOpen && (
          <div
            ref={ref}
            className={cn(
              "absolute z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
              "animate-in fade-in-0 zoom-in-95",
              align === "right" ? "right-0" : "left-0"
            )}
            role="menu"
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);
DropdownMenu.displayName = "DropdownMenu";

export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  destructive?: boolean;
}

export const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(({ className, disabled, destructive, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="menuitem"
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        disabled && "pointer-events-none opacity-50",
        destructive
          ? "text-destructive hover:bg-destructive/10 focus:bg-destructive/10"
          : "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    role="separator"
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
