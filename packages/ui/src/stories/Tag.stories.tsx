import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "~/components/ui/tag";
import { Star } from "lucide-react";

const meta: Meta<typeof Tag> = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
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
    onRemove: () => alert("Removed!"),
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
