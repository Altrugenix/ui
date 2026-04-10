import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils/cn";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  /** Custom separator icon or text */
  separator?: React.ReactNode;
  /** Maximum number of breadcrumbs to show before collapsing */
  maxItems?: number;
}

/**
 * A navigation utility that helps users keep track of their location within the app.
 */
export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      className,
      separator = <ChevronRight className="h-4 w-4" />,
      children,
      ...props
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn(
          "flex flex-wrap items-center text-sm text-muted-foreground",
          className
        )}
        {...props}
      >
        <ol className="flex items-center gap-2">
          {childrenArray.map((child, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center transition-colors hover:text-foreground">
                {child}
              </li>
              {index < childrenArray.length - 1 && (
                <li className="flex items-center opacity-50" aria-hidden="true">
                  {separator}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = "Breadcrumbs";
