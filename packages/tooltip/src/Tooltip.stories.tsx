import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "@altrugenix/tooltip";
import { Button } from "@altrugenix/button";
import { Info, Settings, HelpCircle } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A small popup that displays descriptive text when hovering over or focusing an element. Supports four placement sides and customizable delay.",
      },
    },
  },
  argTypes: {
    content: {
      description: "The tooltip text content.",
      table: { category: "Content" },
    },
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Preferred side of the anchor to render the tooltip.",
      table: { category: "Placement" },
    },
    children: {
      description: "The trigger element that activates the tooltip on hover.",
      table: { category: "Content" },
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
        <Button variant="outline" size="sm">
          Top
        </Button>
      </Tooltip>
      <Tooltip content="Bottom" side="bottom">
        <Button variant="outline" size="sm">
          Bottom
        </Button>
      </Tooltip>
      <Tooltip content="Left" side="left">
        <Button variant="outline" size="sm">
          Left
        </Button>
      </Tooltip>
      <Tooltip content="Right" side="right">
        <Button variant="outline" size="sm">
          Right
        </Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comparison of all four placement sides in a single view.",
      },
    },
  },
};

export const OnIconButton: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip content="Help & documentation">
        <Button variant="ghost" size="icon" aria-label="Help">
          <HelpCircle className="h-5 w-5" />
        </Button>
      </Tooltip>
      <Tooltip content="Application settings">
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="h-5 w-5" />
        </Button>
      </Tooltip>
      <Tooltip content="More info">
        <Button variant="ghost" size="icon" aria-label="Info">
          <Info className="h-5 w-5" />
        </Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tooltips on icon-only buttons provide essential labeling for accessibility and discoverability.",
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    content:
      "This tooltip contains a longer description to test wrapping behavior and readability at wider widths.",
    side: "top",
    children: <Button variant="outline">Hover for details</Button>,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A tooltip with longer text content to verify wrapping behavior.",
      },
    },
  },
};
