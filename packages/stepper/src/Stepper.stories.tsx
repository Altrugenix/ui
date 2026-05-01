import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "@altrugenix/stepper";

const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A multi-step progress indicator showing the user's position in a linear workflow. Supports horizontal and vertical orientations with completed, active, and upcoming states.",
      },
    },
  },
  argTypes: {
    activeStep: {
      control: { type: "number", min: 0 },
      description: "The current active step (0-indexed).",
      table: { category: "State" },
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Layout direction of the stepper.",
      table: { category: "Appearance" },
    },
    steps: {
      description: "Array of step items with label and optional description.",
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: "Account", description: "Create your account" },
  { label: "Profile", description: "Fill in your details" },
  { label: "Review", description: "Verify your information" },
  { label: "Complete", description: "You're all set!" },
];

export const Default: Story = {
  args: {
    steps,
    activeStep: 1,
  },
};

export const FirstStep: Story = {
  args: { steps, activeStep: 0 },
};

export const AllComplete: Story = {
  args: { steps, activeStep: 4 },
  parameters: {
    docs: {
      description: {
        story: "All steps completed — `activeStep` exceeds the step count.",
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    steps,
    activeStep: 2,
    orientation: "vertical",
  },
  parameters: {
    docs: {
      description: {
        story: "Vertical layout suitable for sidebar navigation or mobile flows.",
      },
    },
  },
};

export const CheckoutFlow: Story = {
  args: {
    steps: [
      { label: "Cart", description: "Review your items" },
      { label: "Shipping", description: "Enter your address" },
      { label: "Payment", description: "Choose payment method" },
      { label: "Confirmation", description: "Order placed!" },
    ],
    activeStep: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "An e-commerce checkout flow showing the payment step as active.",
      },
    },
  },
};
