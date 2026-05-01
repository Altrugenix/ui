import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navbar } from "@altrugenix/navbar";
import { Button } from "@altrugenix/button";
import { Search, Bell } from "lucide-react";
import { Avatar } from "@altrugenix/avatar";

const meta: Meta<typeof Navbar> = {
  title: "Navigation/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A responsive navigation bar with brand slot, action items, and automatic mobile hamburger menu. Supports sticky and static positioning.",
      },
    },
  },
  argTypes: {
    brand: {
      description: "Brand element — typically a logo and/or app name.",
      table: { category: "Content" },
    },
    sticky: {
      control: "boolean",
      description: "Whether the navbar sticks to the top on scroll.",
      table: { category: "Behavior" },
    },
    children: {
      description: "Navigation items and action buttons on the right side.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brand: <span className="text-xl font-bold tracking-tight">Altrugenix</span>,
    children: (
      <>
        <Button variant="ghost">Features</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="ghost">Documentation</Button>
        <Button variant="primary">Get Started</Button>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    brand: <span className="text-xl font-bold tracking-tight">Altrugenix</span>,
    children: (
      <>
        <Button variant="ghost" size="sm">
          Product
        </Button>
        <Button variant="ghost" size="sm">
          Company
        </Button>
        <div className="bg-border mx-2 h-4 w-[1px]" />
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Nav links with icon-only buttons separated by a vertical divider.",
      },
    },
  },
};

export const NotSticky: Story = {
  args: {
    sticky: false,
    brand: (
      <span className="text-xl font-bold tracking-tight">Static Navbar</span>
    ),
    children: <Button variant="outline">Sign In</Button>,
  },
  parameters: {
    docs: {
      description: {
        story: "A non-sticky navbar that scrolls with the page content.",
      },
    },
  },
};

export const WithAvatar: Story = {
  args: {
    brand: <span className="text-xl font-bold tracking-tight">Dashboard</span>,
    children: (
      <>
        <Button variant="ghost" size="sm">
          Overview
        </Button>
        <Button variant="ghost" size="sm">
          Reports
        </Button>
        <Button variant="ghost" size="sm">
          Settings
        </Button>
        <div className="bg-border mx-2 h-4 w-[1px]" />
        <Avatar
          src="https://github.com/shadcn.png"
          fallback="JD"
          className="h-8 w-8"
        />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "A dashboard navbar with user avatar — common for authenticated app headers.",
      },
    },
  },
};
