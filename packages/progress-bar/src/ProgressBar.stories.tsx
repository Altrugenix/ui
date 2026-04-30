import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressBar } from "@altrugenix/progress-bar";

const meta: Meta<typeof ProgressBar> = {
  title: "Composites/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    value: { control: { type: "range", min: 0, max: 100 } },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 60,
    label: "Progress",
    showValue: true,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    label: "Complete",
    showValue: true,
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    value: 80,
    label: "Storage Used",
    showValue: true,
    variant: "warning",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    value: 45,
    size: "sm",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <ProgressBar value={25} label="Default" showValue />
      <ProgressBar value={50} label="Success" showValue variant="success" />
      <ProgressBar value={75} label="Warning" showValue variant="warning" />
      <ProgressBar
        value={90}
        label="Destructive"
        showValue
        variant="destructive"
      />
    </div>
  ),
};
