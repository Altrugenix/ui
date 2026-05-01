import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "@altrugenix/table";
import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@altrugenix/button";

interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Transaction ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const colors: Record<string, string> = {
        pending: "text-amber-500 bg-amber-500/10",
        processing: "text-blue-500 bg-blue-500/10",
        success: "text-emerald-500 bg-emerald-500/10",
        failed: "text-destructive bg-destructive/10",
      };
      return (
        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium capitalize ${colors[status] || ""}`}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-4 h-8 data-[state=open]:bg-accent"
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <div className="text-right">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  },
];

const data: Payment[] = [
  { id: "INV001", amount: 316.0, status: "success", email: "alice@example.com" },
  { id: "INV002", amount: 242.0, status: "pending", email: "bob@example.com" },
  { id: "INV003", amount: 837.0, status: "processing", email: "carol@example.com" },
  { id: "INV004", amount: 874.0, status: "failed", email: "dave@example.com" },
  { id: "INV005", amount: 721.0, status: "success", email: "eve@example.com" },
  { id: "INV006", amount: 120.5, status: "success", email: "frank@example.com" },
  { id: "INV007", amount: 450.0, status: "pending", email: "grace@example.com" },
  { id: "INV008", amount: 99.99, status: "processing", email: "hank@example.com" },
];

const meta: Meta<typeof DataTable> = {
  title: "Data Display/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A powerful data table component built on top of `@tanstack/react-table`. Supports client-side sorting, filtering, column visibility toggling, and pagination out of the box.",
      },
    },
  },
  argTypes: {
    columns: {
      description: "Array of TanStack Table column definitions.",
      table: { category: "Data" },
    },
    data: {
      description: "Array of data rows to display.",
      table: { category: "Data" },
    },
    searchKey: {
      control: "text",
      description: "The object key (column) to use for global search filtering.",
      table: { category: "Features" },
    },
    searchPlaceholder: {
      control: "text",
      description: "Placeholder text for the search input field.",
      table: { category: "Features" },
    },
    enableColumnVisibility: {
      control: "boolean",
      description: "Whether to show the column visibility dropdown.",
      table: { category: "Features" },
    },
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => <DataTable columns={columns} data={data} />,
  parameters: {
    docs: {
      description: {
        story: "A basic data table with custom cell rendering for status badges and formatted currency.",
      },
    },
  },
};

export const WithSearch: StoryObj = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      searchKey="email"
      searchPlaceholder="Filter by email address..."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Data table with a search input attached to a specific column (`email`), allowing quick client-side filtering.",
      },
    },
  },
};

export const NoColumnVisibility: StoryObj = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      enableColumnVisibility={false}
      searchKey="email"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "The 'Columns' dropdown button is disabled via `enableColumnVisibility={false}`.",
      },
    },
  },
};
