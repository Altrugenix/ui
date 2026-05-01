import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drawer } from "@altrugenix/drawer";
import { Button } from "@altrugenix/button";
import { Input } from "@altrugenix/input";
import { Textarea } from "@altrugenix/textarea";
import { Select } from "@altrugenix/select";

const meta: Meta<typeof Drawer> = {
  title: "Overlays/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A slide-in panel anchored to the left or right edge of the viewport. Includes a backdrop overlay, keyboard dismissal (Escape), and scroll locking.",
      },
    },
  },
  argTypes: {
    isOpen: {
      description: "Controls the visibility of the drawer.",
      table: { category: "State" },
    },
    onClose: {
      description: "Callback triggered on backdrop click or Escape key.",
      table: { category: "Events" },
    },
    side: {
      control: "select",
      options: ["left", "right"],
      description: "Which edge of the viewport the drawer slides from.",
      table: { category: "Appearance" },
    },
    title: {
      description: "Title text displayed in the drawer header.",
      table: { category: "Content" },
    },
    width: {
      description: "CSS width of the drawer panel (default: 24rem).",
      table: { category: "Appearance" },
    },
  },
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
          <p className="text-muted-foreground text-sm">
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

const WideDrawerDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open wide drawer
      </Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Edit Profile"
        width="32rem"
      >
        <div className="space-y-4">
          <Input label="Full Name" placeholder="Jane Doe" />
          <Input label="Email" type="email" placeholder="jane@example.com" />
          <Select label="Role">
            <option value="">Select role...</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </Select>
          <Textarea label="Bio" placeholder="Tell us about yourself..." rows={4} />
          <div className="flex gap-2 pt-2">
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export const EditForm: Story = {
  render: () => <WideDrawerDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A wider drawer (32rem) containing a full edit form — a common pattern for detail panels and settings.",
      },
    },
  },
};
