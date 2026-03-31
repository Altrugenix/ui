import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDom from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command } from "lucide-react";
import { cn } from "~/lib/utils/cn";

export interface CommandPaletteItem {
  id: string;
  label: string;
  onSelect: () => void;
  icon?: React.ReactNode;
  shortcut?: string[];
  group?: string;
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  items: CommandPaletteItem[];
  placeholder?: string;
}

/**
 * A premium Command Palette (⌘K) component with keyboard navigation and fuzzy-like search.
 */
export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  items,
  placeholder = "Search components, docs, or actions...",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredItems = React.useMemo(
    () =>
      items.filter(
        (item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.group &&
            item.group.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    [items, searchQuery]
  );

  const groupedItems = React.useMemo(
    () =>
      filteredItems.reduce(
        (acc, item) => {
          const groupName = item.group || "Other";
          if (!acc[groupName]) {
            acc[groupName] = [];
          }
          acc[groupName].push(item);
          return acc;
        },
        {} as Record<string, CommandPaletteItem[]>
      ),
    [filteredItems]
  );

  // Flattened items for keyboard navigation
  const flatFilteredItems = React.useMemo(
    () => Object.values(groupedItems).flat(),
    [groupedItems]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setActiveIndex(0);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % flatFilteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(
          (prev) =>
            (prev - 1 + flatFilteredItems.length) % flatFilteredItems.length
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (flatFilteredItems[activeIndex]) {
          flatFilteredItems[activeIndex].onSelect();
          onClose();
        }
      }
    },
    [isOpen, flatFilteredItems, activeIndex, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Scroll active item into view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.children[
        activeIndex
      ] as HTMLElement;
      if (activeEl) {
        // Since we have groups (h3), simple indexing might not work perfectly with children.
        // Actually, let's find the active element by data attribute.
        const target = scrollContainerRef.current.querySelector(
          `[data-active="true"]`
        ) as HTMLElement;
        if (target) {
          target.scrollIntoView({ block: "nearest" });
        }
      }
    }
  }, [activeIndex]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Palette container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border bg-background/80 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl dark:ring-white/10"
          >
            {/* Search Input */}
            <div className="flex items-center border-b px-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                autoFocus
                className="flex h-14 w-full bg-transparent px-4 py-3 text-lg outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="hidden items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
                <span className="text-xs">ESC</span>
              </div>
            </div>

            {/* Items List */}
            <div
              ref={scrollContainerRef}
              className="scrollbar-thin scrollbar-thumb-muted-foreground/20 max-h-[50vh] overflow-y-auto p-2"
            >
              {flatFilteredItems.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  No results found for{" "}
                  <span className="font-semibold text-foreground">
                    "{searchQuery}"
                  </span>
                </div>
              ) : (
                Object.entries(groupedItems).map(([groupName, groupItems]) => (
                  <div key={groupName} className="mb-2 last:mb-0">
                    <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {groupName}
                    </h3>
                    {groupItems.map((item) => {
                      const overallIndex = flatFilteredItems.indexOf(item);
                      const isActive = activeIndex === overallIndex;

                      return (
                        <div
                          key={item.id}
                          data-active={isActive}
                          onClick={() => {
                            item.onSelect();
                            onClose();
                          }}
                          className={cn(
                            "group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 transition-all",
                            isActive
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          <div
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-md border text-lg transition-colors",
                              isActive
                                ? "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground"
                                : "border-border bg-muted group-hover:border-accent-foreground/20 group-hover:bg-accent-foreground/5"
                            )}
                          >
                            {item.icon || <Command className="h-4 w-4" />}
                          </div>
                          <div className="flex flex-1 items-center justify-between">
                            <span className="font-medium">{item.label}</span>
                            {item.shortcut && (
                              <div className="flex items-center gap-1">
                                {item.shortcut.map((key, i) => (
                                  <kbd
                                    key={i}
                                    className={cn(
                                      "min-w-[1.25rem] rounded border px-1 text-center text-[10px] font-semibold uppercase transition-colors",
                                      isActive
                                        ? "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground"
                                        : "border-border bg-muted text-muted-foreground"
                                    )}
                                  >
                                    {key}
                                  </kbd>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t bg-muted/30 px-4 py-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 italic">
                  <kbd className="rounded border bg-background px-1 not-italic">
                    ↑↓
                  </kbd>{" "}
                  Navigate
                </span>
                <span className="flex items-center gap-1 italic">
                  <kbd className="rounded border bg-background px-1 not-italic">
                    Enter
                  </kbd>{" "}
                  Select
                </span>
              </div>
              <div className="flex items-center gap-1">
                Powered by{" "}
                <span className="font-bold text-foreground/80">Altrugenix</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (typeof document === "undefined") return null;

  return ReactDom.createPortal(modalContent, document.body);
};

CommandPalette.displayName = "CommandPalette";
