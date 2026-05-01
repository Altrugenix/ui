import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "@altrugenix/container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A responsive wrapper that constrains content width to a maximum size preset. Supports six max-width breakpoints and optional horizontal centering.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
      description: "Maximum width preset.",
      table: { category: "Appearance" },
    },
    centered: {
      control: "boolean",
      description: "Center the container horizontally with auto margins.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    size: "lg",
    centered: true,
    children: (
      <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 text-center text-sm">
        Content constrained to <code className="font-mono">lg</code> width
      </div>
    ),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(["sm", "md", "lg", "xl", "2xl", "full"] as const).map((size) => (
        <Container key={size} size={size} centered>
          <div className="rounded border bg-muted/20 p-4 text-center text-sm font-mono">
            size=&quot;{size}&quot;
          </div>
        </Container>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All six container sizes shown stacked — each one is wider than the previous. Resize your browser to see the difference.",
      },
    },
  },
};
