import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@altrugenix/badge";
import { CheckCircle, AlertTriangle, Bell, Star } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Small status labels used to highlight categories, counts, or statuses. Available in multiple semantic variants with optional dot indicators.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "destructive",
        "success",
        "warning",
      ],
      description: "The visual variant conveying semantic meaning.",
      table: { category: "Appearance" },
    },
    children: {
      description: "The badge label content.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Default" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};

export const Success: Story = {
  args: { variant: "success", children: "Success" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Warning" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Destructive" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of every available badge variant.",
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" className="gap-1">
        <CheckCircle className="h-3 w-3" /> Active
      </Badge>
      <Badge variant="warning" className="gap-1">
        <AlertTriangle className="h-3 w-3" /> Pending
      </Badge>
      <Badge variant="default" className="gap-1">
        <Bell className="h-3 w-3" /> 3 new
      </Badge>
      <Badge variant="outline" className="gap-1">
        <Star className="h-3 w-3" /> Featured
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badges can include small icons for additional visual context alongside the text label.",
      },
    },
  },
};

export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Deployment Status:</span>
      <Badge variant="success">Live</Badge>
      <span className="text-muted-foreground text-sm">•</span>
      <span className="text-sm font-medium">Version:</span>
      <Badge variant="outline">v2.4.1</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badges used inline with text to convey status and version information.",
      },
    },
  },
};
