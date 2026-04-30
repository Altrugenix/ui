import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "../components/layout/flex";

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Flex>;

const Swatch = ({ label }: { label: string }) => (
  <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg border text-xs font-medium">
    {label}
  </div>
);

export const Default: Story = {
  render: () => (
    <Flex gap="md" align="center">
      <Swatch label="A" />
      <Swatch label="B" />
      <Swatch label="C" />
    </Flex>
  ),
};

export const Direction: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium">Row (default)</p>
        <Flex direction="row" gap="sm">
          <Swatch label="1" />
          <Swatch label="2" />
          <Swatch label="3" />
        </Flex>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">Column</p>
        <Flex direction="col" gap="sm">
          <Swatch label="1" />
          <Swatch label="2" />
          <Swatch label="3" />
        </Flex>
      </div>
    </div>
  ),
};

export const JustifyAndAlign: Story = {
  render: () => (
    <div className="space-y-4">
      {(["start", "center", "end", "between"] as const).map((justify) => (
        <div key={justify}>
          <p className="text-muted-foreground mb-1 text-xs">
            justify=&quot;{justify}&quot;
          </p>
          <Flex
            justify={justify}
            align="center"
            gap="sm"
            className="rounded-lg border p-4"
          >
            <Swatch label="A" />
            <Swatch label="B" />
            <Swatch label="C" />
          </Flex>
        </div>
      ))}
    </div>
  ),
};
