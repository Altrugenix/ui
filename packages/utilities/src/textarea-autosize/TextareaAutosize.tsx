import React, { useRef, useLayoutEffect } from "react";
import { cn } from "@altrugenix/core";
import { useCombinedRefs } from "@altrugenix/core";

export interface TextareaAutosizeProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Maximum number of rows to show */
  maxRows?: number;
  /** Minimum number of rows to show */
  minRows?: number;
}

/**
 * A specialized textarea component that automatically adjusts its height as the user types.
 */
export const TextareaAutosize = React.forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps
>(({ className, onChange, minRows = 1, ...props }, ref) => {
  const internalRef = useRef<HTMLTextAreaElement>(null);
  const combinedRef = useCombinedRefs(internalRef, ref);

  const adjustHeight = () => {
    const textarea = internalRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    const newHeight = textarea.scrollHeight;

    // Calculate min/max height based on line height if needed
    // For now, just let scrollHeight handle it
    textarea.style.height = `${newHeight}px`;
  };

  useLayoutEffect(() => {
    adjustHeight();
  }, [props.value, props.defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    onChange?.(e);
  };

  return (
    <textarea
      ref={combinedRef}
      onChange={handleChange}
      className={cn(
        "border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full resize-none overflow-hidden rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{ height: "auto" }}
      rows={minRows}
      {...props}
    />
  );
});

TextareaAutosize.displayName = "TextareaAutosize";
