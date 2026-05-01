import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  TableFooter,
} from "./Table";
import { DataTable } from "./DataTable";
import "@testing-library/jest-dom";

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

  it("renders TableCaption and TableFooter", () => {
    render(
      <Table>
        <TableCaption>Test Caption</TableCaption>
        <TableFooter>
          <TableRow>
            <TableCell>Footer Cell</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByText("Test Caption")).toBeInTheDocument();
    expect(screen.getByText("Footer Cell")).toBeInTheDocument();
  });

  it("forwards refs to all components", () => {
    const tableRef = React.createRef<HTMLTableElement>();
    const headerRef = React.createRef<HTMLTableSectionElement>();
    const bodyRef = React.createRef<HTMLTableSectionElement>();
    const rowRef = React.createRef<HTMLTableRowElement>();
    const headRef = React.createRef<HTMLTableCellElement>();
    const cellRef = React.createRef<HTMLTableCellElement>();

    render(
      <Table ref={tableRef}>
        <TableHeader ref={headerRef}>
          <TableRow ref={rowRef}>
            <TableHead ref={headRef}>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody ref={bodyRef}>
          <TableRow>
            <TableCell ref={cellRef}>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(tableRef.current).toBeInstanceOf(HTMLTableElement);
    expect(headerRef.current).toBeInstanceOf(HTMLTableSectionElement);
    expect(bodyRef.current).toBeInstanceOf(HTMLTableSectionElement);
    expect(rowRef.current).toBeInstanceOf(HTMLTableRowElement);
    expect(headRef.current).toBeInstanceOf(HTMLTableCellElement);
    expect(cellRef.current).toBeInstanceOf(HTMLTableCellElement);
  });
});

describe("DataTable", () => {
  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "age", header: "Age" },
  ];

  const data = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
  ];

  it("filters data when typing in search input", () => {
    render(<DataTable columns={columns} data={data} searchKey="name" />);
    const input = screen.getByPlaceholderText(/search/i);
    
    fireEvent.change(input, { target: { value: "Jane" } });
    
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  });

  it("displays no results message when search matches nothing", () => {
    render(<DataTable columns={columns} data={data} searchKey="name" />);
    const input = screen.getByPlaceholderText(/search/i);
    
    fireEvent.change(input, { target: { value: "Nonexistent" } });
    
    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });

  it("renders correctly with empty data", () => {
    render(<DataTable columns={columns} data={[]} />);
    expect(screen.getByText(/no results/i)).toBeInTheDocument();
  });
});
