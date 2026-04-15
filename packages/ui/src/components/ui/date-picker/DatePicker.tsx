import { useState } from "react";
import { cn } from "~/lib/utils/cn";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover } from "../../overlays/popover/Popover";
import { Button } from "@altrugenix/button";
import { Calendar } from "./Calendar";

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  className?: string;
}

export const DatePicker = ({
  value,
  onChange,
  placeholder = "Pick a date",
  className,
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
      className="p-0"
      trigger={
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !value && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? formatDate(value) : <span>{placeholder}</span>}
        </Button>
      }
    >
      <Calendar
        value={value}
        onChange={(date) => {
          onChange?.(date);
          setIsOpen(false);
        }}
      />
    </Popover>
  );
};
