import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@altrugenix/card";
import { Button } from "@altrugenix/button";
import { Badge } from "@altrugenix/badge";
import { BarChart, Users, TrendingUp } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A versatile container for grouping related content and actions. Composed of Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter sub-components.",
      },
    },
  },
  argTypes: {
    hover: {
      control: "boolean",
      description: "Enables a hover lift effect on the card.",
      table: { category: "Behavior" },
    },
    variant: {
      control: "select",
      options: ["default", "secondary"],
      description: "Visual variant of the card surface.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <p className="text-foreground/80 text-sm">
            This is a sample card content area where you can place anything.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithHover: Story = {
  render: () => (
    <Card hover className="w-[350px] cursor-pointer">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>This card has a hover effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Hover over me to see the lift animation.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Cards with the `hover` prop get a subtle lift animation on hover, indicating interactivity.",
      },
    },
  },
};

export const Secondary: Story = {
  render: () => (
    <Card variant="secondary" className="w-[350px]">
      <CardHeader>
        <CardTitle>Secondary Variant</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Subtle background for less emphasis.</p>
      </CardContent>
    </Card>
  ),
};

export const StatsCards: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,489</div>
          <p className="text-muted-foreground text-xs">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <TrendingUp className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231</div>
          <p className="text-muted-foreground text-xs">+15.3% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">573</div>
          <p className="text-muted-foreground text-xs">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A dashboard-style stats grid using Cards — a common pattern for admin and analytics interfaces.",
      },
    },
  },
};

export const WithBadge: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Feature Preview</CardTitle>
          <Badge variant="warning">Beta</Badge>
        </div>
        <CardDescription>
          This feature is currently in beta testing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 text-sm">
          Try out the new analytics dashboard with real-time metrics and
          customizable widgets. Feedback is welcome!
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Try it out</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "A card with a badge indicating feature status — useful for beta or preview features.",
      },
    },
  },
};
