import React from "react";
import { cn } from "~/lib/utils/cn";
import { VirtualList } from "../virtual-list/VirtualList";

export interface GridColumn<T> {
  header: string;
  accessorKey: keyof T;
  width?: number | string;
  cell?: (item: T) => React.ReactNode;
}

export interface DataGridProps<T> {
  columns: GridColumn<T>[];
  data: T[];
  height?: number;
  rowHeight?: number;
  headerHeight?: number;
  className?: string;
}

/**
 * A virtualization-powered grid for handling large datasets with fixed headers.
 */
export function DataGrid<T>({
  columns,
  data,
  height = 400,
  rowHeight = 48,
  headerHeight = 44,
  className,
}: DataGridProps<T>) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border bg-card",
        className
      )}
      style={{ height }}
    >
      {/* Header */}
      <div
        className="flex border-b bg-muted/50"
        style={{ height: headerHeight }}
      >
        {columns.map((col, i) => (
          <div
            key={i}
            className="flex items-center px-4 text-xs font-bold uppercase text-muted-foreground"
            style={{
              width: col.width || "auto",
              flex: col.width ? "0 0 auto" : "1",
            }}
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* Body with Virtualization */}
      <div className="flex-1 overflow-hidden">
        <VirtualList
          items={data}
          height={height - headerHeight}
          rowHeight={rowHeight}
          renderRow={(item) => (
            <div className="flex h-full items-center border-b transition-colors last:border-0 hover:bg-muted/30">
              {columns.map((col, i) => (
                <div
                  key={i}
                  className="truncate px-4 text-sm"
                  style={{
                    width: col.width || "auto",
                    flex: col.width ? "0 0 auto" : "1",
                  }}
                >
                  {col.cell ? col.cell(item) : String(item[col.accessorKey])}
                </div>
              ))}
            </div>
          )}
        />
      </div>
    </div>
  );
}

DataGrid.displayName = "DataGrid";
