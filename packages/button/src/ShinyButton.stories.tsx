import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShinyButton } from "@altrugenix/button";

const meta: Meta<typeof ShinyButton> = {
  title: "Components/Primitives/ShinyButton",
  component: ShinyButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "danger",
        "success",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Get Started ✨",
    variant: "primary",
    size: "lg",
  },
};

export const Success: Story = {
  args: {
    children: "Claim Reward 🏆",
    variant: "primary",
    size: "lg",
  },
};

export const Outline: Story = {
  args: {
    children: "Learn More",
    variant: "outline",
    size: "lg",
  },
};
