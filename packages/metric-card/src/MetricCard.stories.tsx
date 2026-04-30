import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricCard } from "@altrugenix/metric-card";
import { Users, DollarSign, TrendingUp, Activity } from "lucide-react";

const meta: Meta<typeof MetricCard> = {
  title: "UI/MetricCard",
  component: MetricCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-muted/20 max-w-[350px] p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  args: {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: <DollarSign className="h-4 w-4" />,
    trend: { value: "+20.1%", direction: "up", label: "vs last month" },
  },
};

export const WithSparkline: Story = {
  args: {
    title: "Active Users",
    value: "2,350",
    description: "Average 120 per hour",
    icon: <Users className="h-4 w-4" />,
    trend: { value: "+12.5%", direction: "up" },
    chartData: [20, 45, 28, 80, 99, 43, 65, 50, 85, 100],
  },
};

export const NegativeTrend: Story = {
  args: {
    title: "Churn Rate",
    value: "2.4%",
    icon: <Activity className="h-4 w-4" />,
    trend: { value: "-0.5%", direction: "down", label: "reduction" },
    chartData: [45, 40, 42, 38, 35, 30, 32, 28, 25, 24],
    chartColor: "hsl(var(--destructive))",
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    title: "Server Load",
    value: "42%",
    icon: <TrendingUp className="h-4 w-4" />,
    trend: { value: "Stable", direction: "neutral" },
    chartData: [40, 42, 41, 43, 42, 42, 41, 42, 43, 42],
  },
};
