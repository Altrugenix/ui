import type { Meta, StoryObj } from "@storybook/react-vite";
import { Reveal } from "@altrugenix/effects";

const meta: Meta<typeof Reveal> = {
  title: "Animation/Reveal",
  component: Reveal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A scroll-triggered animation wrapper powered by Framer Motion. Elements slide and fade into view when they enter the viewport. Supports four directional variants and customizable timing.",
      },
    },
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["up", "down", "left", "right", "none"],
      description: "Direction from which the element enters.",
      table: { category: "Animation" },
    },
    delay: {
      control: { type: "number", min: 0, max: 2, step: 0.1 },
      description: "Delay in seconds before the animation starts.",
      table: { category: "Animation" },
    },
    duration: {
      control: { type: "number", min: 0.1, max: 2, step: 0.1 },
      description: "Duration of the animation in seconds.",
      table: { category: "Animation" },
    },
    once: {
      control: "boolean",
      description:
        "Whether the animation only plays once (vs. every time it enters viewport).",
      table: { category: "Behavior" },
    },
    width: {
      control: "select",
      options: ["fit-content", "100%"],
      description: "Container width.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Reveal>;

export const Default: Story = {
  render: () => (
    <Reveal>
      <div className="bg-card rounded-lg border p-8 text-center">
        <h3 className="text-lg font-semibold">Hello World</h3>
        <p className="text-muted-foreground mt-1 text-sm">
          This element revealed from below.
        </p>
      </div>
    </Reveal>
  ),
};

export const AllDirections: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      {(["up", "down", "left", "right"] as const).map((dir) => (
        <Reveal key={dir} direction={dir} once={false}>
          <div className="bg-card flex h-32 items-center justify-center rounded-lg border font-mono text-sm">
            direction=&quot;{dir}&quot;
          </div>
        </Reveal>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All four directional variants — scroll down to trigger the animations. Set `once={false}` so they replay on re-entry.",
      },
    },
  },
};

export const StaggeredList: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      {[
        "Feature 1: Lightning Fast",
        "Feature 2: Fully Accessible",
        "Feature 3: Dark Mode Ready",
        "Feature 4: Type-Safe",
      ].map((feature, i) => (
        <Reveal key={feature} delay={0.1 * i}>
          <div className="bg-card rounded-lg border p-4">
            <p className="text-sm font-medium">{feature}</p>
          </div>
        </Reveal>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Staggered reveal — each item has an incrementally longer delay, creating a cascade effect.",
      },
    },
  },
};
