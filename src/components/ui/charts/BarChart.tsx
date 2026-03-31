import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface BarChartProps {
  data: ChartDataPoint[];
  height?: number;
  className?: string;
  showLabels?: boolean;
}

export const BarChart = ({
  data,
  height = 200,
  className,
  showLabels = true,
}: BarChartProps) => {
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  return (
    <div
      className={cn("flex w-full items-end gap-2", className)}
      style={{ height }}
    >
      {data.map((point, index) => {
        const percentage = (point.value / maxValue) * 100;

        return (
          <div
            key={index}
            className="group flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div className="relative flex h-full w-full items-end justify-center">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${percentage}%` }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={cn(
                  "relative w-full max-w-[40px] rounded-t-md",
                  point.color || "bg-primary"
                )}
              >
                <div className="absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border bg-background px-2 py-1 text-xs font-bold opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                  {point.value}
                </div>
              </motion.div>
            </div>
            {showLabels && (
              <span className="w-full truncate text-center text-[10px] uppercase tracking-wider text-muted-foreground">
                {point.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
