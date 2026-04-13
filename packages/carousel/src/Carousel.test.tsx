import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const getItems = () => [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>,
  ];

  it("renders correctly with items", () => {
    render(<Carousel items={getItems()} autoPlayInterval={0} />);
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
  });

  it("navigates to next slide on next button click", () => {
    render(<Carousel items={getItems()} autoPlayInterval={0} />);
    const nextBtn = screen.getByLabelText("Next slide");
    fireEvent.click(nextBtn);
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  it("navigates to previous slide on prev button click", () => {
    render(<Carousel items={getItems()} autoPlayInterval={0} />);
    const prevBtn = screen.getByLabelText("Previous slide");
    fireEvent.click(prevBtn);
    expect(screen.getByText("Slide 3")).toBeInTheDocument(); // loops back
  });

  it("auto plays to next slide after interval", () => {
    render(<Carousel items={getItems()} autoPlayInterval={5000} />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });
});
