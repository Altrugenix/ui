import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@altrugenix/core";
import { Button } from "@altrugenix/button";
import { Checkbox } from "@altrugenix/checkbox";
import { Card } from "@altrugenix/card";
import { List, ListItem } from "@altrugenix/list";

export interface TransferListProps {
  /** Items available to be selected */
  items: string[];
  /** Initially selected items */
  initialSelected?: string[];
  /** Labels for the two panels */
  titles?: [string, string];
  /** Callback when selection changes */
  onChange?: (left: string[], right: string[]) => void;
  className?: string;
}

/**
 * A dual-list selection component for moving items between two sets (Available vs Selected).
 */
export const TransferList: React.FC<TransferListProps> = ({
  items,
  initialSelected = [],
  titles = ["Available", "Selected"],
  onChange,
  className,
}) => {
  const [left, setLeft] = useState(
    items.filter((item) => !initialSelected.includes(item))
  );
  const [right, setRight] = useState(initialSelected);
  const [checked, setChecked] = useState<string[]>([]);

  const leftChecked = left.filter((value) => checked.indexOf(value) !== -1);
  const rightChecked = right.filter((value) => checked.indexOf(value) !== -1);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const moveRight = () => {
    const newRight = right.concat(leftChecked);
    const newLeft = left.filter((v) => !leftChecked.includes(v));
    setRight(newRight);
    setLeft(newLeft);
    setChecked(checked.filter((v) => !leftChecked.includes(v)));
    onChange?.(newLeft, newRight);
  };

  const moveLeft = () => {
    const newLeft = left.concat(rightChecked);
    const newRight = right.filter((v) => !rightChecked.includes(v));
    setLeft(newLeft);
    setRight(newRight);
    setChecked(checked.filter((v) => !rightChecked.includes(v)));
    onChange?.(newLeft, newRight);
  };

  const customList = (title: string, items: string[]) => (
    <Card className="flex h-64 w-full flex-col overflow-hidden">
      <div className="bg-muted/50 flex items-center justify-between border-b px-4 py-2">
        <span className="text-sm font-bold">{title}</span>
        <span className="text-muted-foreground text-xs">
          {items.length} items
        </span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <List>
          {items.map((value) => (
            <ListItem
              key={value}
              onClick={handleToggle(value)}
              leading={<Checkbox checked={checked.indexOf(value) !== -1} readOnly />}
              className="hover:bg-muted/50 cursor-pointer py-1.5 transition-colors"
            >
              <span className="text-sm">{value}</span>
            </ListItem>
          ))}
        </List>
      </div>
    </Card>
  );

  return (
    <div
      className={cn("flex flex-col items-center gap-4 sm:flex-row", className)}
    >
      {customList(titles[0], left)}

      <div className="flex flex-row gap-2 sm:flex-col">
        <Button
          variant="outline"
          size="sm"
          onClick={moveRight}
          disabled={leftChecked.length === 0}
          aria-label="move selected right"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={moveLeft}
          disabled={rightChecked.length === 0}
          aria-label="move selected left"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      {customList(titles[1], right)}
    </div>
  );
};

TransferList.displayName = "TransferList";
