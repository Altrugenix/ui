import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Fade,
  Grow,
  Slide,
  Zoom,
  Collapse,
} from "@altrugenix/utilities";

export default {
  title: "Utilities/AnimationWrappers",
  tags: ["autodocs"],
} satisfies Meta;

const DemoBox = () => (
  <div className="bg-primary text-primary-foreground rounded p-8 text-center font-bold shadow-lg">
    Animated Element
  </div>
);

const AnimationWrappersStory1Render = () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="bg-secondary text-secondary-foreground rounded px-4 py-2"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Fade
        </button>
        <Fade in={inProp}>
          <DemoBox />
        </Fade>
      </div>
    );
  };

export const FadeDemo: StoryObj = {
  render: () => <AnimationWrappersStory1Render />,
};

const AnimationWrappersStory1Render = () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="bg-secondary text-secondary-foreground rounded px-4 py-2"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Grow
        </button>
        <Grow in={inProp}>
          <DemoBox />
        </Grow>
      </div>
    );
  };

export const GrowDemo: StoryObj = {
  render: () => <AnimationWrappersStory1Render />,
};

const AnimationWrappersStory1Render = () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="bg-secondary text-secondary-foreground rounded px-4 py-2"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Slide (up)
        </button>
        <Slide in={inProp} direction="up">
          <DemoBox />
        </Slide>
      </div>
    );
  };

export const SlideDemo: StoryObj = {
  render: () => <AnimationWrappersStory1Render />,
};

const AnimationWrappersStory1Render = () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="bg-secondary text-secondary-foreground rounded px-4 py-2"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Zoom
        </button>
        <Zoom in={inProp}>
          <DemoBox />
        </Zoom>
      </div>
    );
  };

export const ZoomDemo: StoryObj = {
  render: () => <AnimationWrappersStory1Render />,
};

const AnimationWrappersStory1Render = () => {
    const [inProp, setInProp] = useState(true);
    return (
      <div className="space-y-4">
        <button
          className="bg-secondary text-secondary-foreground rounded px-4 py-2"
          onClick={() => setInProp(!inProp)}
        >
          Toggle Collapse
        </button>
        <Collapse in={inProp}>
          <DemoBox />
        </Collapse>
      </div>
    );
  };

export const CollapseDemo: StoryObj = {
  render: () => <AnimationWrappersStory1Render />,
};
