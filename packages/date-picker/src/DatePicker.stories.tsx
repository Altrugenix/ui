import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "@altrugenix/date-picker";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Forms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A simple date picker input that opens a native or custom calendar popover. Controlled via `value` and `onChange`.",
      },
    },
  },
  argTypes: {
    value: {
      description: "The currently selected Date object.",
      table: { category: "State" },
    },
    onChange: {
      description: "Callback triggered when a date is selected.",
      table: { category: "Events" },
    },
    placeholder: {
      description: "Placeholder text when no date is selected.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const ControlledDatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div className="space-y-2">
      <DatePicker value={date} onChange={setDate} />
      {date && (
        <p className="text-muted-foreground text-sm">
          Selected: {date.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export const Default: Story = {
  render: () => <ControlledDatePicker />,
};

export const WithPreselectedDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date("2026-05-01"));
    return <DatePicker value={date} onChange={setDate} />;
  },
  parameters: {
    docs: {
      description: {
        story: "A date picker initialized with a pre-selected date.",
      },
    },
  },
};

export const CustomPlaceholder: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker value={date} onChange={setDate} placeholder="Select your birth date" />;
  },
};
