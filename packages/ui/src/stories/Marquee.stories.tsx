import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from "../components/layout/marquee";

const meta: Meta<typeof Marquee> = {
  title: "Components/Layout/Marquee",
  component: Marquee,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const logos = [
  "Google", "Microsoft", "Amazon", "Apple", "Netflix", "Meta", "Tesla", "Adobe", 
  "Logitech", "Intel", "NVIDIA", "Advanced Micro Devices"
];

export const Default: Story = {
  args: {
    speed: 30,
    children: (
      <>
        {logos.map((logo) => (
          <div key={logo} className="mx-8 text-2xl font-bold opacity-30 hover:opacity-100 transition-opacity whitespace-nowrap">
            {logo}
          </div>
        ))}
      </>
    ),
  },
};

export const SlowRight: Story = {
  args: {
    direction: "right",
    speed: 60,
    children: (
      <>
        {logos.map((logo) => (
          <div key={logo} className="mx-8 text-3xl font-black opacity-20 whitespace-nowrap uppercase italic tracking-widest text-primary">
            {logo}
          </div>
        ))}
      </>
    ),
  },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div className="h-[400px] flex items-center justify-center bg-slate-50">
        <Story />
      </div>
    ),
  ],
  args: {
    vertical: true,
    speed: 20,
    className: "h-full justify-center w-fit mx-auto border-x border-slate-200 px-4",
    children: (
      <>
        {logos.slice(0, 6).map((logo) => (
          <div key={logo} className="py-8 text-xl font-bold opacity-40">
            {logo}
          </div>
        ))}
      </>
    ),
  },
};
