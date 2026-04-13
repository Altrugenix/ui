import React from "react";
import { cn } from "@altrugenix/core";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full font-medium",
          className
        )}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            className="aspect-square h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center rounded-full uppercase">
            {fallback || alt?.slice(0, 2) || "U"}
          </div>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";
