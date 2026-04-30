import * as React from "react";

export interface NoSsrProps {
  children?: React.ReactNode;
  /** Response rendered during SSR and on first load before hydration */
  fallback?: React.ReactNode;
}

export const NoSsr = ({ children, fallback = null }: NoSsrProps) => {
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

NoSsr.displayName = "NoSsr";
