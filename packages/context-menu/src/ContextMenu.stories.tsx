import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextMenu } from "@altrugenix/context-menu";
import {
  Copy,
  Scissors,
  ClipboardPaste,
  Trash2,
  RotateCcw,
  FileText,
} from "lucide-react";

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
      description:
        "The trigger area — the menu appears on right-click within this region.",
      table: { category: "Content" },
    },
    menu: {
      description: "The menu content.",
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
        <div className="py-1">
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Cut
          </div>
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Copy
          </div>
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Paste
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Delete
          </div>
        </div>
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
        <div className="py-1">
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Scissors className="mr-2 h-4 w-4" /> Cut
          </div>
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Copy className="mr-2 h-4 w-4" /> Copy
          </div>
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <ClipboardPaste className="mr-2 h-4 w-4" /> Paste
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <RotateCcw className="mr-2 h-4 w-4" /> Undo
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent text-destructive flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </div>
        </div>
      }
    >
      <div className="border-border bg-muted/30 flex h-40 items-center justify-center rounded-lg border-2 border-dashed">
        <p className="text-muted-foreground text-sm">
          Right-click for icon menu
        </p>
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
        <div className="min-w-[160px] py-1">
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <FileText className="mr-2 h-4 w-4" /> Open
          </div>
          <div className="hover:bg-accent flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Copy className="mr-2 h-4 w-4" /> Duplicate
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Rename
          </div>
          <div className="hover:bg-accent cursor-pointer rounded-sm px-2 py-1.5 text-sm">
            Move to...
          </div>
          <div className="bg-border my-1 h-px" />
          <div className="hover:bg-accent text-destructive flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm">
            <Trash2 className="mr-2 h-4 w-4" /> Move to Trash
          </div>
        </div>
      }
    >
      <div className="bg-card flex items-center gap-3 rounded-lg border p-4">
        <FileText className="text-muted-foreground h-8 w-8" />
        <div>
          <p className="text-sm font-medium">Project Proposal.pdf</p>
          <p className="text-muted-foreground text-xs">
            2.4 MB — Modified today
          </p>
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
