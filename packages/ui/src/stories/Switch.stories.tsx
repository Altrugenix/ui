import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "~/components/ui/switch";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Dark mode",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Feature locked",
    disabled: true,
  },
};
