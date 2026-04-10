import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spacer } from "~/components/layout/spacer";

const meta: Meta<typeof Spacer> = {
  title: "Layout/Spacer",
  component: Spacer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const VerticalSizes: Story = {
  render: () => (
    <div>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <div key={size}>
          <div className="rounded border bg-card p-2 text-xs">
            Content above (size=&quot;{size}&quot;)
          </div>
          <Spacer size={size} className="bg-primary/10" />
          <div className="rounded border bg-card p-2 text-xs">
            Content below
          </div>
          <Spacer size="lg" />
        </div>
      ))}
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="flex items-center">
      <div className="rounded border bg-card p-3 text-xs">Left</div>
      <Spacer axis="horizontal" size="xl" className="bg-primary/10" />
      <div className="rounded border bg-card p-3 text-xs">Right</div>
    </div>
  ),
};
