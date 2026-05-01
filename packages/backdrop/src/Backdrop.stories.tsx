import type { Meta, StoryObj } from "@storybook/react-vite";
import { Backdrop } from "@altrugenix/backdrop";
import { useState } from "react";
import { Button } from "@altrugenix/button";
import { CircularProgress } from "@altrugenix/circular-progress";
import { Spinner } from "@altrugenix/spinner";

const meta: Meta<typeof Backdrop> = {
  title: "Overlays/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A full-screen overlay that dims the background behind active elements like modals and drawers. Supports blur, invisible mode, and animated enter/exit transitions via Framer Motion.",
      },
    },
  },
  argTypes: {
    open: {
      description: "Controls the visibility of the backdrop.",
      table: { category: "State" },
    },
    invisible: {
      control: "boolean",
      description: "When true, the backdrop is fully transparent with no blur.",
      table: { category: "Appearance" },
    },
    onClick: {
      description: "Click handler — typically used to dismiss the overlay.",
      table: { category: "Events" },
    },
  },
};

export default meta;

const DefaultStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-10">
      <Button onClick={() => setOpen(true)}>Show Backdrop</Button>
      <Backdrop open={open} onClick={() => setOpen(false)}>
        <div className="text-center text-white">
          <CircularProgress indeterminate className="mb-4 text-white" />
          <p className="font-bold">Loading... Click anywhere to close.</p>
        </div>
      </Backdrop>
    </div>
  );
};

export const Default: StoryObj = {
  render: () => <DefaultStory />,
  parameters: {
    docs: {
      description: {
        story:
          "A loading overlay with a circular progress indicator. Click anywhere on the backdrop to dismiss.",
      },
    },
  },
};

const InvisibleStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-10">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Show Invisible Backdrop
      </Button>
      <Backdrop open={open} invisible onClick={() => setOpen(false)}>
        <div className="rounded-lg bg-white p-8 shadow-2xl">
          <p className="text-foreground mb-4 font-medium">
            The backdrop is invisible but still captures clicks.
          </p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Backdrop>
    </div>
  );
};

export const Invisible: StoryObj = {
  render: () => <InvisibleStory />,
  parameters: {
    docs: {
      description: {
        story:
          "An invisible backdrop that captures clicks without dimming or blurring the background.",
      },
    },
  },
};

const WithSpinnerStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-10">
      <Button onClick={() => setOpen(true)}>Show Loading State</Button>
      <Backdrop open={open} onClick={() => setOpen(false)}>
        <Spinner size="xl" label="Please wait..." className="text-white" />
      </Backdrop>
    </div>
  );
};

export const WithSpinner: StoryObj = {
  render: () => <WithSpinnerStory />,
  parameters: {
    docs: {
      description: {
        story:
          "Backdrop composed with the Spinner component for a simple full-screen loading state.",
      },
    },
  },
};
