import React from "react";
import { cn } from "~/lib/utils/cn";

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80",
        className
      )}
      {...props}
    />
  );
});
Link.displayName = "Link";
