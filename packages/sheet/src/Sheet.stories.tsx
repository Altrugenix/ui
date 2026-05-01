import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sheet } from "@altrugenix/sheet";

const meta: Meta<typeof Sheet> = {
  title: "Layout/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A foundational surface component for grouping content with a specific background variant and elevation. Supports outlined, soft, solid, and plain styles.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "soft", "solid", "plain"],
      description: "Visual style of the sheet surface.",
      table: { category: "Appearance" },
    },
    elevation: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
      description: "Box shadow depth.",
      table: { category: "Appearance" },
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
      description: "Internal padding.",
      table: { category: "Appearance" },
    },
    as: {
      control: "select",
      options: ["div", "section", "article", "aside"],
      description: "HTML element to render as.",
      table: { category: "Behavior" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {
    children: (
      <div className="space-y-2">
        <h3 className="font-bold">Basic Sheet</h3>
        <p className="text-muted-foreground text-sm">
          This is a foundational surface component for grouping content.
        </p>
      </div>
    ),
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Sheet variant="outlined">
        <p className="text-sm font-medium">Outlined</p>
      </Sheet>
      <Sheet variant="soft">
        <p className="text-sm font-medium">Soft</p>
      </Sheet>
      <Sheet variant="solid">
        <p className="text-sm font-medium">Solid</p>
      </Sheet>
      <Sheet variant="plain">
        <p className="text-sm font-medium">Plain</p>
      </Sheet>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All four sheet variants side by side.",
      },
    },
  },
};

export const Elevations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      {(["xs", "sm", "md", "lg"] as const).map((elev) => (
        <Sheet
          key={elev}
          variant="solid"
          elevation={elev}
          className="flex h-24 w-24 items-center justify-center"
        >
          <span className="font-mono text-sm">{elev}</span>
        </Sheet>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Four elevation levels from extra-small to large shadow.",
      },
    },
  },
};

export const ContentCard: Story = {
  render: () => (
    <Sheet variant="outlined" className="max-w-sm">
      <h3 className="mb-2 text-lg font-semibold">Sheet as a Card</h3>
      <p className="text-muted-foreground text-sm">
        Sheets can serve as general-purpose content containers. Use variant and
        elevation props to match your design intent.
      </p>
    </Sheet>
  ),
  parameters: {
    docs: {
      description: {
        story: "A sheet used as a simple content card.",
      },
    },
  },
};
