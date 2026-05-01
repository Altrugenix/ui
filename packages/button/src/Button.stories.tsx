import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@altrugenix/button";
import { Mail, Heart, ArrowRight, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A versatile button component supporting multiple visual variants, sizes, loading states, and icon placement. Built with accessibility and keyboard navigation in mind.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "link",
        "destructive",
      ],
      description: "The visual style of the button.",
      table: { category: "Appearance" },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Controls the padding and font size of the button.",
      table: { category: "Appearance" },
    },
    isLoading: {
      control: "boolean",
      description: "When true, displays a spinner and disables interaction.",
      table: { category: "State" },
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies muted styling.",
      table: { category: "State" },
    },
    leftIcon: {
      description: "Optional icon element rendered before the label.",
      table: { category: "Content" },
    },
    rightIcon: {
      description: "Optional icon element rendered after the label.",
      table: { category: "Content" },
    },
    children: {
      description: "Button label or content.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete Account",
    leftIcon: <Trash2 className="h-4 w-4" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Used for irreversible or dangerous actions. Styled with a red accent to signal caution.",
      },
    },
  },
};

export const LinkVariant: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Renders as an inline link with no background or border. Useful for navigation-style actions.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Saving...",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows a spinner and disables interaction while an async operation is in progress.",
      },
    },
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "primary",
    leftIcon: <Mail className="h-4 w-4" />,
    children: "Send Email",
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "primary",
    rightIcon: <ArrowRight className="h-4 w-4" />,
    children: "Continue",
  },
};

export const IconOnly: Story = {
  args: {
    variant: "outline",
    size: "icon",
    children: <Heart className="h-4 w-4 text-rose-500" />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only button using the `icon` size. Ensure an `aria-label` is provided for accessibility.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all available size options.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of every available variant.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Can't click me",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disabled buttons have reduced opacity and prevent all pointer and keyboard interaction.",
      },
    },
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex gap-0">
      <Button variant="outline" className="rounded-r-none border-r-0">
        Left
      </Button>
      <Button variant="outline" className="rounded-none border-r-0">
        Center
      </Button>
      <Button variant="outline" className="rounded-l-none">
        Right
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons can be visually grouped by removing border-radius and borders on adjacent edges.",
      },
    },
  },
};
