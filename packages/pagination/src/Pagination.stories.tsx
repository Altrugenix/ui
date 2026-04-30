import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "@altrugenix/pagination";

const meta: Meta<typeof Pagination> = {
  title: "Composites/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const InteractivePagination = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="space-y-2 text-center">
      <p className="text-muted-foreground text-sm">Page {page} of 20</p>
      <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
    </div>
  );
};

export const Default: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    onPageChange: () => {},
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
    onPageChange: () => {},
  },
};

export const Interactive: Story = {
  render: () => <InteractivePagination />,
};
