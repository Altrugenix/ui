import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Fade,
  Grow,
  Slide,
  Zoom,
  Collapse,
} from "../components/utilities/animation";

export default {
  title: "Utilities/AnimationWrappers",
  tags: ["autodocs"],
} satisfies Meta;

const DemoBox = () => (
  <div className="rounded bg-primary p-8 text-center font-bold text-primary-foreground shadow-lg">
    Animated Element
  </div>
);

export const FadeDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="rounded bg-secondary px-4 py-2 text-secondary-foreground"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Fade
        </button>
        <Fade in={inProp}>
          <DemoBox />
        </Fade>
      </div>
    );
  },
};

export const GrowDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="rounded bg-secondary px-4 py-2 text-secondary-foreground"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Grow
        </button>
        <Grow in={inProp}>
          <DemoBox />
        </Grow>
      </div>
    );
  },
};

export const SlideDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="rounded bg-secondary px-4 py-2 text-secondary-foreground"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Slide (up)
        </button>
        <Slide in={inProp} direction="up">
          <DemoBox />
        </Slide>
      </div>
    );
  },
};

export const ZoomDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="rounded bg-secondary px-4 py-2 text-secondary-foreground"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Zoom
        </button>
        <Zoom in={inProp}>
          <DemoBox />
        </Zoom>
      </div>
    );
  },
};

export const CollapseDemo: StoryObj = {
  render: () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="rounded bg-secondary px-4 py-2 text-secondary-foreground"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Collapse
        </button>
        <Collapse in={inProp}>
          <DemoBox />
        </Collapse>
      </div>
    );
  },
};
