import type { Meta } from "@storybook/react-vite";
import { useToast } from "@altrugenix/toast";
import { Button } from "@altrugenix/button";

const meta: Meta = {
  title: "UI/Toast",
  tags: ["autodocs"],
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
};
