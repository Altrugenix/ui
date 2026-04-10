import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  /** The children to render in the portal */
  children: React.ReactNode;
  /** The container to render the portal into (defaults to document.body) */
  container?: HTMLElement | null;
  /** Whether the portal is disabled */
  disabled?: boolean;
}

/**
 * A utility to render component children into a DOM node at the end of document.body.
 */
export const Portal: React.FC<PortalProps> = ({
  children,
  container,
  disabled = false,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (disabled) {
    return <>{children}</>;
  }

  if (!mounted) {
    return null;
  }

  const target = container || document.body;
  return createPortal(children, target);
};

Portal.displayName = "Portal";
