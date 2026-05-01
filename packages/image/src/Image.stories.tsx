import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "@altrugenix/image";

const meta: Meta<typeof Image> = {
  title: "Data Display/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An enhanced `<img>` element with loading fade-in animation and automatic fallback when the source fails to load.",
      },
    },
  },
  argTypes: {
    src: {
      description: "Image source URL.",
      table: { category: "Content" },
    },
    alt: {
      description: "Alternative text for accessibility.",
      table: { category: "Content" },
    },
    fallback: {
      description: "Fallback image URL used when the primary source fails.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    alt: "Mountain landscape",
    className: "w-80 rounded-lg",
  },
};

export const WithFallback: Story = {
  args: {
    src: "https://broken-url.example/image.png",
    fallback: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&h=300&fit=crop",
    alt: "Fallback demo",
    className: "w-80 rounded-lg",
  },
  parameters: {
    docs: {
      description: {
        story: "When the primary `src` fails to load, the `fallback` image is displayed instead.",
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    alt: "User avatar",
    className: "h-24 w-24 rounded-full",
  },
  parameters: {
    docs: {
      description: {
        story: "An image styled as a circular avatar with `rounded-full`.",
      },
    },
  },
};
