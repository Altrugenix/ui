import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@/components/layout/divider";

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Content above</p>
      <Divider />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm">Section 1</p>
      <Divider label="OR" />
      <p className="text-sm">Section 2</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm">Left</span>
      <Divider orientation="vertical" />
      <span className="text-sm">Right</span>
    </div>
  ),
};
