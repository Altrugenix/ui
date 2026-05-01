import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormValidation } from "@altrugenix/form-validation";

const meta: Meta<typeof FormValidation> = {
  title: "Forms/FormValidation",
  component: FormValidation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A validation message list that displays error, success, and info messages below a form or field. Each message type has a distinct color and icon.",
      },
    },
  },
  argTypes: {
    messages: {
      description: "Array of validation messages with `message` and `type` (error | success | info).",
      table: { category: "Data" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormValidation>;

export const AllTypes: Story = {
  args: {
    messages: [
      { message: "Password must be at least 8 characters.", type: "error" },
      { message: "Username is available.", type: "success" },
      { message: "You can change your username later.", type: "info" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "All three message types displayed together — error, success, and info.",
      },
    },
  },
};

export const ErrorsOnly: Story = {
  args: {
    messages: [
      { message: "Email address is required.", type: "error" },
      { message: "Password is too weak.", type: "error" },
    ],
  },
};

export const SuccessOnly: Story = {
  args: {
    messages: [
      { message: "Your profile has been updated.", type: "success" },
      { message: "Email verified successfully.", type: "success" },
    ],
  },
};

export const PasswordRequirements: Story = {
  args: {
    messages: [
      { message: "At least 8 characters", type: "success" },
      { message: "Contains a number", type: "success" },
      { message: "Contains an uppercase letter", type: "error" },
      { message: "Contains a special character", type: "error" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A password strength checklist — met requirements shown in green, unmet in red.",
      },
    },
  },
};
