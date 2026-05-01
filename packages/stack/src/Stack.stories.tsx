import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@altrugenix/stack";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A one-dimensional layout component for stacking elements vertically or horizontally with consistent spacing. A simpler alternative to Flex for linear layouts.",
      },
    },
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Stack direction.",
      table: { category: "Layout" },
    },
    spacing: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Gap between items.",
      table: { category: "Layout" },
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch"],
      description: "Cross-axis alignment.",
      table: { category: "Layout" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-card rounded border p-3 text-sm">{children}</div>
);

export const Vertical: Story = {
  args: {
    spacing: "md",
    children: (
      <>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    spacing: "md",
    children: (
      <>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </>
    ),
  },
};

export const AllSpacings: Story = {
  render: () => (
    <div className="space-y-8">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((spacing) => (
        <div key={spacing}>
          <p className="mb-2 text-sm font-medium">
            spacing=&quot;{spacing}&quot;
          </p>
          <Stack direction="horizontal" spacing={spacing}>
            <Item>A</Item>
            <Item>B</Item>
            <Item>C</Item>
          </Stack>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All five spacing values compared side by side.",
      },
    },
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <Stack direction="horizontal" spacing="sm" align="center">
      <Button>Save</Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="ghost">Reset</Button>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A horizontal button group — one of the most common Stack use cases.",
      },
    },
  },
};
