import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@altrugenix/dropdown-menu";
import { Button } from "@altrugenix/button";
import { User, Settings, LogOut, Plus, FileText, Trash2 } from "lucide-react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Overlays/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A contextual menu triggered by a button click. Supports regular, disabled, and destructive menu items with separators for grouping.",
      },
    },
  },
  argTypes: {
    trigger: {
      description: "The element that opens the menu when clicked.",
      table: { category: "Content" },
    },
    align: {
      control: "select",
      options: ["left", "right"],
      description: "Horizontal alignment of the dropdown panel.",
      table: { category: "Positioning" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu trigger={<Button variant="outline">Open Menu</Button>}>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem destructive>Sign Out</DropdownMenuItem>
    </DropdownMenu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu trigger={<Button variant="outline">Account</Button>}>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" /> Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" /> Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem destructive>
        <LogOut className="mr-2 h-4 w-4" /> Sign Out
      </DropdownMenuItem>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Menu items with leading icons for improved visual scanning.",
      },
    },
  },
};

export const RightAligned: Story = {
  render: () => (
    <div className="flex justify-end">
      <DropdownMenu
        trigger={<Button variant="outline">Actions</Button>}
        align="right"
      >
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" /> New Document
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" /> Templates
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <Settings className="mr-2 h-4 w-4" /> Admin (Restricted)
        </DropdownMenuItem>
        <DropdownMenuItem destructive>
          <Trash2 className="mr-2 h-4 w-4" /> Delete All
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Right-aligned dropdown with icons, a disabled item, and a destructive action — common for toolbar action menus.",
      },
    },
  },
};
