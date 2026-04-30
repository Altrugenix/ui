import React from "react";
import { cn } from "@altrugenix/core";
import { Menu, X } from "lucide-react";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Brand element (logo + text) */
  brand?: React.ReactNode;
  /** Navigation links / items for the right side */
  children?: React.ReactNode;
  /** Whether the navbar is sticky */
  sticky?: boolean;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, brand, sticky = true, children, ...props }, ref) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
      <nav
        ref={ref}
        className={cn(
          "bg-background/95 supports-[backdrop-filter]:bg-background/60 z-40 w-full border-b backdrop-blur",
          sticky && "sticky top-0",
          className
        )}
        {...props}
      >
        <div className="container flex h-16 items-center justify-between">
          {brand && <div className="flex items-center gap-2">{brand}</div>}

          {/* Desktop nav */}
          <div className="hidden items-center gap-4 md:flex">{children}</div>

          {/* Mobile toggle */}
          <button
            className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded-md p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t pb-4 md:hidden">
            <div className="container flex flex-col gap-3 pt-4">{children}</div>
          </div>
        )}
      </nav>
    );
  }
);
Navbar.displayName = "Navbar";
