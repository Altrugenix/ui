import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "@altrugenix/modal";
import { Button } from "@altrugenix/button";
import { Input } from "@altrugenix/input";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

const meta: Meta<typeof Modal> = {
  title: "Overlays/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A dialog overlay that interrupts the user with important content and requires action. Supports custom headers, footers, sizes, and focus trapping.",
      },
    },
  },
  argTypes: {
    isOpen: {
      description: "Controls the visibility of the modal.",
      table: { category: "State" },
    },
    onClose: {
      description: "Callback triggered when the modal requests to close.",
      table: { category: "Events" },
    },
    title: {
      description: "Title text rendered in the modal header.",
      table: { category: "Content" },
    },
    description: {
      description: "Subtitle or description text below the title.",
      table: { category: "Content" },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Controls the maximum width of the modal.",
      table: { category: "Appearance" },
    },
    footer: {
      description: "Custom footer content, typically action buttons.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ConfirmDeleteDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-start gap-4">
      <Button variant="destructive" onClick={() => setIsOpen(true)}>
        Delete Account
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Account"
        description="Are you sure you want to delete your account? This action cannot be undone."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsOpen(false)}>
              Delete Permanently
            </Button>
          </>
        }
      >
        <div className="space-y-4 py-4">
          <p className="text-foreground/80 text-sm">
            Please enter your password to confirm account deletion.
          </p>
          <Input label="Password" type="password" />
        </div>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => <ConfirmDeleteDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A confirmation dialog with password verification — a common pattern for irreversible actions.",
      },
    },
  },
};

const InfoModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-start gap-4">
      <Button onClick={() => setIsOpen(true)}>View Details</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Component Details"
        description="Technical information about this component."
        footer={<Button onClick={() => setIsOpen(false)}>Got it</Button>}
      >
        <div className="space-y-3 py-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Package</span>
            <span className="font-mono font-medium">@altrugenix/modal</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Version</span>
            <span className="font-mono font-medium">1.0.0</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Bundle Size</span>
            <span className="font-mono font-medium">2.4 kB</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const Informational: Story = {
  render: () => <InfoModalDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A simple informational modal with structured key-value content and a single dismiss action.",
      },
    },
  },
};

const XLModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-start gap-4">
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Open XL Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Expanded View"
        size="xl"
        footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
      >
        <div className="text-muted-foreground mt-4 flex h-[400px] items-center justify-center rounded-lg border-2 border-dashed p-10">
          Large content area — ideal for forms, data tables, or rich media
        </div>
      </Modal>
    </div>
  );
};

export const CustomSize: Story = {
  render: () => <XLModalDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "An extra-large modal for content-heavy use cases like multi-step forms or data previews.",
      },
    },
  },
};

const WarningModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-start gap-4">
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Unsaved Changes
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Unsaved Changes"
        description="You have unsaved changes that will be lost."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Keep Editing
            </Button>
            <Button variant="destructive" onClick={() => setIsOpen(false)}>
              Discard Changes
            </Button>
          </>
        }
      >
        <div className="flex items-center gap-3 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
          </div>
          <p className="text-foreground/80 text-sm">
            If you leave this page, your changes will not be saved. This action
            cannot be reversed.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export const WarningConfirm: Story = {
  render: () => <WarningModalDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A warning confirmation modal with an icon indicator — used to prevent accidental data loss.",
      },
    },
  },
};
