import type { Meta, StoryObj } from "@storybook/react-vite";
import { TimePicker, DateTimePicker } from "~/components/ui/date-picker";

const meta: Meta = {
  title: "UI/DatePicker/Advanced",
  tags: ["autodocs"],
};

export default meta;

export const TimeSelection: StoryObj = {
  render: () => (
    <div className="max-w-xs space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-bold">Pick a time</label>
        <TimePicker />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-bold">Pre-filled</label>
        <TimePicker value="14:30" />
      </div>
    </div>
  ),
};

export const DateTimeSelection: StoryObj = {
  render: () => (
    <div className="max-w-xs space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-bold">Combined Picker</label>
        <DateTimePicker />
      </div>
    </div>
  ),
};
