import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "@altrugenix/grid";

const Cell = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary/10 text-primary border-primary/20 flex items-center justify-center rounded border p-4 text-sm font-medium">
    {children}
  </div>
);

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A responsive CSS grid container with prop-based column count and gap sizing. Automatically adds responsive breakpoints (1 col on mobile → N cols on desktop).",
      },
    },
  },
  argTypes: {
    cols: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 12],
      description: "Number of columns (auto-responsive).",
      table: { category: "Layout" },
    },
    gap: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Gap between grid items.",
      table: { category: "Layout" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: "md",
    children: Array.from({ length: 6 }, (_, i) => (
      <Cell key={i}>Cell {i + 1}</Cell>
    )),
  },
};

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: "md",
    children: Array.from({ length: 8 }, (_, i) => (
      <Cell key={i}>Cell {i + 1}</Cell>
    )),
  },
};

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: "lg",
    children: Array.from({ length: 4 }, (_, i) => (
      <Cell key={i}>Cell {i + 1}</Cell>
    )),
  },
};

export const AllColumnCounts: Story = {
  render: () => (
    <div className="space-y-8">
      {([2, 3, 4, 6] as const).map((cols) => (
        <div key={cols}>
          <p className="mb-2 text-sm font-medium">cols={cols}</p>
          <Grid cols={cols} gap="sm">
            {Array.from({ length: cols * 2 }, (_, i) => (
              <Cell key={i}>{i + 1}</Cell>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Grid at 2, 3, 4, and 6 column counts. Resize the browser to see responsive breakpoints.",
      },
    },
  },
};
