import type { Meta, StoryObj } from "@storybook/react-vite";
import { Backdrop } from "@altrugenix/backdrop";
import { useState } from "react";
import { Button } from "@altrugenix/button";
import { CircularProgress } from "@altrugenix/circular-progress";

const meta: Meta<typeof Backdrop> = {
  title: "UI/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
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
  },
};
