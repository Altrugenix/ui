import React from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.styles";

export interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  /**
   * Whether the button is in a loading state.
   */
  isLoading?: boolean;
  /**
   * Left icon to render.
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon to render.
   */
  rightIcon?: React.ReactNode;
}

export type PolymorphicButtonProps<E extends React.ElementType> = {
  as?: E;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
} & Omit<
  React.ComponentPropsWithoutRef<E>,
  keyof {
    as?: E;
    className?: string;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
  }
>;

export type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>["ref"];
