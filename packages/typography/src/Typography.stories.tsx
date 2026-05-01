import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "@altrugenix/typography";

const meta: Meta<typeof Typography> = {
  title: "Typography/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A unified Typography component for handling headings, body text, and metadata. Automatically renders the appropriate semantic HTML tag (e.g. `<h1>` for `variant='h1'`).",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "caption", "overline"],
      description: "Semantic text style variant.",
      table: { category: "Appearance" },
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      description: "Font weight override.",
      table: { category: "Appearance" },
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
      description: "Text alignment.",
      table: { category: "Appearance" },
    },
    noWrap: {
      control: "boolean",
      description: "Truncate text with an ellipsis when it overflows.",
      table: { category: "Appearance" },
    },
    gutter: {
      control: "boolean",
      description: "Add bottom margin to the element.",
      table: { category: "Layout" },
    },
    as: {
      control: "text",
      description: "HTML element override (e.g. 'span', 'div').",
      table: { category: "Behavior" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: "body1",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-1">
        <Typography variant="overline" className="text-muted-foreground">Headings</Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
      </div>
      <div className="space-y-2">
        <Typography variant="overline" className="text-muted-foreground">Body Text</Typography>
        <Typography variant="body1">
          Body 1: The quick brown fox jumps over the lazy dog. This is the
          default text style for paragraphs and long-form content.
        </Typography>
        <Typography variant="body2">
          Body 2: The quick brown fox jumps over the lazy dog. This is a
          slightly smaller text style for supporting content.
        </Typography>
      </div>
      <div className="space-y-2">
        <Typography variant="overline" className="text-muted-foreground">Metadata</Typography>
        <div className="flex flex-col gap-1">
          <Typography variant="caption">
            Caption: Last updated 2 minutes ago
          </Typography>
          <Typography variant="overline">
            Overline: Premium Component
          </Typography>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A comprehensive showcase of all typography variants.",
      },
    },
  },
};

export const Customization: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography
        variant="h2"
        weight="black"
        align="center"
        className="text-primary italic"
      >
        Bold Center Italic
      </Typography>
      <Typography variant="body1" noWrap className="max-w-[200px] border p-2">
        This is a very long text that will eventually be truncated because
        noWrap is set to true and there is a max width.
      </Typography>
      <Typography variant="h4" gutter>
        With Gutter Bottom
      </Typography>
      <Typography variant="body1">
        The text above has a margin bottom because gutter is set to true.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates weight overrides, text truncation (`noWrap`), and bottom margins (`gutter`).",
      },
    },
  },
};
