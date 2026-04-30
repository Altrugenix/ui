import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "@altrugenix/heading";

const meta: Meta<typeof Heading> = {
  title: "UI/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 1,
    children: "This is a Heading Level 1",
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
};
