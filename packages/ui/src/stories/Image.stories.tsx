import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "~/components/ui/image";

const meta: Meta<typeof Image> = {
  title: "UI/Image",
  component: Image,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="aspect-video max-w-[500px] overflow-hidden rounded-xl border bg-muted/20">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    alt: "Nature Landscape",
    className: "h-full w-full",
  },
};

export const WithFallback: Story = {
  args: {
    src: "https://invalid-image-url.com/nothing.jpg",
    fallback:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    alt: "Fallback Image",
    className: "h-full w-full",
  },
};

export const Square: Story = {
  decorators: [
    (Story) => (
      <div className="h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary">
        <Story />
      </div>
    ),
  ],
  args: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    alt: "Portrait",
    className: "h-full w-full",
  },
};
