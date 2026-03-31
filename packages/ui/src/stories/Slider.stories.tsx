import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "~/components/ui/slider";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: "Volume",
    defaultValue: 50,
  },
};

export const WithRange: Story = {
  args: {
    label: "Price Range",
    min: 0,
    max: 1000,
    step: 50,
    defaultValue: 500,
  },
};

export const Disabled: Story = {
  args: {
    label: "Locked",
    defaultValue: 75,
    disabled: true,
  },
};
