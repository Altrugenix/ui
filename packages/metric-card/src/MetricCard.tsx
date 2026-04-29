import React from "react";
import { cn } from "@altrugenix/core";
import { Card } from "@altrugenix/card";
import { Sparkline } from "./Sparkline";
import {
  metricCardVariants,
  type MetricCardStylesProps,
} from "./metric-card.styles";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

export interface MetricCardProps
  extends React.HTMLAttributes<HTMLDivElement>, MetricCardStylesProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number | string;
    direction: "up" | "down" | "neutral";
    label?: string;
  };
  icon?: React.ReactNode;
  chartData?: number[];
  chartColor?: string;
}

export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  (
    {
      className,
      variant,
      size,
      status,
      title,
      value,
      description,
      trend,
      icon,
      chartData,
      chartColor,
      ...props
    },
    ref
  ) => {
    const trendColor =
      trend?.direction === "up"
        ? "text-success"
        : trend?.direction === "down"
          ? "text-destructive"
          : "text-muted-foreground";
    const TrendIcon =
      trend?.direction === "up"
        ? ArrowUpRight
        : trend?.direction === "down"
          ? ArrowDownRight
          : Minus;

    return (
      <Card
        ref={ref}
        className={cn(metricCardVariants({ variant, size, status, className }))}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
          </div>
          {icon && (
            <div className="bg-muted/50 text-muted-foreground group-hover:bg-muted group-hover:text-foreground rounded-full p-2 transition-colors">
              {icon}
            </div>
          )}
        </div>

        {(trend || description || chartData) && (
          <div className="mt-4 flex items-end justify-between gap-4">
            <div className="space-y-1.5">
              {trend && (
                <div
                  className={cn(
                    "flex items-center text-xs font-semibold",
                    trendColor
                  )}
                >
                  <TrendIcon className="mr-1 h-3.5 w-3.5" />
                  <span>{trend.value}</span>
                  {trend.label && (
                    <span className="text-muted-foreground ml-1 font-normal">
                      {trend.label}
                    </span>
                  )}
                </div>
              )}
              {description && (
                <p className="text-muted-foreground line-clamp-1 text-xs">
                  {description}
                </p>
              )}
            </div>

            {chartData && (
              <div className="max-w-[120px] flex-1">
                <Sparkline
                  data={chartData}
                  color={
                    chartColor ||
                    (trend?.direction === "up"
                      ? "hsl(var(--success))"
                      : trend?.direction === "down"
                        ? "hsl(var(--destructive))"
                        : "hsl(var(--primary))")
                  }
                  strokeWidth={2}
                  className="w-full opacity-80"
                />
              </div>
            )}
          </div>
        )}
      </Card>
    );
  }
);

MetricCard.displayName = "MetricCard";
