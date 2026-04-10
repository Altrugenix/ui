import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "~/components/ui/text";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children:
      "The king had stay'd his hand. The sky was clear, and the world was young. In the silence of the night, a single star shone brighter than the rest.",
  },
};

export const Muted: Story = {
  args: {
    className: "text-muted-foreground",
    children: "This is a muted text description.",
  },
};

export const Large: Story = {
  args: {
    className: "text-lg font-semibold",
    children: "This is large, semi-bold text.",
  },
};

export const Small: Story = {
  args: {
    className: "text-sm leading-none",
    children: "This is small text for fine print.",
  },
};
