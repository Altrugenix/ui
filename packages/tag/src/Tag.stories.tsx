import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "@altrugenix/tag";
import { Star, Hash, Code2 } from "lucide-react";

const meta: Meta<typeof Tag> = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A small label for categorizing, filtering, or annotating content. Supports six semantic variants, leading icons, and an optional remove button.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "success",
        "warning",
        "destructive",
      ],
      description: "Semantic color variant.",
      table: { category: "Appearance" },
    },
    icon: {
      description: "Leading icon element.",
      table: { category: "Content" },
    },
    onRemove: {
      description: "When provided, renders a close (×) button on the right.",
      table: { category: "Events" },
    },
    children: {
      description: "Tag label text.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "React",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Featured",
    icon: <Star className="h-3 w-3" />,
  },
};

export const Removable: Story = {
  args: {
    children: "TypeScript",
    onRemove: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "A removable tag with a dismiss button — common for selected filter tokens.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="outline">Outline</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="destructive">Destructive</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All six tag variants displayed together.",
      },
    },
  },
};

export const RemovableGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default" onRemove={() => {}}>
        React
      </Tag>
      <Tag variant="success" onRemove={() => {}}>
        TypeScript
      </Tag>
      <Tag variant="warning" onRemove={() => {}}>
        Tailwind
      </Tag>
    </div>
  ),
};

export const TechStack: Story = {
  render: () => (
    <div className="space-y-3">
      <p className="text-foreground text-sm font-medium">Tech Stack</p>
      <div className="flex flex-wrap gap-2">
        <Tag icon={<Code2 className="h-3 w-3" />} variant="default">
          React 19
        </Tag>
        <Tag icon={<Code2 className="h-3 w-3" />} variant="success">
          TypeScript
        </Tag>
        <Tag icon={<Hash className="h-3 w-3" />} variant="outline">
          Tailwind v4
        </Tag>
        <Tag icon={<Hash className="h-3 w-3" />} variant="outline">
          Vite 6
        </Tag>
        <Tag variant="secondary">Storybook</Tag>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tags with icons used to display a technology stack — a common pattern for project cards and profiles.",
      },
    },
  },
};
