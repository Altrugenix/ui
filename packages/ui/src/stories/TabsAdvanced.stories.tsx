import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "../components/composites/tabs";
import { User, Settings, Lock, Bell, HelpCircle } from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Composites/Tabs/Advanced",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;

const ITEMS = [
  {
    value: "profile",
    label: "Profile",
    icon: <User className="h-4 w-4" />,
    content: <div className="rounded border p-4">Profile Settings Content</div>,
  },
  {
    value: "account",
    label: "Account",
    icon: <Lock className="h-4 w-4" />,
    content: <div className="rounded border p-4">Account Security Content</div>,
  },
  {
    value: "notifications",
    label: "Notifications",
    icon: <Bell className="h-4 w-4" />,
    content: <div className="rounded border p-4">Notification Preferences</div>,
  },
  {
    value: "settings",
    label: "General",
    icon: <Settings className="h-4 w-4" />,
    content: <div className="rounded border p-4">General Settings</div>,
  },
];

export const Vertical: StoryObj = {
  args: {
    items: ITEMS,
    orientation: "vertical",
    variant: "pills",
  },
};

export const UnderlineVertical: StoryObj = {
  args: {
    items: ITEMS,
    orientation: "vertical",
    variant: "underline",
  },
};

export const Scrollable: StoryObj = {
  render: () => (
    <div className="max-w-[300px]">
      <Tabs
        scrollable
        items={[
          ...ITEMS,
          {
            value: "help",
            label: "Help Center",
            icon: <HelpCircle className="h-4 w-4" />,
            content: <div>Help!</div>,
          },
          { value: "extra", label: "Extra Tab", content: <div>Extra</div> },
        ]}
      />
    </div>
  ),
};
