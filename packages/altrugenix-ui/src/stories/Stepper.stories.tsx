import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stepper } from "@/components/composites/stepper";

const meta: Meta<typeof Stepper> = {
  title: "Composites/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    activeStep: {
      control: { type: "range", min: 0, max: 3 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: "Account", description: "Create your account" },
  { label: "Profile", description: "Set up your profile" },
  { label: "Review", description: "Review your details" },
  { label: "Complete", description: "All done!" },
];

export const FirstStep: Story = {
  args: {
    steps,
    activeStep: 0,
  },
};

export const InProgress: Story = {
  args: {
    steps,
    activeStep: 2,
  },
};

export const Complete: Story = {
  args: {
    steps,
    activeStep: 4,
  },
};

export const Vertical: Story = {
  args: {
    steps,
    activeStep: 1,
    orientation: "vertical",
  },
};
