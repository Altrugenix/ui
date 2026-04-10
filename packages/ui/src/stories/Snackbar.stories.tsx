import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar } from "~/components/ui/snackbar";
import { useState } from "react";
import { Button } from "~/components/ui/button";

const meta: Meta<typeof Snackbar> = {
  title: "UI/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Snackbar</Button>
        <Snackbar
          open={open}
          message="Document archived successfully"
          actionLabel="Undo"
          onAction={() => setOpen(false)}
          onClose={() => setOpen(false)}
          autoHideDuration={4000}
        />
      </>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [open, setOpen] = useState<string | null>(null);
    return (
      <div className="flex gap-4">
        <Button onClick={() => setOpen("success")}>Success</Button>
        <Button onClick={() => setOpen("error")} variant="destructive">
          Error
        </Button>
        <Button onClick={() => setOpen("default")} variant="outline">
          Default
        </Button>

        <Snackbar
          open={open === "success"}
          variant="success"
          message="Data saved successfully!"
          onClose={() => setOpen(null)}
          autoHideDuration={3000}
        />
        <Snackbar
          open={open === "error"}
          variant="error"
          message="Failed to update record."
          onClose={() => setOpen(null)}
          autoHideDuration={3000}
        />
        <Snackbar
          open={open === "default"}
          variant="default"
          message="System maintenance in 10 minutes."
          onClose={() => setOpen(null)}
          autoHideDuration={3000}
        />
      </div>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const [pos, setPos] = useState<
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right"
      | null
    >(null);
    return (
      <div className="grid grid-cols-3 gap-4">
        <Button onClick={() => setPos("top-left")}>Top Left</Button>
        <Button onClick={() => setPos("top-center")}>Top Center</Button>
        <Button onClick={() => setPos("top-right")}>Top Right</Button>
        <Button onClick={() => setPos("bottom-left")}>Bottom Left</Button>
        <Button onClick={() => setPos("bottom-center")}>Bottom Center</Button>
        <Button onClick={() => setPos("bottom-right")}>Bottom Right</Button>

        <Snackbar
          open={Boolean(pos)}
          position={pos}
          message={`Visible at ${pos}`}
          onClose={() => setPos(null)}
          autoHideDuration={2000}
        />
      </div>
    );
  },
};
