import React from "react";
import { X } from "lucide-react";
import { cn } from "~/lib/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const chipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground hover:bg-muted/80",
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        soft: "bg-primary/10 text-primary border border-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ChipProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  /** Left icon or avatar */
  avatar?: React.ReactNode;
  /** Right button for deletion */
  onDelete?: () => void;
  /** Whether the chip is interactive */
  clickable?: boolean;
}

/**
 * A compact element that represents an input, attribute, or entity.
 * Inspired by MUI Chip.
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      variant,
      size,
      avatar,
      onDelete,
      clickable,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          chipVariants({ variant, size, className }),
          clickable && "cursor-pointer active:scale-95"
        )}
        {...props}
      >
        {avatar && (
          <span className="flex shrink-0 items-center justify-center">
            {avatar}
          </span>
        )}
        <span className="truncate">{children}</span>
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="rounded-full p-0.5 transition-colors hover:bg-foreground/10"
            aria-label="Delete"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = "Chip";
