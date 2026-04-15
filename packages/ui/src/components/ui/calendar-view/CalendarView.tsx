import { useState } from "react";
import { cn } from "~/lib/utils/cn";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@altrugenix/button";

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  color?: string;
}

export interface CalendarViewProps {
  events?: CalendarEvent[];
  onAddEvent?: (date: Date) => void;
  className?: string;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CalendarView = ({
  events = [],
  onAddEvent,
  className,
}: CalendarViewProps) => {
  const [viewDate, setViewDate] = useState(new Date());

  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const handlePrevMonth = () => {
    setViewDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const getEventsForDay = (day: number) => {
    return events.filter(
      (event) =>
        event.date.getDate() === day &&
        event.date.getMonth() === currentMonth &&
        event.date.getFullYear() === currentYear
    );
  };

  // Days from previous month
  const prevDays = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    prevDays.push(prevMonthDays - i);
  }

  // Days from current month
  const currentDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    currentDays.push(i);
  }

  // Days from next month
  const totalCells = 42;
  const nextDaysCount = totalCells - prevDays.length - currentDays.length;
  const nextDays = [];
  for (let i = 1; i <= nextDaysCount; i++) {
    nextDays.push(i);
  }

  return (
    <div className={cn("overflow-hidden rounded-xl border bg-card", className)}>
      <div className="flex items-center justify-between border-b bg-muted/20 p-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">
            {MONTHS[currentMonth]} {currentYear}
          </h2>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handlePrevMonth}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleNextMonth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewDate(new Date())}
          >
            Today
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 border-b">
        {DAYS.map((day) => (
          <div
            key={day}
            className="bg-muted/10 py-2 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid auto-rows-[120px] grid-cols-7">
        {prevDays.map((day, i) => (
          <div
            key={`prev-${i}`}
            className="border-b border-r bg-muted/5 p-2 opacity-40"
          >
            <span className="text-sm font-medium">{day}</span>
          </div>
        ))}

        {currentDays.map((day) => {
          const dayEvents = getEventsForDay(day);
          return (
            <div
              key={day}
              className={cn(
                "group relative border-b border-r p-2 transition-colors hover:bg-muted/5",
                isToday(day) && "bg-primary/5"
              )}
            >
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium",
                    isToday(day) && "bg-primary text-primary-foreground"
                  )}
                >
                  {day}
                </span>
                <button
                  onClick={() =>
                    onAddEvent?.(new Date(currentYear, currentMonth, day))
                  }
                  className="rounded p-1 opacity-0 transition-opacity hover:bg-primary/10 group-hover:opacity-100"
                >
                  <Plus className="h-3 w-3 text-primary" />
                </button>
              </div>

              <div className="scrollbar-thin mt-1 max-h-[80px] space-y-1 overflow-y-auto">
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className={cn(
                      "truncate rounded border-l-2 px-1.5 py-0.5 text-[10px] font-medium",
                      event.color || "border-primary bg-primary/10 text-primary"
                    )}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {nextDays.map((day, i) => (
          <div
            key={`next-${i}`}
            className="border-b border-r bg-muted/5 p-2 opacity-40"
          >
            <span className="text-sm font-medium">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
