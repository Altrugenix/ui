import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@altrugenix/alert";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A contextual banner for displaying important messages to users. Supports five semantic variants, optional close buttons, and custom actions.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive", "info"],
      description: "The semantic variant determining color and icon.",
      table: { category: "Appearance" },
    },
    title: {
      description: "Bold title text for the alert.",
      table: { category: "Content" },
    },
    children: {
      description: "The body content of the alert.",
      table: { category: "Content" },
    },
    onClose: {
      description: "When provided, renders a close button. Called on dismiss.",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Heads up!",
    children: "You can add components to your app using the CLI.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    children: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "Your session is about to expire. Please save your work.",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Error",
    children: "Something went wrong. Please try again.",
  },
};

export const Closable: Story = {
  args: {
    variant: "info",
    title: "Dismissable",
    children: "Click the X to close this alert.",
    onClose: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "When the `onClose` callback is provided, a dismiss button appears in the top-right corner.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default" title="Default">
        Neutral information with no specific semantic meaning.
      </Alert>
      <Alert variant="info" title="Info">
        Informational note — something the user should be aware of.
      </Alert>
      <Alert variant="success" title="Success">
        Operation completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Proceed with caution — there may be side effects.
      </Alert>
      <Alert variant="destructive" title="Error">
        An error occurred and the action could not be completed.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Side-by-side comparison of every available alert variant.",
      },
    },
  },
};

export const WithActions: Story = {
  render: () => (
    <Alert variant="warning" title="Subscription Expiring">
      <div className="mt-2 flex flex-col gap-3">
        <p className="text-sm">
          Your Pro plan expires in 3 days. Upgrade now to avoid losing access to
          premium features.
        </p>
        <div className="flex gap-2">
          <Button size="sm">Upgrade Now</Button>
          <Button size="sm" variant="ghost">
            Remind Later
          </Button>
        </div>
      </div>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "An alert with embedded action buttons — common for upgrade prompts and calls to action.",
      },
    },
  },
};
