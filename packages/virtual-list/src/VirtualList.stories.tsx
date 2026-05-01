import type { Meta, StoryObj } from "@storybook/react-vite";
import { VirtualList } from "@altrugenix/virtual-list";
import { useState, useMemo } from "react";

const meta: Meta<typeof VirtualList> = {
  title: "Data Display/VirtualList",
  component: VirtualList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A high-performance virtualized list that only renders items currently visible in the scroll viewport. Crucial for rendering large datasets without freezing the browser.",
      },
    },
  },
  argTypes: {
    items: {
      description: "Array of data items to render.",
      table: { category: "Data" },
    },
    height: {
      control: "number",
      description: "Height of the scrollable container in pixels.",
      table: { category: "Layout" },
    },
    rowHeight: {
      control: "number",
      description: "Fixed height of each list row in pixels.",
      table: { category: "Layout" },
    },
    renderRow: {
      description:
        "Render function for each row: `(item, index) => ReactNode`.",
      table: { category: "Rendering" },
    },
    overscan: {
      control: "number",
      description:
        "Number of extra rows to render outside the viewport to prevent flickering.",
      table: { category: "Rendering" },
    },
  },
};

export default meta;

type MockUser = {
  id: number;
  name: string;
  email: string;
};

type Story = StoryObj<typeof VirtualList<MockUser>>;

const MOCK_DATA: MockUser[] = Array.from({ length: 10000 }).map((_, i) => ({
  id: i,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
}));

export const Default: Story = {
  args: {
    items: MOCK_DATA,
    height: 400,
    rowHeight: 60,
    renderRow: (item: MockUser, index: number) => (
      <div
        key={index}
        className="hover:bg-muted/30 flex h-full items-center border-b px-4"
      >
        <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-medium">
          {item.id}
        </div>
        <div className="ml-4 flex-1 overflow-hidden">
          <p className="truncate text-sm font-medium">{item.name}</p>
          <p className="text-muted-foreground truncate text-xs">{item.email}</p>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Rendering a list of 10,000 items at 60fps.",
      },
    },
  },
};

const ContactListDemo = () => {
  const [filter, setFilter] = useState("");

  const filteredData = useMemo(() => {
    if (!filter) return MOCK_DATA;
    return MOCK_DATA.filter((i) =>
      i.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <div className="bg-card w-[400px] overflow-hidden rounded-lg border shadow-sm">
      <div className="border-b p-3">
        <input
          type="text"
          placeholder="Search contacts..."
          className="bg-muted/30 focus:ring-primary/20 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="bg-muted/5 text-muted-foreground p-2 text-xs font-medium">
        {filteredData.length} contacts found
      </div>
      <VirtualList
        items={filteredData}
        height={350}
        rowHeight={50}
        renderRow={(item: MockUser) => (
          <div className="hover:bg-muted/50 flex h-full cursor-pointer items-center px-4">
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        )}
      />
    </div>
  );
};

export const ContactListSearch: Story = {
  render: () => <ContactListDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Virtual list combined with a search filter. Notice how fast it filters 10,000 items.",
      },
    },
  },
};
