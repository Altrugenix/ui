import React from "react";
import { cn } from "~/lib/utils/cn";
import { X } from "lucide-react";

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  /** Which side the drawer slides from */
  side?: "left" | "right";
  /** Title displayed at the top */
  title?: string;
  /** Width of the drawer (CSS value) */
  width?: string;
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      className,
      isOpen,
      onClose,
      side = "right",
      title,
      width = "24rem",
      children,
      ...props
    },
    ref
  ) => {
    // Close on Escape
    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      if (isOpen) {
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          ref={ref}
          className={cn(
            "fixed inset-y-0 z-50 flex flex-col bg-background shadow-xl transition-transform duration-300",
            side === "right"
              ? "right-0 animate-in slide-in-from-right"
              : "left-0 animate-in slide-in-from-left",
            className
          )}
          style={{ width }}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            <button
              onClick={onClose}
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Close drawer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
        </div>
      </>
    );
  }
);
Drawer.displayName = "Drawer";
