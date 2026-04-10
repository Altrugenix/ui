import React, { useRef, useEffect } from "react";
import { useCombinedRefs } from "~/lib/utils/refs";

export interface ClickAwayListenerProps {
  /** The child element to wrap */
  children: React.ReactElement;
  /** Callback triggered when a click occurs outside the child */
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  /** Whether to listen for clicks */
  active?: boolean;
}

/**
 * A utility component to detect and handle click events outside its child element.
 */
export const ClickAwayListener: React.FC<ClickAwayListenerProps> = ({
  children,
  onClickAway,
  active = true,
}) => {
  const childRef = useRef<HTMLElement>(null);

  // Combine the local ref with the child's ref (if any)
  const combinedRef = useCombinedRefs(
    childRef,
    (children as React.ReactElement & { ref?: React.Ref<HTMLElement> }).ref
  );

  useEffect(() => {
    if (!active) return;

    const handleEvents = (event: MouseEvent | TouchEvent) => {
      if (
        childRef.current &&
        !childRef.current.contains(event.target as Node)
      ) {
        onClickAway(event);
      }
    };

    document.addEventListener("mousedown", handleEvents);
    document.addEventListener("touchstart", handleEvents);

    return () => {
      document.removeEventListener("mousedown", handleEvents);
      document.removeEventListener("touchstart", handleEvents);
    };
  }, [onClickAway, active]);

  return React.cloneElement(children, {
    ref: combinedRef,
  });
};

ClickAwayListener.displayName = "ClickAwayListener";
