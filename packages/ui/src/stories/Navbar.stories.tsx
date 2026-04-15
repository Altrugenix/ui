import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navbar } from "~/components/navigation/navbar/Navbar";
import { Button } from "@altrugenix/button";
import { ExternalLink } from "lucide-react";

const meta: Meta<typeof Navbar> = {
  title: "Navigation/Navbar",
  component: Navbar,
  tags: ["autodocs"],
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
        <div className="mx-2 h-4 w-[1px] bg-border" />
        <Button variant="ghost" size="icon">
          <ExternalLink className="h-5 w-5" />
        </Button>
      </>
    ),
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
};
