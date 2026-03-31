import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "~/components/ui/radio";

const meta: Meta<typeof Radio> = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: "Option A",
    name: "demo",
  },
};

export const Checked: Story = {
  args: {
    label: "Selected option",
    name: "demo2",
    defaultChecked: true,
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Radio label="Small" name="size-group" defaultChecked />
      <Radio label="Medium" name="size-group" />
      <Radio label="Large" name="size-group" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    name: "disabled-demo",
    disabled: true,
  },
};
