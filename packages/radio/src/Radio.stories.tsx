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
    label: "Pro Plan ($29/month — unlimited projects and priority support)",
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
      <div>
        <Radio label="Free" name="plan" value="free" />
        <p className="text-muted-foreground pl-6 text-sm">
          Basic access with community support.
        </p>
      </div>
      <div>
        <Radio label="Pro" name="plan" value="pro" defaultChecked />
        <p className="text-muted-foreground pl-6 text-sm">
          $29/month — unlimited projects and priority support.
        </p>
      </div>
      <div>
        <Radio label="Enterprise" name="plan" value="enterprise" />
        <p className="text-muted-foreground pl-6 text-sm">
          Custom pricing — dedicated account manager and SLA.
        </p>
      </div>
      <div>
        <Radio label="Legacy" name="plan" value="legacy" disabled />
        <p className="text-muted-foreground pl-6 text-sm">
          No longer available for new accounts.
        </p>
      </div>
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
