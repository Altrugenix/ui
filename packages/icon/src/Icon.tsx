import React from "react";
import { cn } from "@altrugenix/core";
import * as LucideIcons from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons;
  size?: number | string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, name, size = 24, ...props }, ref) => {
    const LucideIcon = LucideIcons[name] as React.ElementType;

    if (!LucideIcon) {
      return null;
    }

    return (
      <LucideIcon
        ref={ref}
        className={cn("lucide", className)}
        size={size}
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";
