import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300",
  {
    variants: {
      hover: {
        true: "hover:shadow-md hover:-translate-y-1",
      },
      variant: {
        default: "bg-card",
        secondary: "bg-secondary/50",
        ghost: "border-none shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type CardStylesProps = VariantProps<typeof cardVariants>;
