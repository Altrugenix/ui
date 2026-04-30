import type { Meta, StoryObj } from "@storybook/react-vite";
import { Rating } from "@altrugenix/rating";
import { useState } from "react";

const meta: Meta<typeof Rating> = {
  title: "UI/Rating",
  component: Rating,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
    size: "md",
  },
};

const RatingStory1Render = () => {
  const [value, setValue] = useState(2);
  return (
    <div className="flex flex-col gap-4">
      <Rating value={value} onChange={setValue} size="lg" />
      <p className="text-sm font-medium">Your rating: {value} stars</p>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <RatingStory1Render />,
};

export const ReadOnly: Story = {
  args: {
    value: 4.5,
    readonly: true,
    size: "sm",
  },
};

export const CustomColors: Story = {
  args: {
    value: 4,
    activeColor: "text-rose-500 fill-rose-500",
    inactiveColor: "text-muted fill-muted",
  },
};
