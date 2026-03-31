import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "~/components/ui/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
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
