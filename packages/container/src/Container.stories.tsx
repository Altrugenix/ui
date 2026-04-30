import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "@altrugenix/container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container className="bg-card rounded-lg border p-8">
      <h2 className="text-lg font-semibold">Default Container (XL)</h2>
      <p className="text-muted-foreground mt-2 text-sm">
        Content is centered and constrained to max-w-screen-xl by default.
      </p>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
        <Container
          key={size}
          size={size}
          className="bg-card/50 rounded border p-4"
        >
          <p className="text-sm font-medium">size=&quot;{size}&quot;</p>
        </Container>
      ))}
    </div>
  ),
};

export const NotCentered: Story = {
  args: {
    centered: false,
    size: "md",
    className: "rounded-lg border bg-card p-6",
    children: (
      <p className="text-muted-foreground text-sm">
        This container is left-aligned (centered=false).
      </p>
    ),
  },
};
