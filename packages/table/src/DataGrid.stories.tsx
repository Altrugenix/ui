import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataGrid } from "@altrugenix/table";
import { Badge } from "@altrugenix/badge";

interface UserData {
  id: number;
  name: string;
  email: string;
  status: string;
}

const meta: Meta<typeof DataGrid<UserData>> = {
  title: "Data Display/Table/DataGrid",
  component: DataGrid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A high-performance virtualized data grid suitable for rendering thousands of rows. Uses `VirtualList` under the hood for 60fps scrolling.",
      },
    },
  },
  argTypes: {
    columns: {
      description: "Array of column definitions with header, accessorKey, width, and optional custom cell renderer.",
      table: { category: "Data" },
    },
    data: {
      description: "Array of raw data items.",
      table: { category: "Data" },
    },
    height: {
      control: "number",
      description: "Fixed height of the scrollable grid container.",
      table: { category: "Layout" },
    },
  },
};

export default meta;

const COLUMNS = [
  { header: "ID", accessorKey: "id", width: 80 },
  { header: "Name", accessorKey: "name" },
  { header: "Email", accessorKey: "email", width: 250 },
  {
    header: "Status",
    accessorKey: "status",
    width: 120,
    cell: (item: UserData) => (
      <Badge variant={item.status === "Active" ? "success" : "warning"}>
        {item.status}
      </Badge>
    ),
  },
];

const DATA = Array.from({ length: 1000 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: i % 3 === 0 ? "Active" : "Pending",
}));

export const Performance1000Rows: StoryObj = {
  args: {
    columns: COLUMNS,
    data: DATA,
    height: 500,
  },
  parameters: {
    docs: {
      description: {
        story: "A demonstration of 1,000 rows rendering smoothly thanks to DOM virtualization.",
      },
    },
  },
};
