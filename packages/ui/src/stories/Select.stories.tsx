import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@altrugenix/select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Country",
    children: (
      <>
        <option value="">Select a country...</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Role",
    error: true,
    errorText: "Please select a role.",
    children: (
      <>
        <option value="">Choose...</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: "Plan",
    disabled: true,
    children: <option>Enterprise</option>,
  },
};
