import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "~/components/ui/button";
import { Plus, Settings, Trash, Search, Heart, Mail } from "lucide-react";

const meta: Meta<typeof IconButton> = {
  title: "UI/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: <Plus className="h-5 w-5" />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: <Settings className="h-5 w-5" />,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: <Search className="h-5 w-5" />,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: <Trash className="h-5 w-5" />,
  },
};

export const Circular: Story = {
  args: {
    variant: "secondary",
    radius: "full",
    children: <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton size="sm" variant="outline">
        <Mail className="h-4 w-4" />
      </IconButton>
      <IconButton size="md" variant="outline">
        <Mail className="h-5 w-5" />
      </IconButton>
      <IconButton size="lg" variant="outline">
        <Mail className="h-6 w-6" />
      </IconButton>
    </div>
  ),
};
