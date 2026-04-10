import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "~/components/overlays/popover/Popover";
import { Button } from "~/components/ui/button";
import { Bell } from "lucide-react";

const meta: Meta<typeof Popover> = {
  title: "Overlays/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open Popover</Button>,
    children: (
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <Button size="sm" variant="outline">
            Save
          </Button>
        </div>
      </div>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    trigger: (
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
    ),
    children: (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">New notification</p>
            <p className="text-xs text-muted-foreground">2 minutes ago</p>
          </div>
        </div>
        <div className="flex items-center gap-4 opacity-50">
          <div className="h-2 w-2 rounded-full bg-transparent" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">System update</p>
            <p className="text-xs text-muted-foreground">1 hour ago</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full">
          Mark all as read
        </Button>
      </div>
    ),
  },
};

export const Alignment: StoryObj = {
  render: () => (
    <div className="flex h-[300px] items-center justify-center gap-4">
      <Popover
        side="top"
        align="left"
        trigger={<Button variant="outline">Top Left</Button>}
      >
        <div className="p-2">Aligned to the top and left</div>
      </Popover>

      <Popover
        side="bottom"
        align="center"
        trigger={<Button variant="outline">Bottom Center</Button>}
      >
        <div className="p-2">Aligned to the bottom and center</div>
      </Popover>

      <Popover
        side="bottom"
        align="right"
        trigger={<Button variant="outline">Bottom Right</Button>}
      >
        <div className="p-2">Aligned to the bottom and right</div>
      </Popover>
    </div>
  ),
};
