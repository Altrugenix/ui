import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppShell } from "../components/layout/app-shell";
import { Navbar } from "../components/navigation/navbar/Navbar";
import { Sidebar, SidebarItem } from "../components/navigation/sidebar/Sidebar";
import { Button } from "@altrugenix/button";
import { LayoutDashboard, Users, Settings, Mail } from "lucide-react";

const meta: Meta<typeof AppShell> = {
  title: "Layout/AppShell",
  component: AppShell,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="h-[500px] overflow-hidden rounded-lg border">
      <AppShell
        navbar={
          <Navbar brand={<span className="text-lg font-bold">My App</span>}>
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="ghost" size="sm">
              Support
            </Button>
          </Navbar>
        }
        sidebar={
          <Sidebar>
            <div className="flex-1 space-y-1 p-2">
              <SidebarItem icon={<LayoutDashboard size={18} />} active>
                Dashboard
              </SidebarItem>
              <SidebarItem icon={<Users size={18} />}>Users</SidebarItem>
              <SidebarItem icon={<Mail size={18} />}>Messages</SidebarItem>
            </div>
            <div className="border-t p-2">
              <SidebarItem icon={<Settings size={18} />}>Settings</SidebarItem>
            </div>
          </Sidebar>
        }
      >
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p className="text-muted-foreground my-4">
          This is the main content area inside AppShell. It automatically adapts
          to the available space alongside the sidebar and navbar.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-card h-32 rounded-lg border p-4 shadow-sm"
            >
              Card {n}
            </div>
          ))}
        </div>
      </AppShell>
    </div>
  ),
};

export const NavbarOnly: StoryObj = {
  render: () => (
    <div className="h-[400px] overflow-hidden rounded-lg border">
      <AppShell
        navbar={
          <Navbar brand={<span className="text-lg font-bold">Simple App</span>}>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Navbar>
        }
      >
        <h1 className="text-2xl font-bold">No Sidebar Layout</h1>
        <p className="text-muted-foreground mt-4">
          AppShell without a sidebar renders only the navbar and content.
        </p>
      </AppShell>
    </div>
  ),
};
