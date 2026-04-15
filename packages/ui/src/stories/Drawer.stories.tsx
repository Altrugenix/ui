import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drawer } from "~/components/navigation/drawer";
import { Button } from "@altrugenix/button";
import { Input } from "@altrugenix/input";

const meta: Meta<typeof Drawer> = {
  title: "Navigation/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerDemo = ({ side = "right" }: { side?: "left" | "right" }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open {side} drawer</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        side={side}
        title={`${side.charAt(0).toUpperCase() + side.slice(1)} Drawer`}
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            This drawer slides in from the {side}. Press Escape or click the
            backdrop to close.
          </p>
          <Input label="Name" placeholder="Enter name..." />
          <Button className="w-full" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export const Right: Story = {
  render: () => <DrawerDemo side="right" />,
};

export const Left: Story = {
  render: () => <DrawerDemo side="left" />,
};
