import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fade, Grow, Slide, Zoom, Collapse } from "@altrugenix/utilities";

export default {
  title: "Utilities/AnimationWrappers",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A collection of easy-to-use animation wrapper components powered by Framer Motion. Wrap any component to animate its entrance/exit.",
      },
    },
  },
} satisfies Meta;

const DemoBox = () => (
  <div className="bg-primary text-primary-foreground flex h-32 w-32 items-center justify-center rounded-xl p-4 text-center font-bold shadow-lg">
    Animated Element
  </div>
);

export const FadeDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Fade
        </button>
        <div className="h-40">
          <Fade in={inProp}>
            <DemoBox />
          </Fade>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Fades an element in and out by animating opacity.",
      },
    },
  },
};

export const GrowDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Grow
        </button>
        <div className="h-40">
          <Grow in={inProp}>
            <DemoBox />
          </Grow>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Grows an element out from its center by animating scale and opacity.",
      },
    },
  },
};

export const SlideDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="bg-muted/10 space-y-4 overflow-hidden rounded-xl border p-4">
        <button
          className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Slide (up)
        </button>
        <div className="relative h-40">
          <Slide in={inProp} direction="up">
            <DemoBox />
          </Slide>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Slides an element from the edge of its container. Supports `up`, `down`, `left`, `right` directions.",
      },
    },
  },
};

export const ZoomDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="bg-secondary text-secondary-foreground rounded-md px-4 py-2 font-medium"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Zoom
        </button>
        <div className="h-40">
          <Zoom in={inProp}>
            <DemoBox />
          </Zoom>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A bouncy scale animation.",
      },
    },
  },
};

export const CollapseDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="max-w-sm space-y-4">
        <button
          className="bg-secondary text-secondary-foreground w-full rounded-md px-4 py-2 font-medium"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Collapse
        </button>
        <Collapse in={inProp}>
          <div className="bg-card text-card-foreground rounded-xl border p-6 shadow-sm">
            <p>
              This content is inside a collapse wrapper. It animates its height
              from 0 to auto seamlessly.
            </p>
          </div>
        </Collapse>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Animates an element's height. Crucial for accordions and expandable menus.",
      },
    },
  },
};
