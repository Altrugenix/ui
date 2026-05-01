import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "@altrugenix/carousel";

const slides = [
  <div key="1" className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-2xl font-bold text-white">
    Slide 1 — Welcome
  </div>,
  <div key="2" className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-2xl font-bold text-white">
    Slide 2 — Features
  </div>,
  <div key="3" className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-2xl font-bold text-white">
    Slide 3 — Pricing
  </div>,
  <div key="4" className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-2xl font-bold text-white">
    Slide 4 — Get Started
  </div>,
];

const meta: Meta<typeof Carousel> = {
  title: "Data Display/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[700px] p-6">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A smooth-sliding carousel with Framer Motion transitions, auto-play support, navigation arrows, and dot indicators. Supports any React nodes as slide content.",
      },
    },
  },
  argTypes: {
    items: {
      description: "Array of React nodes to display as slides.",
      table: { category: "Data" },
    },
    autoPlayInterval: {
      control: { type: "number", min: 1000, max: 10000 },
      description: "Auto-play interval in milliseconds (default: 5000).",
      table: { category: "Behavior" },
    },
    showArrows: {
      control: "boolean",
      description: "Whether to show previous/next navigation arrows.",
      table: { category: "Appearance" },
    },
    showDots: {
      control: "boolean",
      description: "Whether to show dot indicators.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    items: slides,
  },
};

export const NoArrows: Story = {
  args: {
    items: slides,
    showArrows: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Navigation arrows hidden — only dots are used for navigation.",
      },
    },
  },
};

export const NoDots: Story = {
  args: {
    items: slides,
    showDots: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Dot indicators hidden — only arrows are used for navigation.",
      },
    },
  },
};

export const FastAutoPlay: Story = {
  args: {
    items: slides,
    autoPlayInterval: 2000,
  },
  parameters: {
    docs: {
      description: {
        story: "Fast auto-play cycling every 2 seconds.",
      },
    },
  },
};
