import type { Meta, StoryObj } from "@storybook/react-vite";
import { Reveal } from "../components/effects/Reveal";

const meta: Meta<typeof Reveal> = {
  title: "Components/Effects/Reveal",
  component: Reveal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: () => (
    <div className="mx-auto max-w-2xl space-y-[40vh] px-8 py-[20vh]">
      <Reveal direction="up" delay={0.1}>
        <h1 className="text-4xl font-bold">Scroll Down to Reveal ✨</h1>
      </Reveal>

      <Reveal direction="left" delay={0.2} duration={0.8}>
        <div className="rounded-2xl bg-blue-500 p-8 text-white shadow-xl">
          <h3 className="mb-2 text-xl font-bold">Entering from the left!</h3>
          <p className="opacity-90">
            This component uses a premium cubic-bezier easing for a smooth
            entrance.
          </p>
        </div>
      </Reveal>

      <Reveal direction="right" delay={0.3} duration={0.8}>
        <div className="rounded-2xl bg-purple-500 p-8 text-white shadow-xl">
          <h3 className="mb-2 text-xl font-bold">Entering from the right!</h3>
          <p className="opacity-90">
            Notice how the movement is subtle and professional.
          </p>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.4} duration={0.8}>
        <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
          <h3 className="mb-2 text-xl font-bold">Entering from below!</h3>
          <p className="underline decoration-indigo-500 decoration-2 underline-offset-4 opacity-90">
            Perfect for hero sections and feature lists.
          </p>
        </div>
      </Reveal>

      <Reveal direction="none" delay={0.5} duration={1}>
        <div className="rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-slate-400">
            Fade In Only
          </h3>
          <p className="italic text-slate-400">
            No movement, just a smooth fade.
          </p>
        </div>
      </Reveal>
    </div>
  ),
};
