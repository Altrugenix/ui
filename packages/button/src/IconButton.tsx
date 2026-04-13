import React from "react";
import { cn } from "@altrugenix/core";
import { buttonVariants } from "./button.styles";
import {
  type PolymorphicButtonProps,
  type PolymorphicRef,
} from "./button.types";

/**
 * IconButton component optimized for single-icon use cases.
 * Inherits all Button properties but defaults to a square/circular aspect ratio.
 */
type IconButtonComponent = {
  <E extends React.ElementType = "button">(
    props: Omit<PolymorphicButtonProps<E>, "leftIcon" | "rightIcon"> & {
      ref?: PolymorphicRef<E>;
    }
  ): React.ReactElement | null;
  displayName?: string;
};

export const IconButton: IconButtonComponent = React.forwardRef(
  <E extends React.ElementType = "button">(
    {
      as,
      className,
      variant = "primary",
      size = "icon",
      radius = "md",
      children,
      disabled,
      ...props
    }: Omit<PolymorphicButtonProps<E>, "leftIcon" | "rightIcon">,
    ref: PolymorphicRef<E>
  ) => {
    const Component = as || "button";

    return (
      <Component
        ref={ref}
        disabled={disabled}
        className={cn(
          buttonVariants({ variant, size, radius, className }),
          "p-0" // Ensure no additional padding for icon buttons
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as IconButtonComponent;

IconButton.displayName = "IconButton";
