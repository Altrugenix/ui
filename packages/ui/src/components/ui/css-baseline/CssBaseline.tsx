import React from "react";

/**
 * CssBaseline component that provides a consistent global reset and baseline styles.
 * In this library, it ensures base HTML elements are styled correctly if not already handled by Tailwind.
 */
export const CssBaseline: React.FC = () => {
  // This component doesn't render anything but can be used as a marker
  // or to inject global styles via a side effect if necessary.
  React.useLayoutEffect(() => {
    // Ensure the body has the base background and text color
    document.body.classList.add(
      "bg-background",
      "text-foreground",
      "antialiased"
    );

    return () => {
      document.body.classList.remove(
        "bg-background",
        "text-foreground",
        "antialiased"
      );
    };
  }, []);

  return null;
};

CssBaseline.displayName = "CssBaseline";
