import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypingAnimation } from "@altrugenix/feedback";

const meta: Meta<typeof TypingAnimation> = {
  title: "Feedback/TypingAnimation",
  component: TypingAnimation,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A simple text typing animation effect. It renders text character by character to simulate a typing effect.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "The text string to animate.",
      table: { category: "Content" },
    },
    speed: {
      control: { type: "number", min: 10, max: 200 },
      description: "Speed of typing in milliseconds per character.",
      table: { category: "Animation" },
    },
    repeat: {
      control: "boolean",
      description: "Whether the animation should loop infinitely.",
      table: { category: "Animation" },
    },
    className: {
      description: "Custom CSS classes to style the text.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Building the future of digital experiences 🚀",
    speed: 80,
  },
};

export const HeroSection: Story = {
  args: {
    text: "Altrugenix: The only UI library you'll ever need.",
    speed: 50,
    className:
      "text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Typing animation applied to large, gradient-colored text. Perfect for hero sections.",
      },
    },
  },
};

export const FastRepeating: Story = {
  args: {
    text: "Type... Repeat... Type... Repeat...",
    speed: 30,
    repeat: true,
  },
  parameters: {
    docs: {
      description: {
        story: "A fast animation that repeats in an infinite loop.",
      },
    },
  },
};
