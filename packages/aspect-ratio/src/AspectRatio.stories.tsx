import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "@altrugenix/aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "Layout/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A utility wrapper that enforces a specific aspect ratio on its children. Useful for images, videos, and map embeds to prevent layout shift.",
      },
    },
  },
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.1, max: 4, step: 0.1 },
      description: "The aspect ratio (width / height). E.g. 16/9 = 1.778.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const SixteenNine: Story = {
  render: () => (
    <div className="max-w-md">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=450&fit=crop"
          alt="Landscape"
          className="h-full w-full rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="max-w-64">
      <AspectRatio ratio={1}>
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 font-bold text-white">
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
};

export const CommonRatios: Story = {
  render: () => (
    <div className="grid max-w-2xl grid-cols-2 gap-6">
      {[
        { ratio: 1, label: "1:1 Square" },
        { ratio: 4 / 3, label: "4:3 Classic" },
        { ratio: 16 / 9, label: "16:9 Widescreen" },
        { ratio: 21 / 9, label: "21:9 Ultrawide" },
      ].map(({ ratio, label }) => (
        <div key={label}>
          <p className="mb-2 text-sm font-medium">{label}</p>
          <AspectRatio ratio={ratio}>
            <div className="border-border bg-muted/30 text-muted-foreground flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed font-mono text-sm">
              {ratio.toFixed(2)}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of four common aspect ratios — 1:1, 4:3, 16:9, and 21:9.",
      },
    },
  },
};
