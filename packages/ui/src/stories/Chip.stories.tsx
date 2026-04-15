import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "@altrugenix/chip";
import { User } from "lucide-react";
import { Avatar } from "@altrugenix/avatar";

const meta: Meta<typeof Chip> = {
  title: "UI/Chip",
  component: Chip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: "Standard Chip",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip variant="default">Default</Chip>
      <Chip variant="primary">Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip variant="soft">Soft</Chip>
      <Chip variant="outline">Outline</Chip>
    </div>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip
        avatar={
          <Avatar src="https://i.pravatar.cc/150?u=1" className="h-6 w-6" />
        }
      >
        John Doe
      </Chip>
      <Chip variant="primary" avatar={<User className="h-4 w-4" />}>
        Administrator
      </Chip>
    </div>
  ),
};

export const Deletable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip onDelete={() => alert("Deleted!")}>Tag One</Chip>
      <Chip variant="soft" onDelete={() => {}}>
        Refined Task
      </Chip>
      <Chip variant="outline" onDelete={() => {}}>
        Optional
      </Chip>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    children: "Click Me",
    clickable: true,
    onClick: () => alert("Clicked!"),
    variant: "soft",
  },
};
