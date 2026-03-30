import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      error: {
        true: "border-destructive focus-visible:ring-destructive",
      },
      size: {
        sm: "h-9 text-xs px-2",
        md: "h-10 text-sm px-3",
        lg: "h-12 text-base px-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type InputStylesProps = VariantProps<typeof inputVariants>;
