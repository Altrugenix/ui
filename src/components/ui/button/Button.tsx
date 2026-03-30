import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { buttonVariants } from "./button.styles";
import {
  type PolymorphicButtonProps,
  type PolymorphicRef,
} from "./button.types";
import React from "react";

/**
 * Button component with support for variants, sizes, loading states, and icons.
 * This is a polymorphic component that can be rendered as a button, link, or any other element.
 */
export const Button = React.forwardRef(
  <E extends React.ElementType = "button">(
    {
      as,
      className,
      variant,
      size,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    }: PolymorphicButtonProps<E>,
    ref: PolymorphicRef<E>
  ) => {
    const Component = as || "button";

    return (
      <Component
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {!isLoading && leftIcon && (
          <span className="mr-2 inline-flex" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="ml-2 inline-flex" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";
