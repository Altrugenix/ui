import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricCard } from "@altrugenix/metric-card";
import { Users, ArrowUpRight, ArrowDownRight, DollarSign, Activity } from "lucide-react";

const meta: Meta<typeof MetricCard> = {
  title: "Data Display/MetricCard",
  component: MetricCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A specialized card for dashboard metrics. Displays a title, primary value, icon, and optional trend/change indicator.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Metric label (e.g. 'Total Revenue').",
      table: { category: "Content" },
    },
    value: {
      description: "Primary numeric or formatted value.",
      table: { category: "Content" },
    },
    trend: {
      description: "Change indicator value (e.g. '+12.5%').",
      table: { category: "Content" },
    },
    trendDirection: {
      control: "select",
      options: ["up", "down", "neutral"],
      description: "Determines trend color (green/red/gray).",
      table: { category: "Appearance" },
    },
    icon: {
      description: "Top-right icon representing the metric.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  args: {
    title: "Total Users",
    value: "14,231",
  },
};

export const WithTrendUp: Story = {
  args: {
    title: "Monthly Revenue",
    value: "$45,231.89",
    trend: "+20.1% from last month",
    trendDirection: "up",
    icon: <DollarSign className="text-muted-foreground h-4 w-4" />,
  },
};

export const WithTrendDown: Story = {
  args: {
    title: "Bounce Rate",
    value: "42.3%",
    trend: "-4.5% from last week",
    trendDirection: "down",
    icon: <Activity className="text-muted-foreground h-4 w-4" />,
  },
};

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        title="Total Active Users"
        value="2,420"
        trend="+4.1%"
        trendDirection="up"
        icon={<Users className="text-muted-foreground h-4 w-4" />}
      />
      <MetricCard
        title="Avg. Session Duration"
        value="4m 12s"
        trend="-1.2%"
        trendDirection="down"
        icon={<Activity className="text-muted-foreground h-4 w-4" />}
      />
      <MetricCard
        title="Server Uptime"
        value="99.9%"
        trend="Stable"
        trendDirection="neutral"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A responsive grid of metric cards — the core building block of admin dashboards.",
      },
    },
  },
};
