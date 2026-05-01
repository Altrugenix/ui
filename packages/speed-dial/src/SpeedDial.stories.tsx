import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpeedDial } from "@altrugenix/speed-dial";
import { Plus, FileText, Image, Video, Music } from "lucide-react";

const meta: Meta<typeof SpeedDial> = {
  title: "Navigation/SpeedDial",
  component: SpeedDial,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A floating action button that expands to reveal a series of sub-actions. Supports four expansion directions (up, down, left, right) and custom icons.",
      },
    },
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["up", "down", "left", "right"],
      description: "Direction of sub-action expansion.",
      table: { category: "Appearance" },
    },
    icon: {
      description: "Main icon shown when the speed dial is closed.",
      table: { category: "Content" },
    },
    openIcon: {
      description: "Icon shown when the speed dial is open.",
      table: { category: "Content" },
    },
    actions: {
      description: "Array of sub-actions with icon, label, and onClick.",
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpeedDial>;

const defaultActions = [
  {
    icon: <FileText className="h-4 w-4" />,
    label: "Document",
    onClick: () => {},
  },
  { icon: <Image className="h-4 w-4" />, label: "Image", onClick: () => {} },
  { icon: <Video className="h-4 w-4" />, label: "Video", onClick: () => {} },
  { icon: <Music className="h-4 w-4" />, label: "Audio", onClick: () => {} },
];

export const Default: Story = {
  render: () => (
    <div className="relative h-80">
      <div className="absolute right-4 bottom-4">
        <SpeedDial
          icon={<Plus className="h-5 w-5" />}
          actions={defaultActions}
          direction="up"
        />
      </div>
    </div>
  ),
};

export const Directions: Story = {
  render: () => (
    <div className="border-border relative h-96 rounded-lg border-2 border-dashed">
      <div className="absolute top-4 left-4">
        <SpeedDial actions={defaultActions} direction="down" />
      </div>
      <div className="absolute top-4 right-4">
        <SpeedDial actions={defaultActions} direction="left" />
      </div>
      <div className="absolute bottom-4 left-4">
        <SpeedDial actions={defaultActions} direction="right" />
      </div>
      <div className="absolute right-4 bottom-4">
        <SpeedDial actions={defaultActions} direction="up" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All four expansion directions demonstrated in each corner of a container.",
      },
    },
  },
};
