import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "~/components/layout/stack";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Vertical: Story = {
  render: () => (
    <Stack spacing="md">
      <div className="bg-card rounded-lg border p-4 text-sm">First item</div>
      <div className="bg-card rounded-lg border p-4 text-sm">Second item</div>
      <div className="bg-card rounded-lg border p-4 text-sm">Third item</div>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="sm" align="center">
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </Stack>
  ),
};

export const SpacingSizes: Story = {
  render: () => (
    <div className="space-y-8">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((spacing) => (
        <div key={spacing}>
          <p className="mb-2 text-sm font-medium">
            spacing=&quot;{spacing}&quot;
          </p>
          <Stack spacing={spacing}>
            <div className="bg-primary/5 rounded border p-2 text-xs">A</div>
            <div className="bg-primary/5 rounded border p-2 text-xs">B</div>
            <div className="bg-primary/5 rounded border p-2 text-xs">C</div>
          </Stack>
        </div>
      ))}
    </div>
  ),
};
