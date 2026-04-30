import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "~/components/composites/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Composites/Skeleton/Advanced",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;

export const AnimationVariants: StoryObj = {
  render: () => (
    <div className="max-w-sm space-y-8">
      <div className="space-y-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase">
          Pulse (Default)
        </h4>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" height={100} />
      </div>

      <div className="space-y-2">
        <h4 className="text-muted-foreground text-sm font-bold uppercase">
          Wave (Shimmer)
        </h4>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="rectangular" height={100} animation="wave" />
      </div>
    </div>
  ),
};

export const ComplexLoading: StoryObj = {
  render: () => (
    <div className="bg-card flex max-w-sm items-start gap-4 overflow-hidden rounded-xl border p-4">
      <Skeleton variant="circular" width={48} height={48} animation="wave" />
      <div className="flex-1 space-y-3">
        <div className="space-y-1">
          <Skeleton variant="text" width="60%" animation="wave" />
          <Skeleton variant="text" width="40%" height={10} animation="wave" />
        </div>
        <Skeleton variant="rounded" height={120} animation="wave" />
        <div className="flex gap-2">
          <Skeleton variant="rounded" width={80} height={32} animation="wave" />
          <Skeleton variant="rounded" width={80} height={32} animation="wave" />
        </div>
      </div>
    </div>
  ),
};
