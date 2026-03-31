import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils/cn";

export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Menu items to display on right-click */
  menu: React.ReactNode;
}

export const ContextMenu = React.forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ className, children, menu, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setIsOpen(true);
    }, []);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }, []);

    return (
      <div
        ref={ref}
        onContextMenu={handleContextMenu}
        className={cn(className)}
        {...props}
      >
        {children}
        {isOpen && (
          <div
            ref={menuRef}
            className="fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95"
            style={{ left: position.x, top: position.y }}
            role="menu"
            onClick={() => setIsOpen(false)}
          >
            {menu}
          </div>
        )}
      </div>
    );
  }
);
ContextMenu.displayName = "ContextMenu";
