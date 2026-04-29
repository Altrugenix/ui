import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
} from "lucide-react";
import { cn } from "@altrugenix/core";
import { Slider } from "@altrugenix/slider";

export interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  className,
  autoPlay = false,
  loop = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      const time = value[0];
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const mute = !isMuted;
      setIsMuted(mute);
      videoRef.current.muted = mute;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        "group relative aspect-video overflow-hidden rounded-xl bg-black shadow-2xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        className="h-full w-full cursor-pointer"
        onClick={togglePlay}
        playsInline
      />

      {/* Play Overlay (appears on pause or initial load) */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40"
          onClick={togglePlay}
        >
          <div className="rounded-full bg-white/20 p-4 backdrop-blur-md transition-transform hover:scale-110 active:scale-95">
            <Play className="h-10 w-10 fill-white text-white" />
          </div>
        </div>
      )}

      {/* Controls Container */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 transition-opacity duration-300",
          showControls ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {/* Progress Bar */}
        <div className="mb-4">
          <Slider
            value={currentTime}
            max={duration || 100}
            step={0.1}
            onChange={(e) => handleSeek([parseFloat(e.target.value)])}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="hover:text-primary text-white transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <Play className="h-5 w-5 fill-current" />
              )}
            </button>

            <div className="group/volume flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="hover:text-primary text-white transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <div className="w-0 overflow-hidden transition-all duration-300 group-hover/volume:w-20">
                <Slider
                  value={isMuted ? 0 : volume}
                  max={1}
                  step={0.01}
                  onChange={(e) =>
                    handleVolumeChange([parseFloat(e.target.value)])
                  }
                  className="w-20"
                />
              </div>
            </div>

            <div className="text-xs font-medium tabular-nums text-white/80">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-white/80 transition-colors hover:text-white">
              <Settings className="h-4 w-4" />
            </button>
            <button
              onClick={handleFullscreen}
              className="text-white/80 transition-colors hover:text-white"
            >
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
