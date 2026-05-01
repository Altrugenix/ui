import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "@altrugenix/heading";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A semantic heading component rendering h1–h6 elements with consistent typographic styling. Use the `level` prop to control the heading hierarchy.",
      },
    },
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
      description: "The heading level (1–6), determines the HTML element and size.",
      table: { category: "Appearance" },
    },
    children: {
      description: "The heading text content.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 1,
    children: "This is a Heading Level 1",
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading 1 — Page Title</Heading>
      <Heading level={2}>Heading 2 — Section</Heading>
      <Heading level={3}>Heading 3 — Subsection</Heading>
      <Heading level={4}>Heading 4 — Group Title</Heading>
      <Heading level={5}>Heading 5 — Label</Heading>
      <Heading level={6}>Heading 6 — Caption</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All six heading levels displayed together, showing the typographic scale from h1 to h6.",
      },
    },
  },
};

export const InContent: Story = {
  render: () => (
    <article className="max-w-lg space-y-4">
      <Heading level={1}>Getting Started</Heading>
      <p className="text-muted-foreground text-sm">
        Welcome to the Altrugenix design system. Follow this guide to set up
        your first project.
      </p>
      <Heading level={2}>Installation</Heading>
      <p className="text-muted-foreground text-sm">
        Install the core package using your preferred package manager.
      </p>
      <Heading level={3}>Configuration</Heading>
      <p className="text-muted-foreground text-sm">
        Configure the theme provider at the root of your application.
      </p>
    </article>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Headings used in a realistic content layout with paragraphs, demonstrating proper heading hierarchy.",
      },
    },
  },
};
