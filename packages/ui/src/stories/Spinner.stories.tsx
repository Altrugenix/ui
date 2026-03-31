import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "~/components/composites/spinner";

const meta: Meta<typeof Spinner> = {
  title: "Composites/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Loading data...",
    size: "lg",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-8">
      <Spinner size="sm" label="SM" />
      <Spinner size="md" label="MD" />
      <Spinner size="lg" label="LG" />
      <Spinner size="xl" label="XL" />
    </div>
  ),
};
