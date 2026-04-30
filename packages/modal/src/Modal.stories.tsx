import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "@altrugenix/modal";
import { Button } from "@altrugenix/button";
import { Input } from "@altrugenix/input";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalStory1Render = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-start gap-4">
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
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
  render: () => <ModalStory1Render />,
};

const ModalStory1Render = () => {
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
          Large content area
        </div>
      </Modal>
    </div>
  );
};

export const CustomSize: Story = {
  render: () => <ModalStory1Render />,
};
