import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
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
    <div className="space-y-[40vh] py-[20vh] px-8 max-w-2xl mx-auto">
      <Reveal direction="up" delay={0.1}>
        <h1 className="text-4xl font-bold">Scroll Down to Reveal ✨</h1>
      </Reveal>
      
      <Reveal direction="left" delay={0.2} duration={0.8}>
        <div className="p-8 bg-blue-500 text-white rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold mb-2">Entering from the left!</h3>
          <p className="opacity-90">This component uses a premium cubic-bezier easing for a smooth entrance.</p>
        </div>
      </Reveal>

      <Reveal direction="right" delay={0.3} duration={0.8}>
        <div className="p-8 bg-purple-500 text-white rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold mb-2">Entering from the right!</h3>
          <p className="opacity-90">Notice how the movement is subtle and professional.</p>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.4} duration={0.8}>
        <div className="p-8 bg-slate-900 text-white rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold mb-2">Entering from below!</h3>
          <p className="opacity-90 underline decoration-indigo-500 decoration-2 underline-offset-4">
            Perfect for hero sections and feature lists.
          </p>
        </div>
      </Reveal>

      <Reveal direction="none" delay={0.5} duration={1}>
        <div className="p-8 border-2 border-dashed border-slate-300 rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-2 text-slate-400">Fade In Only</h3>
          <p className="text-slate-400 italic">No movement, just a smooth fade.</p>
        </div>
      </Reveal>
    </div>
  ),
};
