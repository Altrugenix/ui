import type { Meta, StoryObj } from "@storybook/react-vite";
import { ClickAwayListener } from "@altrugenix/utilities";
import { useState } from "react";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof ClickAwayListener> = {
  title: "Utilities/ClickAwayListener",
  component: ClickAwayListener,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A utility component that detects and fires a callback when a user clicks outside of its child element. Essential for closing dropdowns, modals, and popovers.",
      },
    },
  },
  argTypes: {
    onClickAway: {
      description: "Callback fired when a click happens outside the element.",
      table: { category: "Events" },
    },
  },
};

export default meta;

const DefaultDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-[300px] flex-col items-center gap-4 py-20">
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div className="relative">
          <Button onClick={() => setOpen(!open)}>
            Toggle Dropdown-like UI
          </Button>

          {open && (
            <div className="bg-background absolute top-full z-10 mt-2 w-64 rounded-lg border p-4 shadow-xl">
              <p className="text-sm font-medium">
                Click anywhere outside of this box to close it!
              </p>
              <Button size="sm" variant="outline" className="mt-4 w-full">
                Clicking inside does nothing
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
};

export const Default: StoryObj = {
  render: () => <DefaultDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A common use case: detecting clicks outside a custom dropdown menu.",
      },
    },
  },
};
