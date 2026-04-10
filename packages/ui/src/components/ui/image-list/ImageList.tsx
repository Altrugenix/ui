import React from "react";
import { cn } from "~/lib/utils/cn";

export interface ImageListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number;
  rows?: number;
}

export const ImageListItem: React.FC<ImageListItemProps> = ({
  cols = 1,
  rows = 1,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      style={{
        gridColumn: `span ${cols}`,
        gridRow: `span ${rows}`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export interface ImageListProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: number;
  gap?: number;
  variant?: "standard" | "quilted" | "woven" | "masonry";
}

/**
 * A specialized grid layout optimized for displaying collections of images with captions and hover effects.
 */
export const ImageList: React.FC<ImageListProps> = ({
  cols = 2,
  gap = 4,
  variant = "standard",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid",
        variant === "masonry" ? "columns-2 md:columns-3" : "",
        className
      )}
      style={{
        gridTemplateColumns:
          variant !== "masonry" ? `repeat(${cols}, minmax(0, 1fr))` : undefined,
        gap: `${gap}px`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

ImageList.displayName = "ImageList";
ImageListItem.displayName = "ImageListItem";
