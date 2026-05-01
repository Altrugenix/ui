import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@altrugenix/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A tabbed navigation component for switching between content panels. Supports default, pill, and underline visual variants, horizontal and vertical orientation, and scrollable overflow.",
      },
    },
  },
  argTypes: {
    value: {
      description: "Controlled active tab value.",
      table: { category: "State" },
    },
    defaultValue: {
      description: "Default active tab (uncontrolled).",
      table: { category: "State" },
    },
    onValueChange: {
      description: "Callback triggered when the active tab changes.",
      table: { category: "Events" },
    },
    variant: {
      control: "select",
      options: ["default", "pills", "underline"],
      description: "Visual style of the tab list.",
      table: { category: "Appearance" },
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Direction of the tab list.",
      table: { category: "Appearance" },
    },
    scrollable: {
      control: "boolean",
      description: "Whether the tab list scrolls on overflow.",
      table: { category: "Behavior" },
    },
    items: {
      description: "Array of tab items with value, label, and content.",
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabItems = [
  {
    value: "overview",
    label: "Overview",
    content: (
      <div className="space-y-2">
        <h3 className="font-semibold">Overview</h3>
        <p className="text-muted-foreground text-sm">
          A high-level summary of your project metrics and recent activity.
        </p>
      </div>
    ),
  },
  {
    value: "analytics",
    label: "Analytics",
    content: (
      <div className="space-y-2">
        <h3 className="font-semibold">Analytics</h3>
        <p className="text-muted-foreground text-sm">
          Detailed charts and metrics about usage, performance, and engagement.
        </p>
      </div>
    ),
  },
  {
    value: "settings",
    label: "Settings",
    content: (
      <div className="space-y-2">
        <h3 className="font-semibold">Settings</h3>
        <p className="text-muted-foreground text-sm">
          Configure your project preferences and integrations.
        </p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: tabItems,
    defaultValue: "overview",
  },
};

export const Pills: Story = {
  args: {
    items: tabItems,
    defaultValue: "overview",
    variant: "pills",
  },
  parameters: {
    docs: {
      description: {
        story: "Pill-style tabs with rounded backgrounds for the active state.",
      },
    },
  },
};

export const Underline: Story = {
  args: {
    items: tabItems,
    defaultValue: "overview",
    variant: "underline",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Underline-style tabs — a clean, minimal look for content-heavy pages.",
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    items: tabItems,
    defaultValue: "overview",
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Vertical orientation — suitable for settings pages and sidepanel navigation.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm font-medium">Default</p>
        <Tabs items={tabItems} defaultValue="overview" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Pills</p>
        <Tabs items={tabItems} defaultValue="analytics" variant="pills" />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Underline</p>
        <Tabs items={tabItems} defaultValue="settings" variant="underline" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of all three tab variants.",
      },
    },
  },
};
