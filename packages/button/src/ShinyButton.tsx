import React from "react";
import { motion } from "framer-motion";
import { cn } from "@altrugenix/core";
import { Button } from "./Button";
import type { PolymorphicButtonProps, PolymorphicRef } from "./button.types";

/**
 * ShinyButton - A premium "Call to Action" button with a moving light reflection effect.
 * It inherits all the properties of the base Button component.
 */
type ShinyButtonComponent = {
  <E extends React.ElementType = "button">(
    props: PolymorphicButtonProps<E> & { ref?: PolymorphicRef<E> }
  ): React.ReactNode;
  displayName?: string;
};

export const ShinyButton: ShinyButtonComponent = React.forwardRef(
  (
    {
      children,
      className,
      variant = "primary",
      ...props
    }: PolymorphicButtonProps<React.ElementType>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          "group relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>

        {/* Shiny sweep effect */}
        <motion.span
          initial={{ left: "-100%", opacity: 0 }}
          whileHover={{
            left: "200%",
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            },
          }}
          className="pointer-events-none absolute top-0 h-full w-[40px] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />

        {/* Subtle glow effect on hover */}
        <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Button>
    );
  }
) as ShinyButtonComponent;

ShinyButton.displayName = "ShinyButton";
