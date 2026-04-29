import "@testing-library/jest-dom";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock scrollIntoView since JSDOM doesn't support it
window.HTMLElement.prototype.scrollIntoView = vi.fn();
