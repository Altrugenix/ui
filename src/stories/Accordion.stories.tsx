import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "@/components/ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Data Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    value: "1",
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "2",
    trigger: "Is it styled?",
    content:
      "Yes. It comes with default styles that match the Altrugenix UI design system.",
  },
  {
    value: "3",
    trigger: "Is it animated?",
    content:
      "Yes. It uses CSS transitions for smooth expand and collapse animations.",
  },
];

export const Single: Story = {
  args: {
    items,
    type: "single",
  },
};

export const Multiple: Story = {
  args: {
    items,
    type: "multiple",
    defaultValue: ["1"],
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      ...items,
      {
        value: "4",
        trigger: "Can I disable items?",
        content: "This should not be visible.",
        disabled: true,
      },
    ],
    type: "single",
  },
};
