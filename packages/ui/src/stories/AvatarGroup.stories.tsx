import type { Meta, StoryObj } from "@storybook/react-vite";
import { AvatarGroup, Avatar } from "~/components/ui/avatar";

const meta: Meta<typeof AvatarGroup> = {
  title: "UI/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

const DemoAvatars = [
  <Avatar key="1" src="https://i.pravatar.cc/150?u=1" alt="User 1" />,
  <Avatar key="2" src="https://i.pravatar.cc/150?u=2" alt="User 2" />,
  <Avatar key="3" src="https://i.pravatar.cc/150?u=3" alt="User 3" />,
  <Avatar key="4" src="https://i.pravatar.cc/150?u=4" alt="User 4" />,
  <Avatar key="5" src="https://i.pravatar.cc/150?u=5" alt="User 5" />,
  <Avatar key="6" src="https://i.pravatar.cc/150?u=6" alt="User 6" />,
];

export const Default: Story = {
  args: {
    max: 5,
    size: "md",
    children: DemoAvatars,
  },
};

export const Small: Story = {
  args: {
    max: 3,
    size: "sm",
    children: DemoAvatars,
  },
};

export const Large: Story = {
  args: {
    max: 8,
    size: "lg",
    children: DemoAvatars,
  },
};
