import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { cn } from "~/lib/utils/cn";
import { IconButton } from "../button";
import { motion, AnimatePresence } from "framer-motion";

export interface SpeedDialAction {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export interface SpeedDialProps {
  /** The main icon when closed */
  icon?: React.ReactNode;
  /** The main icon when open */
  openIcon?: React.ReactNode;
  /** List of sub-actions */
  actions: SpeedDialAction[];
  /** Direction of expansion */
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

/**
 * A floating action button that displays a series of sub-actions when clicked.
 */
export const SpeedDial: React.FC<SpeedDialProps> = ({
  icon = <Plus className="h-6 w-6" />,
  openIcon = <X className="h-6 w-6" />,
  actions,
  direction = "up",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const directionClasses = {
    up: "flex-col-reverse bottom-full mb-3",
    down: "flex-col top-full mt-3",
    left: "flex-row-reverse right-full mr-3",
    right: "flex-row left-full ml-3",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
    >
      <IconButton
        size="lg"
        radius="full"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-14 w-14 shadow-xl transition-transform duration-200",
          isOpen && "rotate-0"
        )}
      >
        {isOpen ? openIcon : icon}
      </IconButton>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className={cn(
              "absolute flex items-center gap-3",
              directionClasses[direction]
            )}
          >
            {actions.map((action, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-2"
              >
                <span className="invisible absolute right-full mr-2 scale-75 whitespace-nowrap rounded bg-muted px-2 py-1 text-xs font-bold text-muted-foreground opacity-0 transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100">
                  {action.label}
                </span>
                <IconButton
                  size="md"
                  radius="full"
                  variant="secondary"
                  onClick={() => {
                    action.onClick();
                    setIsOpen(false);
                  }}
                  className="shadow-md hover:shadow-lg"
                >
                  {action.icon}
                </IconButton>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

SpeedDial.displayName = "SpeedDial";
