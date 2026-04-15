import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
} from "@altrugenix/list";
import {
  User,
  Settings,
  LogOut,
  Bell,
  Shield,
  ChevronRight,
} from "lucide-react";

const meta: Meta<typeof List> = {
  title: "UI/List/Advanced",
  component: List,
  tags: ["autodocs"],
};

export default meta;

export const InteractiveList: StoryObj = {
  render: () => (
    <div className="max-w-sm rounded-xl border bg-card">
      <List divided>
        <ListItemButton>
          <ListItemDecorator>
            <User className="h-4 w-4" />
          </ListItemDecorator>
          <div className="flex-1 font-medium">Profile Settings</div>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </ListItemButton>
        <ListItemButton>
          <ListItemDecorator>
            <Bell className="h-4 w-4" />
          </ListItemDecorator>
          <div className="flex-1 font-medium">Notifications</div>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </ListItemButton>
        <ListItemButton>
          <ListItemDecorator>
            <Shield className="h-4 w-4" />
          </ListItemDecorator>
          <div className="flex-1 font-medium">Privacy & Security</div>
          <ChevronRight className="h-4 w-4 opacity-50" />
        </ListItemButton>
        <ListItemButton className="text-destructive hover:bg-destructive/10">
          <ListItemDecorator>
            <LogOut className="h-4 w-4" />
          </ListItemDecorator>
          <div className="flex-1 font-bold">Logout</div>
        </ListItemButton>
      </List>
    </div>
  ),
};

export const MixedContent: StoryObj = {
  render: () => (
    <div className="max-w-sm rounded-xl border bg-card">
      <List divided>
        <ListItem
          leading={<Settings className="h-5 w-5" />}
          trailing={<div className="h-2 w-2 rounded-full bg-primary" />}
          secondary="Manage your application settings"
        >
          System Settings
        </ListItem>
        <ListItem
          leading={<Bell className="h-5 w-5 text-amber-500" />}
          secondary="Updated 2 hours ago"
        >
          Activity Feed
        </ListItem>
      </List>
    </div>
  ),
};
