import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "@altrugenix/radio";

const meta: Meta<typeof Radio> = {
  title: "Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A radio button for selecting a single option from a group. Includes label and description support with full keyboard navigation.",
      },
    },
  },
  argTypes: {
    label: {
      description: "Primary label text for the radio option.",
      table: { category: "Content" },
    },
    description: {
      description: "Secondary description text rendered below the label.",
      table: { category: "Content" },
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction with the radio button.",
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Option A",
    name: "demo",
    value: "a",
  },
};

export const WithDescription: Story = {
  args: {
    label: "Pro Plan",
    description: "$29/month — unlimited projects and priority support.",
    name: "plan",
    value: "pro",
  },
};

export const Disabled: Story = {
  args: {
    label: "Unavailable option",
    name: "demo",
    value: "unavailable",
    disabled: true,
  },
};

export const RadioGroup: Story = {
  render: () => (
    <fieldset className="space-y-3">
      <legend className="text-foreground mb-2 text-sm font-semibold">
        Choose a plan
      </legend>
      <Radio
        label="Free"
        description="Basic access with community support."
        name="plan"
        value="free"
      />
      <Radio
        label="Pro"
        description="$29/month — unlimited projects and priority support."
        name="plan"
        value="pro"
        defaultChecked
      />
      <Radio
        label="Enterprise"
        description="Custom pricing — dedicated account manager and SLA."
        name="plan"
        value="enterprise"
      />
      <Radio
        label="Legacy"
        description="No longer available for new accounts."
        name="plan"
        value="legacy"
        disabled
      />
    </fieldset>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A group of radio buttons with descriptions, simulating a pricing plan selection. Includes a disabled option.",
      },
    },
  },
};
