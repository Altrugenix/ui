import type { Meta, StoryObj } from "@storybook/react-vite";
import { Portal } from "@altrugenix/utilities";
import { useState } from "react";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof Portal> = {
  title: "Utilities/Portal",
  component: Portal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A utility component that teleports its children to `document.body` (or another target). Vital for modals, tooltips, and popovers to escape container stacking contexts (`overflow: hidden` or `z-index` issues).",
      },
    },
  },
  argTypes: {
    container: {
      description:
        "Optional custom DOM node to portal into. Defaults to document.body.",
      table: { category: "Configuration" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Portal>;

const DefaultDemo = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-muted/20 relative max-w-md overflow-hidden rounded-xl border p-10">
      <p className="mb-4 text-sm">
        This container has <code>overflow: hidden</code>. If the tooltip
        wasn't portaled, it would be cut off by the container edges. Click the
        button to see the portal escape the container.
      </p>
      <Button onClick={() => setShow(!show)}>
        {show ? "Hide Portaled Element" : "Show Portaled Element"}
      </Button>

      <Portal>
        {show && (
          <div className="bg-primary text-primary-foreground animate-in slide-in-from-top-10 fixed top-20 left-1/2 z-[100] -translate-x-1/2 rounded-full px-6 py-4 font-bold shadow-2xl">
            I am rendered directly inside document.body!
          </div>
        )}
      </Portal>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A demonstration of an element breaking out of an `overflow: hidden` parent using a React Portal.",
      },
    },
  },
};
