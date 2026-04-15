import { useState } from "react";
import { cn } from "~/lib/utils/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@altrugenix/button";

export interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
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

export const Calendar = ({ value, onChange, className }: CalendarProps) => {
  const [viewDate, setViewDate] = useState(value || new Date());

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

  const isSelected = (day: number) => {
    return (
      value?.getDate() === day &&
      value?.getMonth() === currentMonth &&
      value?.getFullYear() === currentYear
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
  const totalCells = 42; // 6 rows of 7 days
  const nextDaysCount = totalCells - prevDays.length - currentDays.length;
  const nextDays = [];
  for (let i = 1; i <= nextDaysCount; i++) {
    nextDays.push(i);
  }

  return (
    <div className={cn("w-[280px] p-3", className)}>
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold">
          {MONTHS[currentMonth]} {currentYear}
        </h4>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={handlePrevMonth}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={handleNextMonth}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {DAYS.map((day) => (
          <div
            key={day}
            className="text-center text-[10px] font-medium uppercase tracking-tight text-muted-foreground"
          >
            {day[0]}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {prevDays.map((day, i) => (
          <div
            key={`prev-${i}`}
            className="flex h-8 items-center justify-center text-sm text-muted-foreground/30"
          >
            {day}
          </div>
        ))}

        {currentDays.map((day) => (
          <button
            key={day}
            onClick={() => onChange?.(new Date(currentYear, currentMonth, day))}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md text-sm transition-all hover:bg-accent hover:text-accent-foreground",
              isSelected(day) &&
                "bg-primary font-semibold text-primary-foreground hover:bg-primary hover:text-primary-foreground",
              isToday(day) &&
                !isSelected(day) &&
                "bg-accent/50 font-bold text-accent-foreground"
            )}
          >
            {day}
          </button>
        ))}

        {nextDays.map((day, i) => (
          <div
            key={`next-${i}`}
            className="flex h-8 items-center justify-center text-sm text-muted-foreground/30"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
