import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPicker } from "@altrugenix/color-picker";
import { useState } from "react";

const meta: Meta<typeof ColorPicker> = {
  title: "Forms/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An interactive color picker with a gradient area, hue slider, hex input, and optional preset color swatches. Fully controlled via `value` and `onChange`.",
      },
    },
  },
  argTypes: {
    value: {
      description: "The current hex color value.",
      table: { category: "State" },
    },
    onChange: {
      description: "Callback triggered when the color changes.",
      table: { category: "Events" },
    },
    presets: {
      description:
        "Array of hex color strings for quick-select preset swatches.",
      table: { category: "Data" },
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction.",
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

const ControlledDemo = ({
  initialColor = "#3b82f6",
}: {
  initialColor?: string;
}) => {
  const [color, setColor] = useState(initialColor);
  return (
    <div className="space-y-4">
      <ColorPicker value={color} onChange={setColor} />
      <div className="flex items-center gap-3">
        <div
          className="h-8 w-8 rounded border"
          style={{ backgroundColor: color }}
        />
        <span className="font-mono text-sm">{color}</span>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A controlled color picker with live preview swatch and hex display.",
      },
    },
  },
};

const CustomPresetsDemo = () => {
  const [color, setColor] = useState("#e91e63");
  return (
    <ColorPicker
      value={color}
      onChange={setColor}
      presets={[
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#2196f3",
        "#4caf50",
        "#ff9800",
        "#795548",
        "#607d8b",
      ]}
    />
  );
};

export const CustomPresets: Story = {
  render: () => <CustomPresetsDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A color picker with custom brand preset swatches for quick access to approved colors.",
      },
    },
  },
};

export const Disabled: Story = {
  render: () => <ColorPicker value="#9c27b0" onChange={() => {}} disabled />,
  parameters: {
    docs: {
      description: {
        story: "A disabled color picker — all interaction is prevented.",
      },
    },
  },
};

const BrandColorSelectorDemo = () => {
  const [primary, setPrimary] = useState("#3b82f6");
  const [secondary, setSecondary] = useState("#10b981");
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium">Primary Color</p>
        <ColorPicker value={primary} onChange={setPrimary} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Secondary Color</p>
        <ColorPicker value={secondary} onChange={setSecondary} />
      </div>
      <div className="flex gap-2 pt-2">
        <div
          className="rounded-lg px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: primary }}
        >
          Primary
        </div>
        <div
          className="rounded-lg px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: secondary }}
        >
          Secondary
        </div>
      </div>
    </div>
  );
};

export const BrandColorSelector: Story = {
  render: () => <BrandColorSelectorDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A brand color configuration panel with two color pickers and live preview buttons.",
      },
    },
  },
};
