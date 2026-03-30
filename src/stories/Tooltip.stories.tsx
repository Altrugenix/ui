import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "@/components/overlays/tooltip";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Tooltip> = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: "Tooltip on top",
    side: "top",
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "Tooltip on bottom",
    side: "bottom",
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const Right: Story = {
  args: {
    content: "Tooltip on right",
    side: "right",
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const Left: Story = {
  args: {
    content: "Tooltip on left",
    side: "left",
    children: <Button variant="outline">Hover me</Button>,
  },
};

export const AllSides: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-8 py-16">
      <Tooltip content="Top" side="top">
        <Button variant="outline" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom" side="bottom">
        <Button variant="outline" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left" side="left">
        <Button variant="outline" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right" side="right">
        <Button variant="outline" size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
};
