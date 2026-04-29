import React, { useState, useRef, useEffect } from "react";
import { cn } from "@altrugenix/core";
import { Input } from "@altrugenix/input";

export interface AutocompleteProps extends Omit<
  React.ComponentProps<typeof Input>,
  "onChange" | "value"
> {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Autocomplete = React.forwardRef<
  HTMLInputElement,
  AutocompleteProps
>(({ className, options, value, onChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(() => value ?? "");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <Input
        className={cn(className)}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        ref={ref}
        {...props}
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border shadow-md outline-none">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="hover:bg-accent hover:text-accent-foreground relative flex w-full cursor-pointer select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
Autocomplete.displayName = "Autocomplete";
