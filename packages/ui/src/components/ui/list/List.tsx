import React from "react";
import { cn } from "~/lib/utils/cn";

/* ─── List ─── */
export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Whether to show dividers between items */
  divided?: boolean;
  /** Render as ordered list */
  ordered?: boolean;
}

type ListElement = HTMLOListElement | HTMLUListElement;

export const List = React.forwardRef<ListElement, ListProps>(
  (
    { className, divided = false, ordered = false, children, ...props },
    ref
  ) => {
    if (ordered) {
      return (
        <ol
          ref={ref as React.Ref<HTMLOListElement>}
          className={cn("w-full", divided && "[&>li+li]:border-t", className)}
          {...props}
        >
          {children}
        </ol>
      );
    }

    return (
      <ul
        ref={ref as React.Ref<HTMLUListElement>}
        className={cn("w-full", divided && "[&>li+li]:border-t", className)}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
List.displayName = "List";

/* ─── ListItem ─── */
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Left element (icon, avatar, etc.) */
  leading?: React.ReactNode;
  /** Right element (badge, action, etc.) */
  trailing?: React.ReactNode;
  /** Secondary text below the main content */
  secondary?: React.ReactNode;
  /** Whether the item is interactive (clickable) */
  interactive?: boolean;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    {
      className,
      leading,
      trailing,
      secondary,
      interactive,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <li
        ref={ref}
        className={cn(
          "flex items-center gap-3 px-4 py-3",
          interactive &&
            "cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        {leading && <span className="shrink-0">{leading}</span>}
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium">{children}</div>
          {secondary && (
            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {secondary}
            </p>
          )}
        </div>
        {trailing && <span className="shrink-0">{trailing}</span>}
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
