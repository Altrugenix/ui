import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextMenu } from "@altrugenix/context-menu";
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
            <button className="hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
              <Copy size={14} /> Copy
            </button>
            <button className="hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
              <Edit size={14} /> Edit
            </button>
            <button className="hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
              <Share size={14} /> Share
            </button>
            <div className="bg-border my-1 h-[1px]" />
            <button className="text-destructive hover:bg-destructive/10 flex items-center gap-2 rounded px-3 py-2 text-sm">
              <Trash size={14} /> Delete
            </button>
          </div>
        }
      >
        <div className="text-muted-foreground p-20 text-center">
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
              <span className="text-muted-foreground px-3 py-1.5 text-xs font-semibold">
                Item {id} Options
              </span>
              <button className="hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
                View Details
              </button>
              <button className="text-destructive hover:bg-accent flex items-center gap-2 rounded px-3 py-2 text-sm">
                Remove
              </button>
            </div>
          }
        >
          <div className="bg-card flex h-24 w-40 items-center justify-center rounded-lg border shadow-sm">
            Card {id}
          </div>
        </ContextMenu>
      ))}
    </div>
  ),
};
