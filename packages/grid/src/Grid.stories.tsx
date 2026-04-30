import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "@altrugenix/grid";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem = ({ n }: { n: number }) => (
  <div className="bg-card flex h-24 items-center justify-center rounded-lg border text-sm font-medium shadow-sm">
    Item {n}
  </div>
);

export const Default: Story = {
  render: () => (
    <Grid cols={3} gap="md">
      {Array.from({ length: 6 }, (_, i) => (
        <GridItem key={i} n={i + 1} />
      ))}
    </Grid>
  ),
};

export const ColumnCounts: Story = {
  render: () => (
    <div className="space-y-8">
      {([2, 3, 4] as const).map((cols) => (
        <div key={cols}>
          <p className="mb-2 text-sm font-medium">cols={cols}</p>
          <Grid cols={cols} gap="sm">
            {Array.from({ length: cols * 2 }, (_, i) => (
              <GridItem key={i} n={i + 1} />
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};

export const GapSizes: Story = {
  render: () => (
    <div className="space-y-8">
      {(["none", "sm", "md", "lg", "xl"] as const).map((gap) => (
        <div key={gap}>
          <p className="mb-2 text-sm font-medium">gap=&quot;{gap}&quot;</p>
          <Grid cols={4} gap={gap}>
            {Array.from({ length: 4 }, (_, i) => (
              <GridItem key={i} n={i + 1} />
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};
