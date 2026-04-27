import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@altrugenix/core";

const typographyVariants = cva("transition-colors duration-200", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-heading",
      h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-heading",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight font-heading",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight font-heading",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight font-heading",
      h6: "scroll-m-20 text-base font-semibold tracking-tight font-heading",
      body1: "text-base leading-7 [&:not(:first-child)]:mt-6",
      body2: "text-sm leading-6 [&:not(:first-child)]:mt-4",
      caption: "text-xs font-medium leading-none text-muted-foreground",
      overline:
        "text-xs font-bold uppercase tracking-widest text-muted-foreground/80",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    noWrap: {
      true: "truncate",
    },
    gutter: {
      true: "mb-4",
    },
  },
  defaultVariants: {
    variant: "body1",
    weight: "normal",
    align: "left",
  },
});

export interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

/**
 * A high-level component to manage consistent text styles (Size, Weight, Color) across the app.
 * Inspired by Joy UI and MUI Typography.
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, variant, weight, align, noWrap, gutter, as, ...props },
    ref
  ) => {
    // Automatically determine the component based on variant if 'as' is not provided
    const Component =
      as ||
      ((variant && ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant as string))
        ? (variant as React.ElementType)
        : variant === "caption" || variant === "overline"
          ? "span"
          : "p");

    return (
      <Component
        ref={ref}
        className={cn(
          typographyVariants({
            variant,
            weight,
            align,
            noWrap,
            gutter,
            className,
          })
        )}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";
