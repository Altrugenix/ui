import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "@altrugenix/link";
import { ExternalLink, ArrowRight } from "lucide-react";

const meta: Meta<typeof Link> = {
  title: "Navigation/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled anchor element for navigation. Provides consistent link styling with hover and focus states across the design system.",
      },
    },
  },
  argTypes: {
    href: {
      description: "The URL or path the link points to.",
      table: { category: "Navigation" },
    },
    children: {
      description: "Link text content.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    children: "This is a link",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Link href="#" className="inline-flex items-center gap-1">
      External documentation <ExternalLink className="h-3 w-3" />
    </Link>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A link with a trailing icon indicating an external destination.",
      },
    },
  },
};

export const InParagraph: Story = {
  render: () => (
    <p className="text-foreground/80 max-w-md text-sm leading-relaxed">
      By creating an account you agree to our{" "}
      <Link href="#">Terms of Service</Link> and{" "}
      <Link href="#">Privacy Policy</Link>. For questions, visit our{" "}
      <Link href="#">Help Center</Link>.
    </p>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Links used inline within a paragraph of text — the most common usage pattern.",
      },
    },
  },
};

export const NavigationList: Story = {
  render: () => (
    <nav className="space-y-2">
      {["Getting Started", "Components", "Theming", "API Reference", "Changelog"].map(
        (item) => (
          <Link
            key={item}
            href="#"
            className="flex items-center justify-between gap-2 rounded-md px-3 py-2 transition-colors hover:bg-muted"
          >
            {item}
            <ArrowRight className="text-muted-foreground h-4 w-4" />
          </Link>
        )
      )}
    </nav>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Links styled as a navigation list — suitable for sidebars and documentation menus.",
      },
    },
  },
};
