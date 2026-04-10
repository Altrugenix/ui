import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "~/components/ui/table";
import { type ColumnDef } from "@tanstack/react-table";

interface Payment {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const colors: Record<string, string> = {
        pending: "text-yellow-500",
        processing: "text-blue-500",
        success: "text-green-500",
        failed: "text-destructive",
      };
      return (
        <span className={`font-medium capitalize ${colors[status] || ""}`}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <span className="font-medium">{formatted}</span>;
    },
  },
];

const data: Payment[] = [
  {
    id: "INV001",
    amount: 316.0,
    status: "success",
    email: "alice@example.com",
  },
  { id: "INV002", amount: 242.0, status: "pending", email: "bob@example.com" },
  {
    id: "INV003",
    amount: 837.0,
    status: "processing",
    email: "carol@example.com",
  },
  { id: "INV004", amount: 874.0, status: "failed", email: "dave@example.com" },
  { id: "INV005", amount: 721.0, status: "success", email: "eve@example.com" },
  {
    id: "INV006",
    amount: 120.5,
    status: "success",
    email: "frank@example.com",
  },
  {
    id: "INV007",
    amount: 450.0,
    status: "pending",
    email: "grace@example.com",
  },
  {
    id: "INV008",
    amount: 99.99,
    status: "processing",
    email: "hank@example.com",
  },
];

const meta: Meta<typeof DataTable> = {
  title: "UI/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => <DataTable columns={columns} data={data} />,
};

export const WithSearch: StoryObj = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      searchKey="email"
      searchPlaceholder="Filter by email..."
    />
  ),
};
