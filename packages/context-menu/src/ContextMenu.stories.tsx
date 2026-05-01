import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextMenu, ContextMenuItem, ContextMenuSeparator } from "@altrugenix/context-menu";
import { Copy, Scissors, ClipboardPaste, Trash2, RotateCcw, FileText } from "lucide-react";

const meta: Meta<typeof ContextMenu> = {
  title: "Overlays/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A right-click context menu that appears at the cursor position. Wraps a trigger area and renders a floating menu on `contextmenu` events with click-away dismissal.",
      },
    },
  },
  argTypes: {
    children: {
      description: "The trigger area — the menu appears on right-click within this region.",
      table: { category: "Content" },
    },
    menu: {
      description: "The menu content (ContextMenuItem, ContextMenuSeparator, etc).",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <ContextMenu
      menu={
        <>
          <ContextMenuItem>Cut</ContextMenuItem>
          <ContextMenuItem>Copy</ContextMenuItem>
          <ContextMenuItem>Paste</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Delete</ContextMenuItem>
        </>
      }
    >
      <div className="border-border bg-muted/30 flex h-40 items-center justify-center rounded-lg border-2 border-dashed">
        <p className="text-muted-foreground text-sm">Right-click this area</p>
      </div>
    </ContextMenu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ContextMenu
      menu={
        <>
          <ContextMenuItem>
            <Scissors className="mr-2 h-4 w-4" /> Cut
          </ContextMenuItem>
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" /> Copy
          </ContextMenuItem>
          <ContextMenuItem>
            <ClipboardPaste className="mr-2 h-4 w-4" /> Paste
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <RotateCcw className="mr-2 h-4 w-4" /> Undo
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Trash2 className="mr-2 h-4 w-4 text-destructive" /> Delete
          </ContextMenuItem>
        </>
      }
    >
      <div className="border-border bg-muted/30 flex h-40 items-center justify-center rounded-lg border-2 border-dashed">
        <p className="text-muted-foreground text-sm">Right-click for icon menu</p>
      </div>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Menu items with leading icons for a richer visual experience.",
      },
    },
  },
};

export const FileManager: Story = {
  render: () => (
    <ContextMenu
      menu={
        <>
          <ContextMenuItem>
            <FileText className="mr-2 h-4 w-4" /> Open
          </ContextMenuItem>
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" /> Duplicate
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Rename</ContextMenuItem>
          <ContextMenuItem>Move to...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Trash2 className="mr-2 h-4 w-4 text-destructive" /> Move to Trash
          </ContextMenuItem>
        </>
      }
    >
      <div className="bg-card flex items-center gap-3 rounded-lg border p-4">
        <FileText className="text-muted-foreground h-8 w-8" />
        <div>
          <p className="text-sm font-medium">Project Proposal.pdf</p>
          <p className="text-muted-foreground text-xs">2.4 MB — Modified today</p>
        </div>
      </div>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A file manager context menu on a document card — right-click to see file operations.",
      },
    },
  },
};
