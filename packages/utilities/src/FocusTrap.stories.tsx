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
      <div className="space-y-4 p-10 bg-muted/10 rounded-xl border">
        <Button onClick={() => setActive(!active)} variant={active ? "danger" : "primary"}>
          {active ? "Deactivate Trap" : "Activate Focus Trap"}
        </Button>
  
        <p className="text-muted-foreground text-sm">
          {active
            ? "Focus is now trapped! Press Tab to cycle through the inputs below. Notice how focus never leaves the box."
            : "Focus can move freely."}
        </p>
  
        <FocusTrap active={active}>
          <Sheet className="max-w-sm space-y-4 p-6 shadow-md border-primary/20">
            <h3 className="font-bold text-lg">Trapped Content</h3>
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
  
        <div className="mt-10 pt-4 border-t">
          <p className="text-sm mb-2 font-medium">Outside elements (unreachable when trap is active):</p>
          <Button variant="ghost">I am outside the trap</Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Activate the trap and try tabbing through the document. The focus will loop within the designated container.",
      },
    },
  },
};
