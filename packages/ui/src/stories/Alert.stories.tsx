import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "~/components/composites/alert";

const meta: Meta<typeof Alert> = {
  title: "Composites/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive", "info"],
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
    onClose: () => alert("Closed!"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="default" title="Default">
        Neutral information.
      </Alert>
      <Alert variant="info" title="Info">
        Informational note.
      </Alert>
      <Alert variant="success" title="Success">
        Operation completed.
      </Alert>
      <Alert variant="warning" title="Warning">
        Proceed with caution.
      </Alert>
      <Alert variant="destructive" title="Error">
        Action failed.
      </Alert>
    </div>
  ),
};
