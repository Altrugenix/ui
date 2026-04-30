import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar, SidebarItem } from "../components/navigation/sidebar/Sidebar";
import {
  LayoutDashboard,
  Users,
  Settings,
  Mail,
  Bell,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Sidebar> = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
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
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              active
              collapsed={collapsed}
            >
              Dashboard
            </SidebarItem>
            <SidebarItem icon={<Users size={20} />} collapsed={collapsed}>
              Users
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
            The sidebar is {collapsed ? "collapsed" : "expanded"}.
          </p>
        </div>
      </div>
    );
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
        <div className="mt-auto">
          <SidebarItem icon={<Settings size={20} />} collapsed />
        </div>
      </div>
    ),
  },
};
