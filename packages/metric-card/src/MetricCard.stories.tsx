import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricCard } from "@altrugenix/metric-card";
import { Users, DollarSign, Activity } from "lucide-react";

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
    trend: { value: "+20.1%", direction: "up", label: "from last month" },
    icon: <DollarSign className="text-muted-foreground h-4 w-4" />,
  },
};

export const WithTrendDown: Story = {
  args: {
    title: "Bounce Rate",
    value: "42.3%",
    trend: { value: "-4.5%", direction: "down", label: "from last week" },
    icon: <Activity className="text-muted-foreground h-4 w-4" />,
  },
};

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MetricCard
        title="Total Active Users"
        value="2,420"
        trend={{ value: "+4.1%", direction: "up" }}
        icon={<Users className="text-muted-foreground h-4 w-4" />}
      />
      <MetricCard
        title="Avg. Session Duration"
        value="4m 12s"
        trend={{ value: "-1.2%", direction: "down" }}
        icon={<Activity className="text-muted-foreground h-4 w-4" />}
      />
      <MetricCard
        title="Server Uptime"
        value="99.9%"
        trend={{ value: "Stable", direction: "neutral" }}
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
