import { cva } from "class-variance-authority";

export const paperVariants = cva(
  "bg-surface text-surface-foreground transition-shadow duration-200",
  {
    variants: {
      elevation: {
        0: "shadow-none",
        1: "shadow-sm",
        2: "shadow",
        3: "shadow-md",
        4: "shadow-lg",
        5: "shadow-xl",
        6: "shadow-2xl",
      },
      variant: {
        elevation: "border-transparent",
        outlined: "border border-border shadow-none",
      },
      square: {
        true: "rounded-none",
        false: "rounded-xl",
      },
    },
    defaultVariants: {
      elevation: 1,
      variant: "elevation",
      square: false,
    },
  }
);
