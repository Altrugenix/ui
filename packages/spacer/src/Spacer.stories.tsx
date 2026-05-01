import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spacer } from "@altrugenix/spacer";

const meta: Meta<typeof Spacer> = {
  title: "Layout/Spacer",
  component: Spacer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "An invisible layout utility that adds consistent whitespace between elements. Supports six sizes and both vertical (default) and horizontal axes.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Amount of spacing.",
      table: { category: "Appearance" },
    },
    axis: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Direction of spacing.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const VerticalSizes: Story = {
  render: () => (
    <div>
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <div key={size}>
          <div className="bg-card rounded border p-2 text-xs">
            Content above (size=&quot;{size}&quot;)
          </div>
          <Spacer size={size} className="bg-primary/10" />
          <div className="bg-card rounded border p-2 text-xs">
            Content below
          </div>
          <Spacer size="lg" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All six vertical spacer sizes shown with a tinted background for visibility. In production, the spacer is invisible.",
      },
    },
  },
};

export const Horizontal: Story = {
  render: () => (
    <div className="flex items-center">
      <div className="bg-card rounded border p-3 text-xs">Left</div>
      <Spacer axis="horizontal" size="xl" className="bg-primary/10" />
      <div className="bg-card rounded border p-3 text-xs">Right</div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A horizontal spacer used to add gap between inline elements.",
      },
    },
  },
};

export const InForm: Story = {
  render: () => (
    <div className="max-w-sm">
      <div className="bg-card rounded border p-3 text-sm">Form Field 1</div>
      <Spacer size="md" />
      <div className="bg-card rounded border p-3 text-sm">Form Field 2</div>
      <Spacer size="md" />
      <div className="bg-card rounded border p-3 text-sm">Form Field 3</div>
      <Spacer size="xl" />
      <div className="bg-primary text-primary-foreground rounded p-3 text-center text-sm font-medium">
        Submit
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Spacers used for consistent vertical rhythm in a form layout — smaller gaps between fields, larger gap before the submit button.",
      },
    },
  },
};
