import type { Meta, StoryObj } from "@storybook/react-vite";
import { VisuallyHidden } from "@altrugenix/utilities";
import { Button } from "@altrugenix/button";
import { Plus } from "lucide-react";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Utilities/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A utility component that visually hides its children while keeping them accessible to screen readers. Crucial for a11y when using icon-only buttons or inputs.",
      },
    },
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="space-y-4 p-10 max-w-md">
      <p className="text-sm">
        The button below contains an icon and a visually hidden label for screen
        readers.
      </p>

      <Button>
        <Plus className="mr-2 h-4 w-4" />
        <VisuallyHidden>Create new project</VisuallyHidden>
        <span>Add</span>
      </Button>

      <div className="bg-muted/30 mt-8 rounded-lg border p-4">
        <h4 className="mb-2 font-bold text-sm">Accessibility Check:</h4>
        <p className="text-sm text-muted-foreground">
          A screen reader will announce{" "}
          <strong>"Add Create new project"</strong> or{" "}
          <strong>"Create new project Add"</strong> depending on the reader,
          providing essential context that isn't visually present.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A standard example showing VisuallyHidden providing context to an icon button.",
      },
    },
  },
};
