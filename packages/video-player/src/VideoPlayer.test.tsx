import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { VideoPlayer } from "./VideoPlayer";
import "@testing-library/jest-dom";

describe("VideoPlayer", () => {
  const src = "test-video.mp4";
  const poster = "test-poster.jpg";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the video element with correct src and poster", () => {
    const { container } = render(<VideoPlayer src={src} poster={poster} />);
    const video = container.querySelector("video");
    expect(video).toHaveAttribute("src", src);
    expect(video).toHaveAttribute("poster", poster);
  });

  it("renders play overlay when not playing", () => {
    const { container } = render(<VideoPlayer src={src} />);
    // The play overlay is the div with bg-black/40
    const overlay = container.querySelector(".bg-black\\/40");
    expect(overlay).toBeInTheDocument();
  });

  it("toggles play/pause when video is clicked", () => {
    const { container } = render(<VideoPlayer src={src} />);
    const video = container.querySelector("video")!;

    const playSpy = vi.spyOn(video, "play");
    const pauseSpy = vi.spyOn(video, "pause");

    fireEvent.click(video);
    expect(playSpy).toHaveBeenCalled();

    // After clicking, isPlaying becomes true
    fireEvent.click(video);
    expect(pauseSpy).toHaveBeenCalled();
  });

  it("toggles play/pause when control button is clicked", () => {
    const { container } = render(<VideoPlayer src={src} />);
    const video = container.querySelector("video")!;
    const playSpy = vi.spyOn(video, "play");

    // The buttons in the controls - the first one is play/pause
    const buttons = container.querySelectorAll("button");
    fireEvent.click(buttons[0]);

    expect(playSpy).toHaveBeenCalled();
  });

  it("toggles mute when mute button is clicked", () => {
    const { container } = render(<VideoPlayer src={src} />);
    const video = container.querySelector("video")!;

    const buttons = container.querySelectorAll("button");
    // Mute button is the second one
    fireEvent.click(buttons[1]);
    expect(video.muted).toBe(true);

    fireEvent.click(buttons[1]);
    expect(video.muted).toBe(false);
  });

  it("shows controls on mouse move", () => {
    const { container } = render(<VideoPlayer src={src} />);
    const playerContainer = container.firstChild as HTMLElement;

    fireEvent.mouseMove(playerContainer);
    const controls = container.querySelector(".bg-gradient-to-t");
    expect(controls).toHaveClass("opacity-100");
  });

  it("applies autoPlay and loop props", () => {
    const { container } = render(<VideoPlayer src={src} autoPlay loop />);
    const video = container.querySelector("video")!;
    expect(video.autoplay).toBe(true);
    expect(video.loop).toBe(true);
  });

  it("handles volume change", () => {
    const { container } = render(<VideoPlayer src={src} />);
    const video = container.querySelector("video")!;
    const volumeSlider = container.querySelectorAll("input[type='range']")[1];
    
    fireEvent.change(volumeSlider, { target: { value: "0.5" } });
    expect(video.volume).toBe(0.5);
  });

  it("handles seek", () => {
    const { container } = render(<VideoPlayer src={src} />);
    const video = container.querySelector("video")!;
    const progressSlider = container.querySelectorAll("input[type='range']")[0];
    
    fireEvent.change(progressSlider, { target: { value: "50" } });
    expect(video.currentTime).toBe(50);
  });

  it("applies custom className", () => {
    const { container } = render(<VideoPlayer src={src} className="custom-player" />);
    expect(container.firstChild).toHaveClass("custom-player");
  });
});
