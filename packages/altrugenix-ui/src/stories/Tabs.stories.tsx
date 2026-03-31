import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@/components/composites/tabs";
import { Settings, User, BarChart } from "lucide-react";

const meta: Meta<typeof Tabs> = {
  title: "Composites/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "pills", "underline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabItems = [
  {
    label: "Overview",
    value: "overview",
    content: (
      <p className="text-sm text-muted-foreground">Overview content panel.</p>
    ),
  },
  {
    label: "Analytics",
    value: "analytics",
    content: (
      <p className="text-sm text-muted-foreground">Analytics content panel.</p>
    ),
  },
  {
    label: "Settings",
    value: "settings",
    content: (
      <p className="text-sm text-muted-foreground">Settings content panel.</p>
    ),
  },
];

export const Default: Story = {
  args: {
    items: tabItems,
    variant: "default",
  },
};

export const Pills: Story = {
  args: {
    items: tabItems,
    variant: "pills",
  },
};

export const Underline: Story = {
  args: {
    items: tabItems,
    variant: "underline",
  },
};

export const WithIcons: Story = {
  args: {
    variant: "default",
    items: [
      {
        label: "Profile",
        value: "profile",
        icon: <User className="h-4 w-4" />,
        content: (
          <p className="text-sm text-muted-foreground">Profile settings.</p>
        ),
      },
      {
        label: "Analytics",
        value: "analytics",
        icon: <BarChart className="h-4 w-4" />,
        content: (
          <p className="text-sm text-muted-foreground">Analytics data.</p>
        ),
      },
      {
        label: "Settings",
        value: "settings",
        icon: <Settings className="h-4 w-4" />,
        content: <p className="text-sm text-muted-foreground">App settings.</p>,
      },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    variant: "default",
    items: [
      ...tabItems,
      {
        label: "Billing",
        value: "billing",
        disabled: true,
        content: <p>Billing (disabled)</p>,
      },
    ],
  },
};
