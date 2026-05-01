import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "@altrugenix/pagination";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A page navigation component with previous/next buttons, numbered pages, and ellipsis truncation. Fully controlled via `currentPage` and `onPageChange`.",
      },
    },
  },
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1 },
      description: "The current active page (1-indexed).",
      table: { category: "State" },
    },
    totalPages: {
      control: { type: "number", min: 1 },
      description: "Total number of pages.",
      table: { category: "State" },
    },
    onPageChange: {
      description: "Callback triggered when a page button is clicked.",
      table: { category: "Events" },
    },
    siblingCount: {
      control: { type: "number", min: 0, max: 3 },
      description:
        "Number of sibling pages shown on each side of the current page.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const InteractivePagination = ({
  totalPages = 10,
  siblingCount,
}: {
  totalPages?: number;
  siblingCount?: number;
}) => {
  const [page, setPage] = useState(1);
  return (
    <div className="space-y-4">
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        siblingCount={siblingCount}
      />
      <p className="text-muted-foreground text-center text-sm">
        Page <span className="font-mono font-semibold">{page}</span> of{" "}
        <span className="font-mono font-semibold">{totalPages}</span>
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => <InteractivePagination />,
};

export const FewPages: Story = {
  render: () => <InteractivePagination totalPages={5} />,
  parameters: {
    docs: {
      description: {
        story: "A compact pagination with only 5 pages — no truncation needed.",
      },
    },
  },
};

export const ManyPages: Story = {
  render: () => <InteractivePagination totalPages={50} />,
  parameters: {
    docs: {
      description: {
        story:
          "50 pages with automatic ellipsis truncation to keep the control compact.",
      },
    },
  },
};

export const WideSiblings: Story = {
  render: () => <InteractivePagination totalPages={30} siblingCount={2} />,
  parameters: {
    docs: {
      description: {
        story:
          "With `siblingCount={2}`, more page numbers are visible around the current page.",
      },
    },
  },
};
