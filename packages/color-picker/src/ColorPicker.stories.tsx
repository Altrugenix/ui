import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPicker } from "@altrugenix/color-picker";
import { useState } from "react";

const meta: Meta<typeof ColorPicker> = {
  title: "UI/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[400px] p-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

const DefaultRender = (args: React.ComponentProps<typeof ColorPicker>) => {
  const [color, setColor] = useState("#6366f1");
  return <ColorPicker {...args} value={color} onChange={setColor} />;
};

export const Default: Story = {
  render: (args) => <DefaultRender {...args} />,
};

const WithCustomPresetsRender = (args: React.ComponentProps<typeof ColorPicker>) => {
  const [color, setColor] = useState("#ec4899");
  const presets = [
    "#ef4444", "#f97316", "#f59e0b", "#eab308",
    "#84cc16", "#22c55e", "#10b981", "#06b6d4",
    "#0ea5e9", "#3b82f6", "#6366f1", "#8b5cf6",
    "#a855f7", "#d946ef", "#ec4899", "#f43f5e",
  ];
  return (
    <ColorPicker
      {...args}
      value={color}
      onChange={setColor}
      presets={presets}
    />
  );
};

export const WithCustomPresets: Story = {
  render: (args) => <WithCustomPresetsRender {...args} />,
};

export const Disabled: Story = {
  args: {
    value: "#6366f1",
    disabled: true,
  },
};
