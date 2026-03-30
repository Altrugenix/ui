import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
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
          <p className="text-sm text-foreground/80">
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
        <p className="text-sm">Hover over me to see the animation.</p>
      </CardContent>
    </Card>
  ),
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
