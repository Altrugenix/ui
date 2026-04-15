import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "@altrugenix/aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[400px] overflow-hidden rounded-xl border">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Video: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
        alt="Landscape"
        className="h-full w-full object-cover"
      />
    ),
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: (
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
        alt="Portrait"
        className="h-full w-full object-cover"
      />
    ),
  },
};

export const Cinema: Story = {
  args: {
    ratio: 21 / 9,
    children: (
      <div className="flex h-full w-full items-center justify-center bg-indigo-600 text-2xl font-bold text-white">
        21:9 Cinema
      </div>
    ),
  },
};
