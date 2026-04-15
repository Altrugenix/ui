import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "@altrugenix/icon";
import * as LucideIcons from "lucide-react";

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

const COMMON_ICONS: (keyof typeof LucideIcons)[] = [
  "Mail",
  "Plus",
  "X",
  "Check",
  "ChevronRight",
  "ChevronLeft",
  "Settings",
  "User",
  "Search",
  "Bell",
  "Heart",
  "Star",
  "Trash",
  "Edit",
  "Download",
  "Upload",
  "Link",
  "Eye",
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown",
  "RefreshCw",
  "ExternalLink",
  "Calendar",
  "Clock",
];

export const Default: Story = {
  args: {
    name: "Heart",
    size: 48,
    className: "text-rose-500",
  },
};

export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
      {COMMON_ICONS.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors hover:bg-muted/50"
        >
          <Icon name={name} size={24} />
          <span className="w-full truncate text-center font-mono text-[10px] text-muted-foreground">
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
