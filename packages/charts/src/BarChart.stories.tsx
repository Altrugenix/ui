import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChart } from "@altrugenix/charts";

const meta: Meta<typeof BarChart> = {
  title: "Data Display/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-card max-w-[600px] rounded-xl border p-10">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A simple responsive bar chart that renders individual bars based on data objects with values and colors. Scales automatically based on the maximum value.",
      },
    },
  },
  argTypes: {
    data: {
      description:
        "Array of data points containing label, value, and color (Tailwind class).",
      table: { category: "Data" },
    },
    height: {
      control: "number",
      description: "Height of the chart container in pixels.",
      table: { category: "Appearance" },
    },
    showLabels: {
      control: "boolean",
      description: "Whether to display labels under each bar.",
      table: { category: "Appearance" },
    },
    className: {
      description: "Custom CSS classes for the chart wrapper.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BarChart>;

const MOCK_DATA = [
  { label: "Jan", value: 400, color: "bg-indigo-500" },
  { label: "Feb", value: 300, color: "bg-purple-500" },
  { label: "Mar", value: 600, color: "bg-rose-500" },
  { label: "Apr", value: 800, color: "bg-amber-500" },
  { label: "May", value: 500, color: "bg-emerald-500" },
  { label: "Jun", value: 900, color: "bg-blue-500" },
  { label: "Jul", value: 550, color: "bg-teal-500" },
];

export const Default: Story = {
  args: {
    data: MOCK_DATA,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A standard bar chart with multiple colors indicating different data points or categories.",
      },
    },
  },
};

export const Monochromatic: Story = {
  args: {
    data: MOCK_DATA.map((d) => ({ ...d, color: "bg-primary" })),
  },
  parameters: {
    docs: {
      description: {
        story:
          "A unified color palette where all bars use the theme's primary color.",
      },
    },
  },
};

export const CustomHeight: Story = {
  args: {
    data: MOCK_DATA,
    height: 400,
  },
  parameters: {
    docs: {
      description: {
        story: "A taller chart using the `height` prop to scale appropriately.",
      },
    },
  },
};

export const NoLabels: Story = {
  args: {
    data: MOCK_DATA,
    showLabels: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Bar chart with x-axis labels hidden.",
      },
    },
  },
};
