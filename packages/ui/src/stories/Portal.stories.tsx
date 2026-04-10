import type { Meta, StoryObj } from "@storybook/react-vite";
import { Portal } from "~/components/utilities/portal/Portal";
import { useState } from "react";
import { Button } from "~/components/ui/button";

const meta: Meta<typeof Portal> = {
  title: "Utilities/Portal",
  component: Portal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Portal>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <div className="relative overflow-hidden rounded-xl border bg-muted/20 p-10">
        <Typography variant="body2" className="mb-4">
          This container has <code>overflow: hidden</code>. Click the button to
          see the portal in action.
        </Typography>
        <Button onClick={() => setShow(!show)}>
          {show ? "Hide Portal" : "Show Portal"}
        </Button>

        <Portal>
          {show && (
            <div className="fixed left-1/2 top-20 z-[100] -translate-x-1/2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground shadow-2xl">
              I am rendered at the end of document.body!
            </div>
          )}
        </Portal>
      </div>
    );
  },
};

import { Typography } from "~/components/ui/typography";
