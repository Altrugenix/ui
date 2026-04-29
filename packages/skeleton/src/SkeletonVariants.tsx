import React from "react";
import { cn } from "@altrugenix/core";
import { Skeleton } from "./Skeleton";

/**
 * Skeleton Card — Ideal for layout mockups and content feeds.
 */
export const CardSkeleton = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "glass shadow-soft flex flex-col gap-4 rounded-xl p-5",
      className
    )}
  >
    <div className="flex items-center gap-3">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton variant="text" width="60%" height={14} />
        <Skeleton
          variant="text"
          width="40%"
          height={10}
          className="opacity-60"
        />
      </div>
    </div>
    <Skeleton
      variant="rectangular"
      height={160}
      className="w-full rounded-lg"
    />
    <div className="flex flex-col gap-2">
      <Skeleton variant="text" width="90%" height={12} />
      <Skeleton variant="text" width="75%" height={12} />
    </div>
  </div>
);

/**
 * Skeleton List — Represents a list of items or menu options.
 */
export const ListSkeleton = ({ rows = 5 }: { rows?: number }) => (
  <div className="flex flex-col gap-6">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex items-center gap-4">
        <Skeleton
          variant="rounded"
          width={48}
          height={48}
          className="shrink-0"
        />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton variant="text" width="40%" height={14} />
          <Skeleton
            variant="text"
            width="70%"
            height={10}
            className="opacity-60"
          />
        </div>
        <Skeleton
          variant="text"
          width={60}
          height={10}
          className="shrink-0 opacity-40"
        />
      </div>
    ))}
  </div>
);

/**
 * Skeleton Metric — For dashboard counters and data points.
 */
export const MetricSkeleton = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "glass shadow-soft flex flex-col gap-3 rounded-xl p-6",
      className
    )}
  >
    <Skeleton variant="text" width="45%" height={12} className="opacity-70" />
    <Skeleton variant="text" width="80%" height={32} />
    <div className="flex items-center gap-2">
      <Skeleton
        variant="rectangular"
        width={40}
        height={16}
        className="bg-primary/20 rounded-full"
      />
      <Skeleton variant="text" width={80} height={10} className="opacity-50" />
    </div>
  </div>
);

/**
 * Skeleton Table — A representation of a data table loading state.
 */
export const TableSkeleton = ({
  rows = 5,
  columns = 4,
}: {
  rows?: number;
  columns?: number;
}) => (
  <div className="w-full space-y-4">
    <div className="flex gap-4 border-b pb-4">
      {Array.from({ length: columns }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width="15%"
          height={12}
          className="opacity-70"
        />
      ))}
    </div>
    {Array.from({ length: rows }).map((_, j) => (
      <div key={j} className="flex gap-4 py-2">
        {Array.from({ length: columns }).map((_, k) => (
          <Skeleton key={k} variant="text" width="20%" height={14} />
        ))}
      </div>
    ))}
  </div>
);
