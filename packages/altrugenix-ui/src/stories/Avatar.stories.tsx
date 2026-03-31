import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@/components/ui/avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    fallback: "CN",
  },
};

export const FallbackOnly: Story = {
  args: {
    fallback: "AB",
  },
};

export const BrokenImage: Story = {
  args: {
    src: "https://broken-url.example/image.png",
    fallback: "JD",
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar
        src="https://github.com/shadcn.png"
        fallback="CN"
        className="border-2 border-background"
      />
      <Avatar fallback="AB" className="border-2 border-background" />
      <Avatar fallback="QR" className="border-2 border-background" />
    </div>
  ),
};
