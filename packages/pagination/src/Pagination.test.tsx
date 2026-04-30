import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Pagination } from "./index";

describe("Pagination", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={() => {}}
      ></Pagination>
    );
    expect(container).toBeTruthy();
  });
});
