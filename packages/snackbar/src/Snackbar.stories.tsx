import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "@altrugenix/snackbar";
import { Button } from "@altrugenix/button";
import { useState } from "react";

const meta: Meta<typeof Snackbar> = {
  title: "Feedback/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A brief notification that appears at the bottom of the screen. Supports action buttons, close buttons, and auto-dismiss with configurable duration. Animated with Framer Motion.",
      },
    },
  },
  argTypes: {
    open: {
      description: "Controls the visibility of the snackbar.",
      table: { category: "State" },
    },
    message: {
      description: "The message text to display.",
      table: { category: "Content" },
    },
    actionLabel: {
      description: "Optional action button label.",
      table: { category: "Content" },
    },
    onAction: {
      description: "Callback triggered when the action button is clicked.",
      table: { category: "Events" },
    },
    onClose: {
      description: "Callback triggered on dismiss.",
      table: { category: "Events" },
    },
    autoHideDuration: {
      control: "number",
      description: "Auto-dismiss delay in milliseconds.",
      table: { category: "Behavior" },
    },
  },
};

export default meta;

const BasicDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
      <Snackbar
        open={open}
        message="Your changes have been saved."
        onClose={() => setOpen(false)}
        autoHideDuration={3000}
      />
    </>
  );
};

export const Default: StoryObj = {
  render: () => <BasicDemo />,
  parameters: {
    docs: {
      description: {
        story: "A basic snackbar that auto-dismisses after 3 seconds.",
      },
    },
  },
};

const WithActionDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        Delete Item
      </Button>
      <Snackbar
        open={open}
        message="Item deleted successfully."
        actionLabel="Undo"
        onAction={() => {
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
        autoHideDuration={5000}
      />
    </>
  );
};

export const WithAction: StoryObj = {
  render: () => <WithActionDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A snackbar with an Undo action button — a common pattern for destructive actions.",
      },
    },
  },
};

const PersistentDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Show Persistent Snackbar
      </Button>
      <Snackbar
        open={open}
        message="No internet connection detected."
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export const Persistent: StoryObj = {
  render: () => <PersistentDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Without `autoHideDuration`, the snackbar stays visible until explicitly dismissed.",
      },
    },
  },
};
