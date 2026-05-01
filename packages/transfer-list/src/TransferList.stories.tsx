import type { Meta, StoryObj } from "@storybook/react-vite";
import { TransferList } from "@altrugenix/transfer-list";

const meta: Meta<typeof TransferList> = {
  title: "Composites/TransferList",
  component: TransferList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A dual-panel selection component for moving items between 'Available' and 'Selected' lists. Uses checkboxes for multi-selection with chevron buttons to transfer items.",
      },
    },
  },
  argTypes: {
    items: {
      description: "Array of string items available for selection.",
      table: { category: "Data" },
    },
    initialSelected: {
      description: "Items that start in the right (selected) panel.",
      table: { category: "Data" },
    },
    titles: {
      description: "Labels for the two panels as a tuple [left, right].",
      table: { category: "Content" },
    },
    onChange: {
      description: "Callback triggered when items are moved between panels.",
      table: { category: "Events" },
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    items: ["Task A", "Task B", "Task C", "Task D", "Task E", "Task F"],
    initialSelected: ["Task B"],
    titles: ["Available Tasks", "Assigned Tasks"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A task assignment interface with one item pre-assigned to the right panel.",
      },
    },
  },
};

export const Empty: StoryObj = {
  args: {
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    initialSelected: [],
    titles: ["Available", "Selected"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "All items start in the available panel with nothing pre-selected.",
      },
    },
  },
};

export const TeamAssignment: StoryObj = {
  args: {
    items: [
      "Alice Chen",
      "Bob Martinez",
      "Carol Johnson",
      "David Kim",
      "Eve Williams",
      "Frank Brown",
      "Grace Lee",
      "Henry Davis",
    ],
    initialSelected: ["Alice Chen", "David Kim"],
    titles: ["Team Members", "Project Team"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A real-world team assignment scenario with people names and two pre-assigned members.",
      },
    },
  },
};

export const Permissions: StoryObj = {
  args: {
    items: [
      "Read",
      "Write",
      "Delete",
      "Admin",
      "Billing",
      "Invite Members",
      "Manage Roles",
      "View Analytics",
      "Export Data",
    ],
    initialSelected: ["Read", "Write"],
    titles: ["Available Permissions", "Granted Permissions"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "A permissions management interface — a common pattern for RBAC admin panels.",
      },
    },
  },
};
