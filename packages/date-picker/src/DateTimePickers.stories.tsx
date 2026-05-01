import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimePicker, DateTimePicker } from "@altrugenix/date-picker";

const meta: Meta = {
  title: "Forms/DatePicker/TimeAndDateTime",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Additional picker variants for selecting time and both date/time simultaneously.",
      },
    },
  },
};

export default meta;

export const TimeSelection: StoryObj = {
  render: () => (
    <div className="max-w-xs space-y-6">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Pick a time</label>
        <TimePicker />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Pre-filled Time</label>
        <TimePicker value="14:30" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A native time picker input.",
      },
    },
  },
};

export const DateTimeSelection: StoryObj = {
  render: () => (
    <div className="max-w-xs space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Schedule Meeting</label>
        <DateTimePicker />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A native datetime-local picker input.",
      },
    },
  },
};
