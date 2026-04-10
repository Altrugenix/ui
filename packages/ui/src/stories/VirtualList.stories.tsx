import type { Meta, StoryObj } from "@storybook/react-vite";
import { VirtualList } from "~/components/ui/virtual-list";

const meta: Meta<typeof VirtualList> = {
  title: "UI/VirtualList",
  component: VirtualList,
  tags: ["autodocs"],
};

export default meta;
type Item = {
  id: number;
  title: string;
  description: string;
  label: string;
};

type Story = StoryObj<typeof VirtualList<Item>>;

const MOCK_ITEMS: Item[] = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  description: `This is the description for item ${i + 1}`,
  label: `Row ${i}`,
}));

export const Default: Story = {
  args: {
    items: MOCK_ITEMS,
    height: 400,
    rowHeight: 60,
    renderRow: (item: Item) => (
      <div className="flex h-full flex-col justify-center border-b px-4 py-2 transition-colors hover:bg-muted/50">
        <span className="text-sm font-semibold">{item.title}</span>
        <span className="text-xs text-muted-foreground">
          {item.description}
        </span>
      </div>
    ),
  },
};

export const LargeDataset: Story = {
  args: {
    items: Array.from({ length: 100000 }, (_, i) => ({
      id: i,
      title: `Item ${i + 1}`,
      description: `This is the description for item ${i + 1}`,
      label: `Row ${i}`,
    })),
    height: 500,
    rowHeight: 40,
    renderRow: (item: Item) => (
      <div className="flex h-full items-center border-b px-4 py-2 font-mono text-xs">
        {item.label}
      </div>
    ),
  },
};
