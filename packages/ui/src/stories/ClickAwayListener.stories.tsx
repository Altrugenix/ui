import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClickAwayListener } from "@altrugenix/utilities";
import { useState } from "react";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof ClickAwayListener> = {
  title: "Utilities/ClickAwayListener",
  component: ClickAwayListener,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div className="relative">
            <Button onClick={() => setOpen(!open)}>
              Toggle Dropdown-like UI
            </Button>

            {open && (
              <div className="bg-background absolute top-full z-10 mt-2 w-64 rounded-lg border p-4 shadow-xl">
                <p className="text-sm font-medium">
                  Click outside of me to close!
                </p>
                <Button size="sm" variant="outline" className="mt-2 w-full">
                  Inside Button
                </Button>
              </div>
            )}
          </div>
        </ClickAwayListener>

        {!open && (
          <p className="text-muted-foreground text-sm italic">
            Dropdown is closed.
          </p>
        )}
      </div>
    );
  },
};
