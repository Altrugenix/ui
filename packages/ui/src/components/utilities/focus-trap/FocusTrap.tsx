import React, { useRef, useEffect } from "react";
import { useCombinedRefs } from "~/lib/utils/refs";

export interface FocusTrapProps {
  /** The children to trap focus within */
  children: React.ReactElement;
  /** Whether the trap is active */
  active?: boolean;
}

/**
 * A critical accessibility component that traps focus within a specific container (e.g., inside a Modal or Drawer).
 */
export const FocusTrap: React.FC<FocusTrapProps> = ({
  children,
  active = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  const combinedRef = useCombinedRefs(
    containerRef,
    (children as React.ReactElement & { ref?: React.Ref<HTMLElement> }).ref
  );

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Initial focus
    firstElement.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return React.cloneElement(children, {
    ref: combinedRef,
  });
};

FocusTrap.displayName = "FocusTrap";
