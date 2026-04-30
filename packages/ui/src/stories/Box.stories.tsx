import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "../components/layout/box";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    padding: "md",
    className: "rounded-lg border bg-card",
    children: (
      <p className="text-muted-foreground text-sm">
        The Box is the most fundamental layout primitive. It renders a div with
        optional padding presets.
      </p>
    ),
  },
};

export const PaddingSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(["none", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Box key={size} padding={size} className="bg-card rounded-lg border">
          <p className="text-sm font-medium">padding=&quot;{size}&quot;</p>
        </Box>
      ))}
    </div>
  ),
};

export const CustomElement: Story = {
  render: () => (
    <Box as="section" padding="lg" className="bg-primary/5 rounded-lg border">
      <h2 className="text-lg font-semibold">Rendered as &lt;section&gt;</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Box can render as any HTML element using the &quot;as&quot; prop.
      </p>
    </Box>
  ),
};
