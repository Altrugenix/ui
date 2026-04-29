import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { VideoPlayer } from "./VideoPlayer";

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
    // Controls should have opacity-100
    const controls = container.querySelector(".bg-gradient-to-t");
    expect(controls).toHaveClass("opacity-100");
  });
});
