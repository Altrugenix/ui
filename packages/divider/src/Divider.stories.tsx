import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@altrugenix/divider";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A visual separator for creating distinct content sections. Supports horizontal and vertical orientations, with an optional centered label.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Direction of the divider line.",
      table: { category: "Appearance" },
    },
    label: {
      description: "Text label displayed in the center (horizontal only).",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Content above</p>
      <Divider />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Section 1</p>
      <Divider label="OR" />
      <p className="text-sm">Section 2</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A labeled divider with centered text — common for login forms (e.g. 'OR' between auth methods).",
      },
    },
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A vertical divider for separating inline elements like toolbar buttons or nav items.",
      },
    },
  },
};

export const LoginDivider: Story = {
  render: () => (
    <div className="mx-auto max-w-sm space-y-4">
      <Button className="w-full" variant="outline">
        Continue with Google
      </Button>
      <Button className="w-full" variant="outline">
        Continue with GitHub
      </Button>
      <Divider label="or continue with email" />
      <Button className="w-full">Sign in with Email</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A real-world login form using a labeled divider between OAuth and email sign-in options.",
      },
    },
  },
};

export const ToolbarSeparator: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="sm">
        Cut
      </Button>
      <Button variant="ghost" size="sm">
        Copy
      </Button>
      <Button variant="ghost" size="sm">
        Paste
      </Button>
      <Divider orientation="vertical" className="h-6" />
      <Button variant="ghost" size="sm">
        Undo
      </Button>
      <Button variant="ghost" size="sm">
        Redo
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Vertical dividers used as toolbar separators between action groups.",
      },
    },
  },
};
