import type { Meta, StoryObj } from "@storybook/react-vite";
import { AdvancedBadge } from "@altrugenix/badge";
import { Mail, Bell } from "lucide-react";

const meta: Meta<typeof AdvancedBadge> = {
  title: "UI/Badge/Advanced",
  component: AdvancedBadge,
  tags: ["autodocs"],
};

export default meta;

export const WithChildren: StoryObj = {
  render: () => (
    <div className="flex items-center gap-8 p-4">
      <AdvancedBadge content={4} variant="destructive">
        <Mail className="h-6 w-6" />
      </AdvancedBadge>

      <AdvancedBadge content={120} max={99} variant="success">
        <Bell className="h-6 w-6" />
      </AdvancedBadge>

      <AdvancedBadge content="NEW" variant="success">
        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded">
          IMG
        </div>
      </AdvancedBadge>
    </div>
  ),
};

export const Placements: StoryObj = {
  render: () => (
    <div className="grid max-w-xs grid-cols-2 gap-12 p-10">
      <AdvancedBadge content={1} placement="top-right">
        <div className="bg-muted h-10 w-10 rounded" />
      </AdvancedBadge>
      <AdvancedBadge content={2} placement="top-left">
        <div className="bg-muted h-10 w-10 rounded" />
      </AdvancedBadge>
      <AdvancedBadge content={3} placement="bottom-right">
        <div className="bg-muted h-10 w-10 rounded" />
      </AdvancedBadge>
      <AdvancedBadge content={4} placement="bottom-left">
        <div className="bg-muted h-10 w-10 rounded" />
      </AdvancedBadge>
    </div>
  ),
};

export const Overlap: StoryObj = {
  render: () => (
    <div className="flex items-center gap-12 p-4">
      <AdvancedBadge content={5} overlap="rectangular">
        <div className="bg-primary h-12 w-12 rounded" />
      </AdvancedBadge>

      <AdvancedBadge content={5} overlap="circular">
        <div className="bg-primary h-12 w-12 rounded-full" />
      </AdvancedBadge>
    </div>
  ),
};
