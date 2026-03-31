import React from "react";
import { cn } from "~/lib/utils/cn";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Whether the sidebar is collapsed to icon-only mode */
  collapsed?: boolean;
  /** Width when expanded (CSS value) */
  width?: string;
  /** Width when collapsed (CSS value) */
  collapsedWidth?: string;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      collapsed = false,
      width = "16rem",
      collapsedWidth = "4rem",
      children,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "flex h-full flex-col border-r bg-background transition-all duration-300 ease-in-out",
          className
        )}
        style={{
          width: collapsed ? collapsedWidth : width,
          minWidth: collapsed ? collapsedWidth : width,
          ...style,
        }}
        {...props}
      >
        {children}
      </aside>
    );
  }
);
Sidebar.displayName = "Sidebar";

export interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  active?: boolean;
  collapsed?: boolean;
}

export const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, icon, active, collapsed, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
          collapsed && "justify-center px-2",
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {!collapsed && <span className="truncate">{children}</span>}
      </div>
    );
  }
);
SidebarItem.displayName = "SidebarItem";
