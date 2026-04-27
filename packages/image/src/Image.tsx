import React, { useState } from "react";
import { cn } from "@altrugenix/core";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, fallback, onLoad, onError, ...props }, ref) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
      <img
        ref={ref}
        src={error ? fallback : src}
        alt={alt}
        className={cn(
          "object-cover transition-opacity duration-300",
          loading && "opacity-0",
          className
        )}
        onLoad={(e) => {
          setLoading(false);
          onLoad?.(e);
        }}
        onError={(e) => {
          setError(true);
          setLoading(false);
          onError?.(e);
        }}
        {...props}
      />
    );
  }
);
Image.displayName = "Image";
