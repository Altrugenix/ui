"use client";

import React, { useState } from "react";
import { cn } from "@altrugenix/core";
import { Drawer } from "../../navigation/drawer/Drawer";
import { Menu } from "lucide-react";
import { Button } from "@altrugenix/button";

export interface AppShellProps {
  /** The navigation bar (fixed or sticky) */
  navbar?: React.ReactNode;
  /** The side navigation bar */
  sidebar?: React.ReactNode;
  /** Main content of the application */
  children: React.ReactNode;
  /** Whether the mobile drawer is open (controlled) */
  drawerOpen?: boolean;
  /** Callback when drawer toggle is clicked */
  onDrawerToggle?: (open: boolean) => void;
  /** Custom class for the main content area */
  mainClassName?: string;
  /** Custom class for the entire shell */
  className?: string;
}

export function AppShell({
  navbar,
  sidebar,
  children,
  drawerOpen: controlledDrawerOpen,
  onDrawerToggle,
  mainClassName,
  className,
}: AppShellProps) {
  const [internalDrawerOpen, setInternalDrawerOpen] = useState(false);
  const isDrawerOpen = controlledDrawerOpen ?? internalDrawerOpen;

  const toggleDrawer = () => {
    const newState = !isDrawerOpen;
    if (onDrawerToggle) {
      onDrawerToggle(newState);
    } else {
      setInternalDrawerOpen(newState);
    }
  };

  return (
    <div
      className={cn(
        "bg-background selection:bg-primary/10 relative flex min-h-screen flex-col",
        className
      )}
    >
      {/* 
        Navbar Slot 
        The navbar is fixed to the top or sticky as defined by the user's Navbar component.
      */}
      {navbar && <div className="z-40 h-auto">{navbar}</div>}

      <div className="flex flex-1 overflow-hidden">
        {/*
          Desktop Sidebar Slot
          Visible only on larger screens. Includes a separator border.
        */}
        {sidebar && (
          <div className="bg-background/50 hidden border-r backdrop-blur-sm lg:block">
            {sidebar}
          </div>
        )}

        {/* 
          Mobile Sidebar (Drawer Wrapper)
          Utilizes the existing Drawer component to provide a responsive mobile experience.
        */}
        {sidebar && (
          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => toggleDrawer()}
            side="left"
            className="overflow-hidden border-none p-0"
            width="280px"
          >
            <div className="h-full w-full">{sidebar}</div>
          </Drawer>
        )}

        {/* 
          Main Workspace Area 
          Provides a scrolling content area with max-width constraints for readability.
        */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <main
            className={cn(
              "flex-1 overflow-y-auto px-4 py-8 focus:outline-none md:px-8",
              mainClassName
            )}
          >
            <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-[1200px] duration-500">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* 
        Floating Toggle for Mobile
        A premium-styled floating action button to reveal the sidebar when needed.
        Invisible on desktop (lg+).
      */}
      {sidebar && (
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "border-primary/20 bg-background/80 fixed right-6 bottom-6 z-50 h-12 w-12 rounded-full shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 lg:hidden",
            isDrawerOpen && "scale-0 opacity-0"
          )}
          onClick={toggleDrawer}
        >
          <Menu className="text-primary h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
