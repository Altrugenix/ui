import type { Meta, StoryObj } from "@storybook/react-vite";
import { List, ListItem } from "@altrugenix/list";
import { Folder, FileText, CheckCircle2 } from "lucide-react";

const meta: Meta<typeof List> = {
  title: "Data Display/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A vertical list container for displaying homogeneous data. Supports dividers, ordered/unordered modes, and rich items with leading/trailing elements.",
      },
    },
  },
  argTypes: {
    divided: {
      control: "boolean",
      description: "Adds a border between list items.",
      table: { category: "Appearance" },
    },
    ordered: {
      control: "boolean",
      description: "Renders as an `<ol>` with numbered items.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List className="max-w-md">
      <ListItem>First item in the list</ListItem>
      <ListItem>Second item in the list</ListItem>
      <ListItem>Third item in the list</ListItem>
    </List>
  ),
};

export const Divided: Story = {
  render: () => (
    <List divided className="max-w-md rounded-lg border">
      <ListItem>First item in the list</ListItem>
      <ListItem>Second item in the list</ListItem>
      <ListItem>Third item in the list</ListItem>
    </List>
  ),
  parameters: {
    docs: {
      description: {
        story: "A divided list with a border between each item.",
      },
    },
  },
};

export const Ordered: Story = {
  render: () => (
    <List ordered className="max-w-md list-decimal pl-5">
      <ListItem>Install dependencies</ListItem>
      <ListItem>Configure environment</ListItem>
      <ListItem>Run development server</ListItem>
    </List>
  ),
  parameters: {
    docs: {
      description: {
        story: "An ordered list. Numbering is handled by CSS list styles.",
      },
    },
  },
};

export const RichItems: Story = {
  render: () => (
    <List divided className="max-w-md rounded-lg border">
      <ListItem
        leading={<Folder className="h-5 w-5 text-blue-500" />}
        trailing={<span className="text-muted-foreground text-xs">Today</span>}
      >
        Documents
      </ListItem>
      <ListItem
        leading={<FileText className="h-5 w-5 text-amber-500" />}
        trailing={
          <span className="text-muted-foreground text-xs">Yesterday</span>
        }
      >
        Invoice_2026.pdf
      </ListItem>
      <ListItem
        leading={<CheckCircle2 className="h-5 w-5 text-emerald-500" />}
        trailing={
          <span className="text-muted-foreground text-xs">Completed</span>
        }
      >
        Task List
      </ListItem>
    </List>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "List items using `leading` and `trailing` props for icons and metadata.",
      },
    },
  },
};
