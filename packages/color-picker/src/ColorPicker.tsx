import React, { useState } from "react";
import { cn } from "@altrugenix/core";
import { Input } from "@altrugenix/input";
import { Popover } from "@altrugenix/popover";
import { Check, Pipette } from "lucide-react";

export interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  presets?: string[];
  className?: string;
  disabled?: boolean;
}

const DEFAULT_PRESETS = [
  "#000000",
  "#ffffff",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#9e9e9e",
  "#607d8b",
];

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  onChange,
  presets = DEFAULT_PRESETS,
  className,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    if (/^#[0-9A-F]{6}$/i.test(val)) {
      onChange(val);
    }
  };

  const handlePresetSelect = (color: string) => {
    setInputValue(color);
    onChange(color);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Popover
        trigger={
          <button
            disabled={disabled}
            className={cn(
              "border-input h-9 w-9 shrink-0 rounded-md border shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50",
              "ring-offset-background focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            )}
            style={{ backgroundColor: value }}
            title="Select color"
          >
            <span className="sr-only">Toggle Color Picker</span>
          </button>
        }
      >
        <div className="space-y-3">
          <div className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
            Presets
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {presets.map((color) => (
              <button
                key={color}
                className={cn(
                  "group relative h-6 w-6 rounded-sm border border-black/10 transition-transform hover:z-10 hover:scale-125",
                  value === color && "ring-primary ring-2 ring-offset-1"
                )}
                style={{ backgroundColor: color }}
                onClick={() => handlePresetSelect(color)}
              >
                {value === color && (
                  <Check
                    className={cn(
                      "absolute inset-0 m-auto h-3 w-3",
                      color.toLowerCase() === "#ffffff"
                        ? "text-black"
                        : "text-white"
                    )}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="border-border space-y-2 border-t pt-2">
            <div className="flex items-center gap-2">
              <Pipette className="text-muted-foreground h-4 w-4" />
              <div className="text-muted-foreground text-xs font-medium">
                Custom Hex
              </div>
            </div>
            <Input
              value={inputValue}
              onChange={handleInputChange}
              className="h-8 font-mono text-xs uppercase"
              placeholder="#000000"
            />
          </div>
        </div>
      </Popover>

      <Input
        value={inputValue}
        onChange={handleInputChange}
        disabled={disabled}
        className="h-9 font-mono uppercase"
        placeholder="#000000"
      />
    </div>
  );
};
