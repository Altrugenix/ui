import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@altrugenix/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A checkbox input for toggling individual boolean values. Supports labels, descriptions, and disabled states with built-in accessibility.",
      },
    },
  },
  argTypes: {
    label: {
      description: "Primary text label rendered next to the checkbox.",
      table: { category: "Content" },
    },
    description: {
      description: "Secondary description text rendered below the label.",
      table: { category: "Content" },
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction with the checkbox.",
      table: { category: "State" },
    },
    defaultChecked: {
      control: "boolean",
      description: "Initial checked state for uncontrolled usage.",
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products and features.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A checkbox with supplementary description text to provide extra context.",
      },
    },
  },
};

export const Checked: Story = {
  args: {
    label: "I agree",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Can't toggle this",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Mandatory agreement",
    disabled: true,
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A locked-on checkbox — useful for mandatory, non-negotiable settings.",
      },
    },
  },
};

export const CheckboxGroup: Story = {
  render: () => (
    <fieldset className="space-y-3">
      <legend className="text-foreground mb-2 text-sm font-semibold">
        Select your interests
      </legend>
      <Checkbox label="Design" description="UI/UX, illustration, branding" />
      <Checkbox
        label="Engineering"
        description="Frontend, backend, DevOps"
        defaultChecked
      />
      <Checkbox
        label="Data Science"
        description="Machine learning, analytics"
      />
      <Checkbox label="Marketing" description="Growth, SEO, content" />
    </fieldset>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple checkboxes composed as a group with descriptions, simulating a real preference selection form.",
      },
    },
  },
};
