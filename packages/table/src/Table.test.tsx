import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./Table";
import { DataTable } from "./DataTable";

describe("Table", () => {
  it("renders a basic table structure", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Cell")).toBeInTheDocument();
  });
});

describe("DataTable", () => {
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
  ];

  const data = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
  ];

  it("renders data correctly", () => {
    render(<DataTable columns={columns} data={data} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("25")).toBeInTheDocument();
  });

  it("renders search input when searchKey is provided", () => {
    render(<DataTable columns={columns} data={data} searchKey="name" />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
