import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "~/components/ui/textarea";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here...",
  },
};

export const WithHelper: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
    helperText: "Maximum 500 characters.",
  },
};

export const WithError: Story = {
  args: {
    label: "Description",
    defaultValue: "Hi",
    error: true,
    errorText: "Description must be at least 10 characters.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Notes",
    disabled: true,
    value: "This textarea is disabled.",
  },
};
