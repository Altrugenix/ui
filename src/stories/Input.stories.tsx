import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";


const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Username",
  },
};

export const WithHelper: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    helperText: "We will never share your email.",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    type: "password",
    defaultValue: "short",
    errorText: "Password must be at least 8 characters.",
  },
};

export const WithIcons: Story = {
  args: {
    label: "Search",
    placeholder: "Search components...",
    leftAddon: <Search className="h-4 w-4" />,
  },
};

export const Disabled: Story = {
  args: {
    label: "API Key",
    disabled: true,
    value: "sk-••••••••••••••••",
  },
};
