import type { Meta, StoryObj } from "@storybook/react-vite";
import { Breadcrumbs } from "@/components/composites/breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Composites/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
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
};
