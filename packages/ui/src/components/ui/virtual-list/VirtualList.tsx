import React, { useRef, useState, useMemo, useEffect } from "react";
import { cn } from "~/lib/utils/cn";

export interface VirtualListProps<T> {
  items: T[];
  height: number;
  rowHeight: number;
  renderRow: (item: T, index: number) => React.ReactNode;
  overscan?: number;
  className?: string;
  onScroll?: (scrollTop: number) => void;
}

export function VirtualList<T>({
  items,
  height,
  rowHeight,
  renderRow,
  overscan = 5,
  className,
  onScroll,
}: VirtualListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollTop = e.currentTarget.scrollTop;
    setScrollTop(currentScrollTop);
    onScroll?.(currentScrollTop);
  };

  const totalHeight = items.length * rowHeight;

  const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + height) / rowHeight) + overscan
  );

  const visibleItems = useMemo(() => {
    const rows = [];
    for (let i = startIndex; i <= endIndex; i++) {
      rows.push({
        item: items[i],
        index: i,
        top: i * rowHeight,
      });
    }
    return rows;
  }, [items, startIndex, endIndex, rowHeight]);

  // Adjust scroll if items list changes significantly
  useEffect(() => {
    if (containerRef.current) {
      const maxScroll = Math.max(0, totalHeight - height);
      if (containerRef.current.scrollTop > maxScroll) {
        containerRef.current.scrollTop = maxScroll;
      }
    }
  }, [items.length, totalHeight, height]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className={cn("scrollbar-thin relative overflow-auto", className)}
      style={{ height }}
    >
      <div style={{ height: totalHeight, width: "100%", position: "relative" }}>
        {visibleItems.map(({ item, index, top }) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: rowHeight,
              transform: `translateY(${top}px)`,
            }}
          >
            {renderRow(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
