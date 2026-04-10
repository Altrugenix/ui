import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormValidation } from "~/components/composites/form-validation";

const meta: Meta<typeof FormValidation> = {
  title: "Composites/FormValidation",
  component: FormValidation,
  tags: ["autodocs"],
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
