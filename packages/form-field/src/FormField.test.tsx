import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormField } from "./index";

describe("FormField", () => {
  it.skip("should render without crashing", () => {
    const { container } = render(
      <FormField>
        <input />
      </FormField>
    );
    expect(container).toBeTruthy();
  });
});
