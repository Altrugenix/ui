import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "@altrugenix/link";

const meta: Meta<typeof Link> = {
  title: "UI/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    children: "This is a link",
  },
};

export const CustomColor: Story = {
  args: {
    href: "#",
    children: "Go to Google",
    className: "text-blue-500 hover:text-blue-600",
  },
};
