import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup, Button, IconButton } from "@altrugenix/button";
import {
  LayoutGrid,
  List,
  Table,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Settings,
} from "lucide-react";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Year</Button>
      <Button variant="outline">Month</Button>
      <Button variant="outline">Day</Button>
    </ButtonGroup>
  ),
};

export const Icons: Story = {
  render: () => (
    <ButtonGroup>
      <IconButton variant="outline">
        <AlignLeft className="h-4 w-4" />
      </IconButton>
      <IconButton variant="outline">
        <AlignCenter className="h-4 w-4" />
      </IconButton>
      <IconButton variant="outline">
        <AlignRight className="h-4 w-4" />
      </IconButton>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <IconButton variant="outline">
        <LayoutGrid className="h-4 w-4" />
      </IconButton>
      <IconButton variant="outline">
        <List className="h-4 w-4" />
      </IconButton>
      <IconButton variant="outline">
        <Table className="h-4 w-4" />
      </IconButton>
    </ButtonGroup>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <ButtonGroup fullWidth>
      <Button>Accept</Button>
      <Button variant="secondary">Maybe</Button>
      <Button variant="destructive">Decline</Button>
    </ButtonGroup>
  ),
};

export const Mixed: Story = {
  render: () => (
    <ButtonGroup variant="outline">
      <Button variant="outline">Primary</Button>
      <IconButton variant="outline">
        <Settings className="h-4 w-4" />
      </IconButton>
    </ButtonGroup>
  ),
};
