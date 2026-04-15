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
  (
    {
      as,
      className,
      variant = "primary",
      size = "icon",
      radius = "md",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Component = as || "button";

    return (
      <Component
        ref={ref}
        disabled={disabled}
        className={cn(
          buttonVariants({
            variant: variant,
            size: size,
            radius: radius,
            className,
          }),
          "p-0"
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as IconButtonComponent;

IconButton.displayName = "IconButton";
