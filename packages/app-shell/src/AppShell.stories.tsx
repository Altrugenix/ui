import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppShell } from "@altrugenix/app-shell";
import { Navbar } from "@altrugenix/navbar";
import { Sidebar, SidebarItem } from "@altrugenix/sidebar";
import { Button } from "@altrugenix/button";
import { LayoutDashboard, Users, Settings, Mail, Bell } from "lucide-react";

const meta: Meta<typeof AppShell> = {
  title: "Layout/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The main application layout wrapper. Composes a Navbar and Sidebar together, managing the responsive behavior (mobile drawer toggle) and main content area layout.",
      },
    },
  },
  argTypes: {
    navbar: {
      description: "Navbar component to display at the top.",
      table: { category: "Components" },
    },
    sidebar: {
      description: "Sidebar component to display on the left (or in a drawer on mobile).",
      table: { category: "Components" },
    },
    children: {
      description: "The main page content.",
      table: { category: "Content" },
    },
    drawerOpen: {
      description: "Controlled state of the mobile navigation drawer.",
      table: { category: "State" },
    },
    onDrawerToggle: {
      description: "Callback when the hamburger menu is clicked.",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  render: () => (
    <div className="h-[500px] overflow-hidden rounded-lg border shadow-sm">
      <AppShell
        navbar={
          <Navbar brand={<span className="text-lg font-bold">Acme Corp</span>}>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">Help</Button>
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
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="text-muted-foreground">
            This is the main content area inside AppShell. It automatically adapts
            to the available space alongside the sidebar and navbar. Try resizing your browser window.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-card flex h-32 items-center justify-center rounded-lg border shadow-sm font-medium"
              >
                Metric Card {n}
              </div>
            ))}
          </div>
        </div>
      </AppShell>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A complete dashboard layout composing Navbar, Sidebar, and a main content area.",
      },
    },
  },
};

export const NavbarOnly: Story = {
  render: () => (
    <div className="h-[400px] overflow-hidden rounded-lg border shadow-sm">
      <AppShell
        navbar={
          <Navbar brand={<span className="text-lg font-bold">Marketing Site</span>}>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="primary">Sign Up</Button>
          </Navbar>
        }
      >
        <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Build Faster</h1>
          <p className="text-muted-foreground max-w-md">
            AppShell without a sidebar renders only the navbar and centered content. Ideal for marketing pages or simple web apps.
          </p>
          <Button size="lg">Get Started Today</Button>
        </div>
      </AppShell>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "AppShell with only a Navbar, resulting in a full-width content area suitable for landing pages.",
      },
    },
  },
};
