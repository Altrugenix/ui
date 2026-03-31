import React from "react";
import { cn } from "@/lib/utils/cn";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 1, ...props }, ref) => {
    const Component = `h${level}` as React.ElementType;

    const variants = {
      1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-heading",
      2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-heading",
      3: "scroll-m-20 text-2xl font-semibold tracking-tight font-heading",
      4: "scroll-m-20 text-xl font-semibold tracking-tight font-heading",
      5: "scroll-m-20 text-lg font-semibold tracking-tight font-heading",
      6: "scroll-m-20 text-base font-semibold tracking-tight font-heading",
    };

    return (
      <Component
        ref={ref}
        className={cn(variants[level], className)}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";
