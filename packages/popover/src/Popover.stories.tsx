import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "@altrugenix/popover";
import { Button } from "@altrugenix/button";
import { Input } from "@altrugenix/input";
import { Settings } from "lucide-react";

const meta: Meta<typeof Popover> = {
  title: "Overlays/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A floating panel anchored to a trigger element. Supports configurable alignment (left/center/right) and side (top/bottom) positioning with click-away dismissal.",
      },
    },
  },
  argTypes: {
    trigger: {
      description: "The element that opens the popover when clicked.",
      table: { category: "Content" },
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Horizontal alignment relative to the trigger.",
      table: { category: "Positioning" },
    },
    side: {
      control: "select",
      options: ["top", "bottom"],
      description: "Vertical side the popover appears on.",
      table: { category: "Positioning" },
    },
    open: {
      description: "Controlled open state.",
      table: { category: "State" },
    },
    onOpenChange: {
      description: "Callback when the open state changes.",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover trigger={<Button variant="outline">Open Popover</Button>}>
      <div className="w-64 space-y-3 p-4">
        <h4 className="text-sm font-semibold">Quick Settings</h4>
        <p className="text-muted-foreground text-sm">
          Adjust your preferences here.
        </p>
      </div>
    </Popover>
  ),
};

export const AlignRight: Story = {
  render: () => (
    <Popover
      trigger={<Button variant="outline">Right Aligned</Button>}
      align="right"
    >
      <div className="w-48 p-4">
        <p className="text-sm">This popover is right-aligned.</p>
      </div>
    </Popover>
  ),
};

export const TopSide: Story = {
  render: () => (
    <div className="pt-48">
      <Popover
        trigger={<Button variant="outline">Opens Above</Button>}
        side="top"
      >
        <div className="w-48 p-4">
          <p className="text-sm">This popover appears above the trigger.</p>
        </div>
      </Popover>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Popover positioned above the trigger — useful when there's no space below.",
      },
    },
  },
};

export const WithForm: Story = {
  render: () => (
    <Popover
      trigger={
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      }
    >
      <div className="w-72 space-y-3 p-4">
        <h4 className="text-sm font-semibold">Dimensions</h4>
        <div className="grid grid-cols-2 gap-3">
          <Input label="Width" placeholder="100%" />
          <Input label="Height" placeholder="auto" />
        </div>
        <Button size="sm" className="w-full">
          Apply
        </Button>
      </div>
    </Popover>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A popover containing a mini form — a common pattern for inline editing and settings panels.",
      },
    },
  },
};
