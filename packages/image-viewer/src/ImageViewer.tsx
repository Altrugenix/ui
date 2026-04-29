import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@altrugenix/core";

export interface ImageViewerProps {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const ImageViewerContent: React.FC<Omit<ImageViewerProps, "isOpen">> = ({
  src,
  alt,
  onClose,
  className,
}) => {
  const [scale, setScale] = useState(1);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.5, 3));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.5, 0.5));
  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
    setScale(isMaximized ? 1 : 1.5);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Backdrop/Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 cursor-zoom-out"
        onClick={onClose}
      />

      {/* Header Controls */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <button
          onClick={handleZoomIn}
          className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          title="Zoom In"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
        <button
          onClick={handleZoomOut}
          className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          title="Zoom Out"
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <button
          onClick={toggleMaximize}
          className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          title={isMaximized ? "Minimize" : "Maximize"}
        >
          {isMaximized ? (
            <Minimize2 className="h-5 w-5" />
          ) : (
            <Maximize2 className="h-5 w-5" />
          )}
        </button>
        <button
          onClick={onClose}
          className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          title="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Image Container */}
      <motion.div
        layoutId={src}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative z-0 max-h-[90vh] max-w-[90vw] touch-none"
      >
        <motion.img
          src={src}
          alt={alt}
          animate={{ scale }}
          drag={scale > 1}
          dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
          className={cn(
            "h-full w-full select-none object-contain",
            scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default",
            className
          )}
        />
      </motion.div>

      {/* Footer Info */}
      {alt && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white/70">
          {alt}
        </div>
      )}
    </div>
  );
};

export const ImageViewer: React.FC<ImageViewerProps> = ({
  isOpen,
  ...props
}) => {
  return (
    <AnimatePresence>
      {isOpen && <ImageViewerContent {...props} />}
    </AnimatePresence>
  );
};
