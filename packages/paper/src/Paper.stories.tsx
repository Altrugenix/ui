import type { Meta, StoryObj } from "@storybook/react-vite";
import { Paper } from "@altrugenix/paper";

export default {
  title: "Layout/Paper",
  component: Paper,
  tags: ["autodocs"],
  argTypes: {
    elevation: {
      control: "number",
      min: 0,
      max: 6,
    },
    variant: {
      control: "radio",
      options: ["elevation", "outlined"],
    },
    square: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Paper>;

export const Default: StoryObj<typeof Paper> = {
  args: {
    elevation: 3,
    variant: "elevation",
    square: false,
    className: "p-8",
    children: "This is a Paper component",
  },
};
