import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@altrugenix/textarea";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A multi-line text input with label, helper text, and error messaging. Built on the native `<textarea>` element with consistent styling and accessibility.",
      },
    },
  },
  argTypes: {
    label: {
      description: "Label text rendered above the textarea.",
      table: { category: "Content" },
    },
    placeholder: {
      description: "Placeholder text shown when empty.",
      table: { category: "Content" },
    },
    helperText: {
      description: "Informational text displayed below the textarea.",
      table: { category: "Validation" },
    },
    errorText: {
      description: "Error message — triggers error styling when provided.",
      table: { category: "Validation" },
    },
    error: {
      control: "boolean",
      description: "Applies error styling without a message.",
      table: { category: "Validation" },
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction.",
      table: { category: "State" },
    },
    rows: {
      control: "number",
      description: "Number of visible text rows.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
  },
};

export const WithHelper: Story = {
  args: {
    label: "Description",
    placeholder: "Describe your project...",
    helperText: "Maximum 500 characters.",
  },
};

export const WithError: Story = {
  args: {
    label: "Feedback",
    defaultValue: "x",
    errorText: "Please provide at least 10 characters of feedback.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Error state with a validation message displayed below the textarea.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "System Notes",
    disabled: true,
    value: "This content is locked and cannot be edited.",
  },
};

export const CustomRows: Story = {
  args: {
    label: "Long Form Content",
    placeholder: "Write your article here...",
    rows: 10,
  },
  parameters: {
    docs: {
      description: {
        story: "A taller textarea suitable for long-form content like articles or descriptions.",
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Textarea label="Default" placeholder="Normal state..." />
      <Textarea
        label="With Helper"
        placeholder="Has guidance..."
        helperText="Helpful context below the field."
      />
      <Textarea
        label="Error"
        defaultValue="oops"
        errorText="This field has a validation error."
      />
      <Textarea label="Disabled" disabled value="Read-only content" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All textarea states shown together for easy comparison.",
      },
    },
  },
};
