import type { Meta } from "@storybook/react-vite";
import { useToast } from "@altrugenix/toast";
import { Button } from "@altrugenix/button";

const meta: Meta = {
  title: "Feedback/Toast",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Lightweight notification toasts that appear briefly to confirm actions. Supports success, error, warning, and info types via the `useToast` hook.",
      },
    },
  },
};

export default meta;

const DefaultToastStory = () => {
  const { toast } = useToast();

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        onClick={() =>
          toast({
            type: "success",
            title: "Success",
            description: "Your action was completed successfully.",
          })
        }
      >
        Success Toast
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast({
            type: "error",
            title: "Error occurred",
            description: "We could not save your settings at this time.",
          })
        }
      >
        Error Toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            type: "warning",
            title: "Connection reset",
            description: "The connection was interrupted but we are retrying.",
          })
        }
      >
        Warning Toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            type: "info",
            title: "Update available",
            description: "A newer version of the library is available now.",
          })
        }
      >
        Info Toast
      </Button>
    </div>
  );
};

export const Default = {
  render: () => <DefaultToastStory />,
  parameters: {
    docs: {
      description: {
        story:
          "All four toast types triggered by button clicks. Toasts appear briefly and auto-dismiss.",
      },
    },
  },
};

const SuccessToastStory = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          type: "success",
          title: "Saved!",
          description: "Your changes have been saved to the database.",
        })
      }
    >
      Save Changes
    </Button>
  );
};

export const SuccessOnly = {
  render: () => <SuccessToastStory />,
  parameters: {
    docs: {
      description: {
        story: "A success toast triggered after a save action.",
      },
    },
  },
};

const ErrorToastStory = () => {
  const { toast } = useToast();
  return (
    <Button
      variant="destructive"
      onClick={() =>
        toast({
          type: "error",
          title: "Deletion Failed",
          description:
            "The resource could not be deleted. Please check your permissions.",
        })
      }
    >
      Delete Item
    </Button>
  );
};

export const ErrorOnly = {
  render: () => <ErrorToastStory />,
  parameters: {
    docs: {
      description: {
        story: "An error toast triggered after a failed destructive action.",
      },
    },
  },
};

const MultipleToastsStory = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => {
        toast({ type: "info", title: "Uploading...", description: "Preparing your files." });
        setTimeout(
          () => toast({ type: "success", title: "Upload complete!", description: "All files uploaded successfully." }),
          1500
        );
      }}
    >
      Trigger Sequential Toasts
    </Button>
  );
};

export const Sequential = {
  render: () => <MultipleToastsStory />,
  parameters: {
    docs: {
      description: {
        story:
          "Multiple toasts fired sequentially — an info toast followed by a success toast after a delay, simulating a real async operation.",
      },
    },
  },
};
