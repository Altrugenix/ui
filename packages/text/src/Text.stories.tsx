import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "@altrugenix/text";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A polymorphic text component for body copy. Renders as `<p>` by default but can be changed to any element via the `as` prop. Provides consistent line-height and spacing.",
      },
    },
  },
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "div", "label", "small"],
      description: "The HTML element to render as.",
      table: { category: "Behavior" },
    },
    children: {
      description: "Text content.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children:
      "The king had stay'd his hand. The sky was clear, and the world was young. In the silence of the night, a single star shone brighter than the rest.",
  },
};

export const Muted: Story = {
  args: {
    className: "text-muted-foreground",
    children: "This is a muted text description.",
  },
  parameters: {
    docs: {
      description: {
        story: "Muted text using the `text-muted-foreground` utility for secondary content.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    className: "text-lg font-semibold",
    children: "This is large, semi-bold text.",
  },
};

export const Small: Story = {
  args: {
    className: "text-sm leading-none",
    children: "This is small text for fine print.",
  },
};

export const AsSpan: Story = {
  args: {
    as: "span",
    children: "This renders as an inline <span> element.",
    className: "text-primary font-medium",
  },
  parameters: {
    docs: {
      description: {
        story: "Using the `as` prop to render as an inline `<span>` instead of a block `<p>`.",
      },
    },
  },
};

export const Prose: Story = {
  render: () => (
    <article className="max-w-lg space-y-0">
      <Text className="text-lg font-semibold">Introduction</Text>
      <Text>
        The design system provides a set of reusable components and tokens that
        help teams build consistent, accessible, and beautiful user interfaces.
      </Text>
      <Text>
        Each component is designed to be composable, themeable, and responsive
        out of the box. They follow WAI-ARIA guidelines for maximum
        accessibility.
      </Text>
      <Text className="text-muted-foreground text-sm">
        Last updated: May 2026
      </Text>
    </article>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple Text components used together in an article layout — demonstrates automatic spacing between paragraphs.",
      },
    },
  },
};
