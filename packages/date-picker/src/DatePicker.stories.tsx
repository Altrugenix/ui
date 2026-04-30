import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "@altrugenix/date-picker";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "UI/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-[500px] max-w-[400px] p-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <DatePicker {...args} value={date} onChange={setDate} />;
  },
};

export const WithPlaceholder: Story = {
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        value={date}
        onChange={setDate}
        placeholder="Select your birthday"
      />
    );
  },
};
