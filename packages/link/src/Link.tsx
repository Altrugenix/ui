import React from "react";
import { cn } from "@altrugenix/core";

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors",
        className
      )}
      {...props}
    />
  );
});
Link.displayName = "Link";
