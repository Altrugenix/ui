import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalendarView } from "@altrugenix/calendar-view";
import { useState } from "react";

const meta: Meta<typeof CalendarView> = {
  title: "UI/CalendarView",
  component: CalendarView,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[1000px] p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CalendarView>;

const MOCK_EVENTS = [
  {
    id: "1",
    title: "Product Launch",
    date: new Date(),
    color: "border-blue-500 bg-blue-500/10 text-blue-600",
  },
  {
    id: "2",
    title: "Team Sync",
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    color: "border-purple-500 bg-purple-500/10 text-purple-600",
  },
  {
    id: "3",
    title: "Investor Call",
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    color: "border-rose-500 bg-rose-500/10 text-rose-600",
  },
];

export const Default: Story = {
  args: {
    events: MOCK_EVENTS,
  },
};

const CalendarViewStory1Render = () => {
  const [events, setEvents] = useState(MOCK_EVENTS);

  const handleAddEvent = (date: Date) => {
    const title = window.prompt("Enter event title:");
    if (title) {
      setEvents([
        ...events,
        {
          id: Math.random().toString(36).substr(2, 9),
          title,
          color: "border-blue-500 bg-blue-500/10 text-blue-600",
          date,
        },
      ]);
    }
  };

  return <CalendarView events={events} onAddEvent={handleAddEvent} />;
};

export const Interactive: Story = {
  render: () => <CalendarViewStory1Render />,
};
