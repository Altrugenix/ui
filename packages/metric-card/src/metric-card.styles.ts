import { cva, type VariantProps } from "class-variance-authority";

export const metricCardVariants = cva(
  "relative overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        glass: "glass",
        outline: "border border-border bg-transparent",
        primary: "bg-primary text-primary-foreground",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
      status: {
        neutral: "",
        success: "border-l-4 border-l-success",
        warning: "border-l-4 border-l-warning",
        destructive: "border-l-4 border-l-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      status: "neutral",
    },
  }
);

export type MetricCardStylesProps = VariantProps<typeof metricCardVariants>;
