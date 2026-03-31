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
type ButtonComponent = {
  <E extends React.ElementType = "button">(
    props: PolymorphicButtonProps<E> & { ref?: PolymorphicRef<E> }
  ): React.ReactNode;
  displayName?: string;
};

export const Button: ButtonComponent = React.forwardRef(
  (
    {
      as,
      className,
      variant,
      size,
      radius,
      fullWidth,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    }: PolymorphicButtonProps<React.ElementType>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>
  ) => {
    const Component = as || "button";

    return (
      <Component
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(
          buttonVariants({ variant, size, radius, fullWidth, className })
        )}
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
) as ButtonComponent;

Button.displayName = "Button";
