import React, { useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "~/lib/utils/cn";

export interface TimePickerProps {
  value?: string; // HH:mm
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * A specialized picker for selecting time values.
 */
export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  className,
}) => {
  const [time, setTime] = useState(value || "12:00");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <input
        type="time"
        value={time}
        onChange={handleChange}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <Clock className="pointer-events-none absolute right-3 h-4 w-4 text-muted-foreground" />
    </div>
  );
};

TimePicker.displayName = "TimePicker";
