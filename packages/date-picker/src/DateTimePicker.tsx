import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@altrugenix/core";

export interface DateTimePickerProps {
  value?: string; // YYYY-MM-DDTHH:mm
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * A combined picker for selecting both date and time values.
 */
export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  onChange,
  className,
}) => {
  const [dateTime, setDateTime] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={cn("relative flex items-center", className)}>
      <input
        type="datetime-local"
        value={dateTime}
        onChange={handleChange}
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <CalendarIcon className="text-muted-foreground pointer-events-none absolute right-10 h-4 w-4" />
      <Clock className="text-muted-foreground pointer-events-none absolute right-3 h-4 w-4" />
    </div>
  );
};

DateTimePicker.displayName = "DateTimePicker";
