import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sheet } from "~/components/layout/sheet";

const meta: Meta<typeof Sheet> = {
  title: "Layout/Sheet",
  component: Sheet,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-2">
        <h3 className="font-bold">Basic Sheet</h3>
        <p className="text-sm text-muted-foreground">
          This is a foundational surface component for grouping content.
        </p>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Sheet variant="outlined">Outlined Sheet</Sheet>
      <Sheet variant="soft">Soft Sheet</Sheet>
      <Sheet variant="solid">Solid Sheet</Sheet>
      <Sheet variant="plain">Plain Sheet</Sheet>
    </div>
  ),
};

export const Elevations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      <Sheet
        variant="solid"
        elevation="xs"
        className="flex h-24 w-24 items-center justify-center"
      >
        xs
      </Sheet>
      <Sheet
        variant="solid"
        elevation="sm"
        className="flex h-24 w-24 items-center justify-center"
      >
        sm
      </Sheet>
      <Sheet
        variant="solid"
        elevation="md"
        className="flex h-24 w-24 items-center justify-center"
      >
        md
      </Sheet>
      <Sheet
        variant="solid"
        elevation="lg"
        className="flex h-24 w-24 items-center justify-center"
      >
        lg
      </Sheet>
    </div>
  ),
};
