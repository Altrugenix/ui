import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextMenu } from "~/components/overlays/context-menu/ContextMenu";
import { Copy, Edit, Trash, Share } from "lucide-react";

const meta: Meta<typeof ContextMenu> = {
  title: "Overlays/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="flex h-[300px] w-full items-center justify-center rounded-lg border-2 border-dashed">
      <ContextMenu
        menu={
          <div className="flex flex-col">
            <button className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">
              <Copy size={14} /> Copy
            </button>
            <button className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">
              <Edit size={14} /> Edit
            </button>
            <button className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">
              <Share size={14} /> Share
            </button>
            <div className="my-1 h-[1px] bg-border" />
            <button className="flex items-center gap-2 rounded px-3 py-2 text-sm text-destructive hover:bg-destructive/10">
              <Trash size={14} /> Delete
            </button>
          </div>
        }
      >
        <div className="p-20 text-center text-muted-foreground">
          Right-click anywhere in this box to open the context menu.
        </div>
      </ContextMenu>
    </div>
  ),
};

export const OnComponent: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8">
      {[1, 2, 3].map((id) => (
        <ContextMenu
          key={id}
          menu={
            <div className="flex flex-col p-1">
              <span className="px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                Item {id} Options
              </span>
              <button className="flex items-center gap-2 rounded px-3 py-2 text-sm hover:bg-accent">
                View Details
              </button>
              <button className="flex items-center gap-2 rounded px-3 py-2 text-sm text-destructive hover:bg-accent">
                Remove
              </button>
            </div>
          }
        >
          <div className="flex h-24 w-40 items-center justify-center rounded-lg border bg-card shadow-sm">
            Card {id}
          </div>
        </ContextMenu>
      ))}
    </div>
  ),
};
