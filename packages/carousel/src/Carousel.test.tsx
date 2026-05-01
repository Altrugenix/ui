import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
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

  it("navigates to specific slide on dot click", () => {
    render(<Carousel items={getItems()} autoPlayInterval={0} />);
    const dot3 = screen.getByLabelText("Go to slide 3");
    fireEvent.click(dot3);
    expect(screen.getByText("Slide 3")).toBeInTheDocument();
  });

  it("hides arrows and dots when requested", () => {
    render(
      <Carousel
        items={getItems()}
        showArrows={false}
        showDots={false}
        autoPlayInterval={0}
      />
    );
    expect(screen.queryByLabelText("Next slide")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Go to slide 1")).not.toBeInTheDocument();
  });

  it("returns null when items are empty", () => {
    const { container } = render(<Carousel items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("applies custom classNames", () => {
    const { container } = render(
      <Carousel
        items={getItems()}
        className="custom-carousel"
        itemClassName="custom-item"
        autoPlayInterval={0}
      />
    );
    expect(container.firstChild).toHaveClass("custom-carousel");
    // The active item wrapper should have custom-item
    const activeItem = screen.getByText("Slide 1").parentElement;
    expect(activeItem).toHaveClass("custom-item");
  });
});
