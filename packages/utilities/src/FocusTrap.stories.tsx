import type { Meta, StoryObj } from "@storybook/react-vite";
import { FocusTrap } from "@altrugenix/utilities";
import { useState } from "react";
import { Button } from "@altrugenix/button";
import { Sheet } from "@altrugenix/sheet";
import { Input } from "@altrugenix/input";

const meta: Meta<typeof FocusTrap> = {
  title: "Utilities/FocusTrap",
  component: FocusTrap,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A utility component that traps keyboard focus within its children. Critical for accessibility in modals, dialogs, and overlays.",
      },
    },
  },
  argTypes: {
    active: {
      description: "Whether the focus trap is currently active.",
      table: { category: "State" },
    },
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [active, setActive] = useState(false);
    return (
      <div className="bg-muted/10 space-y-4 rounded-xl border p-10">
        <Button
          onClick={() => setActive(!active)}
          variant={active ? "destructive" : "primary"}
        >
          {active ? "Deactivate Trap" : "Activate Focus Trap"}
        </Button>

        <p className="text-muted-foreground text-sm">
          {active
            ? "Focus is now trapped! Press Tab to cycle through the inputs below. Notice how focus never leaves the box."
            : "Focus can move freely."}
        </p>

        <FocusTrap active={active}>
          <Sheet className="border-primary/20 max-w-sm space-y-4 p-6 shadow-md">
            <h3 className="text-lg font-bold">Trapped Content</h3>
            <Input placeholder="First focusable input" />
            <Input placeholder="Second focusable input" />
            <div className="flex gap-2">
              <Button size="sm">Submit</Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setActive(false)}
              >
                Cancel Trap
              </Button>
            </div>
          </Sheet>
        </FocusTrap>

        <div className="mt-10 border-t pt-4">
          <p className="mb-2 text-sm font-medium">
            Outside elements (unreachable when trap is active):
          </p>
          <Button variant="ghost">I am outside the trap</Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Activate the trap and try tabbing through the document. The focus will loop within the designated container.",
      },
    },
  },
};
