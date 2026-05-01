import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar, SidebarItem } from "@altrugenix/sidebar";
import {
  LayoutDashboard,
  Users,
  Settings,
  Mail,
  Bell,
  HelpCircle,
  BarChart3,
  FolderOpen,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Sidebar> = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A vertical navigation panel with icon+text items and collapsible icon-only mode. Supports configurable expanded and collapsed widths.",
      },
    },
  },
  argTypes: {
    collapsed: {
      control: "boolean",
      description: "Whether the sidebar is in icon-only collapsed mode.",
      table: { category: "State" },
    },
    width: {
      description: "Width when expanded (CSS value, default: 16rem).",
      table: { category: "Appearance" },
    },
    collapsedWidth: {
      description: "Width when collapsed (CSS value, default: 4rem).",
      table: { category: "Appearance" },
    },
  },
};

export default meta;

const FullSidebarDemo = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-[600px] overflow-hidden rounded-lg border">
      <Sidebar collapsed={collapsed}>
        <div className="flex items-center justify-between border-b p-4">
          {!collapsed && <span className="font-bold">App Name</span>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-accent rounded p-1"
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>
        <div className="flex-1 space-y-1 p-2">
          <SidebarItem icon={<LayoutDashboard size={20} />} active collapsed={collapsed}>
            Dashboard
          </SidebarItem>
          <SidebarItem icon={<Users size={20} />} collapsed={collapsed}>
            Users
          </SidebarItem>
          <SidebarItem icon={<FolderOpen size={20} />} collapsed={collapsed}>
            Projects
          </SidebarItem>
          <SidebarItem icon={<BarChart3 size={20} />} collapsed={collapsed}>
            Analytics
          </SidebarItem>
          <SidebarItem icon={<Mail size={20} />} collapsed={collapsed}>
            Messages
          </SidebarItem>
          <SidebarItem icon={<Bell size={20} />} collapsed={collapsed}>
            Notifications
          </SidebarItem>
        </div>
        <div className="space-y-1 border-t p-2">
          <SidebarItem icon={<Settings size={20} />} collapsed={collapsed}>
            Settings
          </SidebarItem>
          <SidebarItem icon={<HelpCircle size={20} />} collapsed={collapsed}>
            Support
          </SidebarItem>
        </div>
      </Sidebar>
      <div className="bg-muted/20 flex-1 p-8">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p className="text-muted-foreground mt-4">
          The sidebar is {collapsed ? "collapsed" : "expanded"}. Click the
          toggle to switch.
        </p>
      </div>
    </div>
  );
};

export const Default: StoryObj = {
  render: () => <FullSidebarDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A full sidebar with collapsible toggle, grouped navigation items, and a bottom settings section.",
      },
    },
  },
};

export const CollapsedOnly: StoryObj<typeof Sidebar> = {
  args: {
    collapsed: true,
    children: (
      <div className="flex h-full flex-col py-4">
        <SidebarItem icon={<LayoutDashboard size={20} />} active collapsed />
        <SidebarItem icon={<Users size={20} />} collapsed />
        <SidebarItem icon={<Mail size={20} />} collapsed />
        <SidebarItem icon={<BarChart3 size={20} />} collapsed />
        <div className="mt-auto">
          <SidebarItem icon={<Settings size={20} />} collapsed />
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "A permanently collapsed sidebar showing icon-only navigation.",
      },
    },
  },
};
