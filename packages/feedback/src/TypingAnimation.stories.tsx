import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypingAnimation } from "@altrugenix/feedback";

const meta: Meta<typeof TypingAnimation> = {
  title: "Components/Feedback/TypingAnimation",
  component: TypingAnimation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
};

export const FastRepeating: Story = {
  args: {
    text: "Type... Repeat... Type... Repeat...",
    speed: 30,
    repeat: true,
  },
};
