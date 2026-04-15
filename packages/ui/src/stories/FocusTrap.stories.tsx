import type { Meta, StoryObj } from "@storybook/react-vite";
import { FocusTrap } from "~/components/utilities/focus-trap/FocusTrap";
import { useState } from "react";
import { Button } from "@altrugenix/button";
import { Sheet } from "~/components/layout/sheet";
import { Input } from "@altrugenix/input";

const meta: Meta<typeof FocusTrap> = {
  title: "Utilities/FocusTrap",
  component: FocusTrap,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [active, setActive] = useState(false);
    return (
      <div className="space-y-4 p-10">
        <Button onClick={() => setActive(!active)}>
          {active ? "Deactivate Trap" : "Activate Focus Trap"}
        </Button>

        <p className="text-sm text-muted-foreground">
          {active
            ? "Focus is now trapped! Try tabbing through the elements in the sheet below."
            : "Focus can move freely."}
        </p>

        <FocusTrap active={active}>
          <Sheet className="max-w-sm space-y-4 p-6">
            <h3 className="font-bold">Trapped Content</h3>
            <Input placeholder="First focusable" />
            <Input placeholder="Second focusable" />
            <div className="flex gap-2">
              <Button size="sm">Submit</Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setActive(false)}
              >
                Cancel
              </Button>
            </div>
          </Sheet>
        </FocusTrap>

        <div className="mt-10">
          <Button variant="ghost">I am outside the trap</Button>
        </div>
      </div>
    );
  },
};
