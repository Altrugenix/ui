import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "@altrugenix/breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A navigation aid showing the user's current location within a site hierarchy. Supports custom separators and clickable parent links.",
      },
    },
  },
  argTypes: {
    items: {
      description:
        "Array of breadcrumb items with label and optional href. The last item is treated as the current page.",
      table: { category: "Data" },
    },
    separator: {
      description: "Custom separator character between breadcrumb items.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Widget Pro" },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [{ label: "Dashboard", href: "/" }, { label: "Settings" }],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [{ label: "Home" }, { label: "Docs" }, { label: "Components" }],
    separator: "/",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A custom separator character (/) replaces the default chevron between items.",
      },
    },
  },
};

export const DeepHierarchy: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Documentation", href: "/docs" },
      { label: "Components", href: "/docs/components" },
      { label: "Forms", href: "/docs/components/forms" },
      { label: "Input" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A deeply nested breadcrumb trail with five levels — common in documentation sites.",
      },
    },
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: "Home" }],
  },
  parameters: {
    docs: {
      description: {
        story: "A breadcrumb with a single item (root page) — no separators are rendered.",
      },
    },
  },
};
