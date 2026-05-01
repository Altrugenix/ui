import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@altrugenix/tabs";
import { User, Settings, Lock, Bell, HelpCircle } from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs/Advanced",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Advanced compositions and layouts for the Tabs component.",
      },
    },
  },
};

export default meta;

const ITEMS = [
  {
    value: "profile",
    label: "Profile",
    icon: <User className="h-4 w-4" />,
    content: <div className="rounded border p-4 text-sm bg-card text-card-foreground">Profile Settings Content</div>,
  },
  {
    value: "account",
    label: "Account",
    icon: <Lock className="h-4 w-4" />,
    content: <div className="rounded border p-4 text-sm bg-card text-card-foreground">Account Security Content</div>,
  },
  {
    value: "notifications",
    label: "Notifications",
    icon: <Bell className="h-4 w-4" />,
    content: <div className="rounded border p-4 text-sm bg-card text-card-foreground">Notification Preferences</div>,
  },
  {
    value: "settings",
    label: "General",
    icon: <Settings className="h-4 w-4" />,
    content: <div className="rounded border p-4 text-sm bg-card text-card-foreground">General Settings</div>,
  },
];

export const VerticalPills: StoryObj = {
  args: {
    items: ITEMS,
    orientation: "vertical",
    variant: "pills",
  },
  parameters: {
    docs: {
      description: {
        story: "A vertical tab list using the pills variant, commonly used for sidebar settings menus.",
      },
    },
  },
};

export const VerticalUnderline: StoryObj = {
  args: {
    items: ITEMS,
    orientation: "vertical",
    variant: "underline",
  },
  parameters: {
    docs: {
      description: {
        story: "A vertical tab list using the underline variant, creating a minimal border-indicator effect.",
      },
    },
  },
};

export const ScrollableList: StoryObj = {
  render: () => (
    <div className="max-w-[400px]">
      <Tabs
        scrollable
        items={[
          ...ITEMS,
          {
            value: "help",
            label: "Help Center",
            icon: <HelpCircle className="h-4 w-4" />,
            content: <div className="rounded border p-4 text-sm bg-card text-card-foreground">Help documentation here</div>,
          },
          { 
            value: "extra", 
            label: "Extra Long Tab Name For Testing", 
            content: <div className="rounded border p-4 text-sm bg-card text-card-foreground">Extra content</div> 
          },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "When the tab list exceeds its container width, `scrollable` enables horizontal scrolling (or wrapping depending on the variant).",
      },
    },
  },
};
