import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircularProgress } from "~/components/ui/circular-progress";

const meta: Meta<typeof CircularProgress> = {
  title: "UI/CircularProgress",
  component: CircularProgress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Default: Story = {
  args: {
    value: 65,
    size: "md",
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    size: "md",
  },
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress value={40} className="text-emerald-500" />
      <CircularProgress value={70} className="text-rose-500" />
      <CircularProgress value={90} className="text-amber-500" />
      <CircularProgress indeterminate className="text-sky-500" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <CircularProgress indeterminate size="sm" />
      <CircularProgress indeterminate size="md" />
      <CircularProgress indeterminate size="lg" />
    </div>
  ),
};
