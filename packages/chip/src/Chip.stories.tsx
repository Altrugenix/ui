import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "@altrugenix/chip";
import { User, Check, Zap } from "lucide-react";
import { Avatar } from "@altrugenix/avatar";

const meta: Meta<typeof Chip> = {
  title: "Data Display/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A compact element representing an input, attribute, or action. Supports multiple variants, sizes, avatars, delete actions, and clickable interaction.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "outline", "soft"],
      description: "Visual style of the chip.",
      table: { category: "Appearance" },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the chip.",
      table: { category: "Appearance" },
    },
    avatar: {
      description: "Left-aligned icon or avatar element.",
      table: { category: "Content" },
    },
    onDelete: {
      description: "When provided, renders a delete button on the right.",
      table: { category: "Events" },
    },
    clickable: {
      control: "boolean",
      description: "Makes the chip interactive with a press effect.",
      table: { category: "Behavior" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: "Standard Chip",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="soft">Soft</Chip>
      <Chip variant="outline">Outline</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All five chip variants displayed side by side.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all three chip sizes.",
      },
    },
  },
};

export const WithAvatar: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip
        avatar={
          <Avatar src="https://i.pravatar.cc/150?u=1" className="h-6 w-6" />
        }
      >
        John Doe
      </Chip>
      <Chip variant="primary" avatar={<User className="h-4 w-4" />}>
        Administrator
      </Chip>
      <Chip variant="soft" avatar={<Zap className="h-4 w-4" />}>
        Pro Plan
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Chips with leading avatars or icons for user profiles, roles, and status indicators.",
      },
    },
  },
};

export const Deletable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip onDelete={() => {}}>Tag One</Chip>
      <Chip variant="soft" onDelete={() => {}}>
        Refined Task
      </Chip>
      <Chip variant="outline" onDelete={() => {}}>
        Optional
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Chips with a delete button — common for removable tags and filter tokens.",
      },
    },
  },
};

export const Clickable: Story = {
  args: {
    children: "Click Me",
    clickable: true,
    variant: "soft",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Clickable chips have a cursor pointer and scale-down press animation.",
      },
    },
  },
};

export const FilterBar: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-muted-foreground text-sm">Filters:</span>
      <Chip variant="primary" size="sm" avatar={<Check className="h-3 w-3" />}>
        Active
      </Chip>
      <Chip variant="soft" size="sm" onDelete={() => {}}>
        TypeScript
      </Chip>
      <Chip variant="soft" size="sm" onDelete={() => {}}>
        React
      </Chip>
      <Chip variant="outline" size="sm" clickable>
        + Add filter
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A filter bar composed of chips — a common pattern for search interfaces and data tables.",
      },
    },
  },
};
