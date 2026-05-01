import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "@altrugenix/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Data Display/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A vertically stacked set of interactive headings that each reveal an associated panel of content. Supports single and multiple expansion modes with optional disabled items.",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description:
        "Controls whether only one or multiple items can be expanded simultaneously.",
      table: { category: "Behavior" },
    },
    items: {
      description:
        "Array of accordion items containing value, trigger label, content, and optional disabled flag.",
      table: { category: "Data" },
    },
    defaultValue: {
      description:
        "Array of values that should be expanded by default on initial render.",
      table: { category: "Behavior" },
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
      "Yes. It comes with default styles that match the Altrugenix design system.",
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
  parameters: {
    docs: {
      description: {
        story:
          "Only one item can be expanded at a time. Opening a new item automatically collapses the previous one.",
      },
    },
  },
};

export const Multiple: Story = {
  args: {
    items,
    type: "multiple",
    defaultValue: ["1"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple items can be expanded simultaneously. The first item is expanded by default.",
      },
    },
  },
};

export const AllExpanded: Story = {
  args: {
    items,
    type: "multiple",
    defaultValue: ["1", "2", "3"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "All items are expanded by default using the `defaultValue` prop with all item values.",
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          "Individual accordion items can be disabled to prevent interaction. Disabled items appear muted and cannot be toggled.",
      },
    },
  },
};

export const FAQ: Story = {
  render: () => (
    <div className="mx-auto max-w-2xl space-y-4">
      <h2 className="text-foreground text-xl font-bold">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        items={[
          {
            value: "pricing",
            trigger: "What plans are available?",
            content:
              "We offer Free, Pro, and Enterprise plans. Each tier includes progressively more features, storage, and priority support options.",
          },
          {
            value: "trial",
            trigger: "Is there a free trial?",
            content:
              "Yes! Every new account starts with a 14-day free trial of our Pro plan. No credit card required.",
          },
          {
            value: "cancel",
            trigger: "Can I cancel anytime?",
            content:
              "Absolutely. You can cancel your subscription at any time from the billing settings. Your access continues until the end of the current billing period.",
          },
          {
            value: "support",
            trigger: "How do I get support?",
            content:
              "Free users have access to community forums. Pro and Enterprise users get priority email support and live chat during business hours.",
          },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A real-world FAQ section demonstrating the accordion in a practical context with meaningful content.",
      },
    },
  },
};
