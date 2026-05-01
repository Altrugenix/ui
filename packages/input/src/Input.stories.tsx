import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@altrugenix/input";
import { Search, Eye, Mail, Lock } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A flexible text input component with built-in label, helper text, error messaging, size variants, and addon support. Automatically wires accessibility attributes.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Controls the height and font size of the input.",
      table: { category: "Appearance" },
    },
    label: {
      description: "Label text rendered above the input.",
      table: { category: "Content" },
    },
    placeholder: {
      description: "Placeholder text shown when the input is empty.",
      table: { category: "Content" },
    },
    helperText: {
      description: "Informational text displayed below the input.",
      table: { category: "Validation" },
    },
    errorText: {
      description:
        "Error message displayed below the input. When set, applies error styling.",
      table: { category: "Validation" },
    },
    leftAddon: {
      description: "Icon or element rendered inside the input, on the left.",
      table: { category: "Content" },
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies muted styling.",
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Username",
  },
};

export const WithHelper: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    helperText: "We will never share your email.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Helper text provides additional context below the field, linked via `aria-describedby`.",
      },
    },
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    defaultValue: "short",
    errorText: "Password must be at least 8 characters.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `errorText` is provided, the input border turns red and the error message is announced to screen readers.",
      },
    },
  },
};

export const WithIcons: Story = {
  args: {
    label: "Search",
    placeholder: "Search components...",
    leftAddon: <Search className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    label: "API Key",
    disabled: true,
    value: "sk-••••••••••••••••",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Input label="Small" size="sm" placeholder="Small input" />
      <Input label="Medium (default)" size="md" placeholder="Medium input" />
      <Input label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of all three available sizes — small, medium, and large.",
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Input label="Default" placeholder="Normal state..." />
      <Input
        label="With Helper"
        placeholder="Has guidance..."
        helperText="This is helper text."
      />
      <Input
        label="Error"
        defaultValue="invalid"
        errorText="This field has an error."
      />
      <Input label="Disabled" disabled value="Cannot edit" />
      <Input
        label="With Icon"
        leftAddon={<Mail className="h-4 w-4" />}
        placeholder="email@example.com"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Overview of all input states in a single view.",
      },
    },
  },
};
