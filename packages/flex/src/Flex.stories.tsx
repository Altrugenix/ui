import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "@altrugenix/flex";

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary/10 text-primary border-primary/20 rounded border px-4 py-2 text-sm font-medium">
    {children}
  </div>
);

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A flexbox container with prop-driven direction, alignment, justification, gap, and wrap controls. Eliminates the need for repetitive flex utility classes.",
      },
    },
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "col", "row-reverse", "col-reverse"],
      description: "Flex direction.",
      table: { category: "Layout" },
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
      description: "Cross-axis alignment.",
      table: { category: "Layout" },
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
      description: "Main-axis justification.",
      table: { category: "Layout" },
    },
    wrap: {
      control: "boolean",
      description: "Allow items to wrap to the next line.",
      table: { category: "Layout" },
    },
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl"],
      description: "Gap between items.",
      table: { category: "Layout" },
    },
    inline: {
      control: "boolean",
      description: "Renders as inline-flex instead of flex.",
      table: { category: "Layout" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    gap: "md",
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: "between",
    align: "center",
    children: (
      <>
        <Box>Left</Box>
        <Box>Center</Box>
        <Box>Right</Box>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: "col",
    gap: "sm",
    children: (
      <>
        <Box>Row 1</Box>
        <Box>Row 2</Box>
        <Box>Row 3</Box>
      </>
    ),
  },
};

export const WrapDemo: Story = {
  render: () => (
    <Flex gap="sm" wrap>
      {Array.from({ length: 12 }, (_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Wrapping flex — items flow to the next line when the container width is exceeded.",
      },
    },
  },
};

export const Centered: Story = {
  render: () => (
    <Flex
      justify="center"
      align="center"
      className="border-border h-48 rounded-lg border-2 border-dashed"
    >
      <Box>Centered content</Box>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story: "Using justify and align to perfectly center content.",
      },
    },
  },
};
