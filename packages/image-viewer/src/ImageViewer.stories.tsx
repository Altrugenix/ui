import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageViewer } from "@altrugenix/image-viewer";
import { useState } from "react";

const meta: Meta<typeof ImageViewer> = {
  title: "Overlays/ImageViewer",
  component: ImageViewer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A full-screen modal image viewer (lightbox). Features drag-to-pan, scroll-to-zoom, maximize/restore toggles, and click-away to dismiss. Powered by Framer Motion.",
      },
    },
  },
  argTypes: {
    src: {
      description: "High-resolution image URL to view.",
      table: { category: "Media" },
    },
    isOpen: {
      description: "Controls visibility.",
      table: { category: "State" },
    },
    onClose: {
      description: "Callback triggered to close the viewer.",
      table: { category: "Events" },
    },
  },
};

export default meta;

const ViewerDemo = () => {
  const [open, setOpen] = useState(false);
  const imgUrl = "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1600&q=80";
  const thumbUrl = "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80";

  return (
    <div className="p-10">
      <p className="mb-4 text-sm font-medium">Click the image to expand:</p>
      <button 
        onClick={() => setOpen(true)}
        className="overflow-hidden rounded-lg outline-none ring-primary transition-all hover:ring-2"
      >
        <img src={thumbUrl} alt="Thumbnail" className="h-48 w-72 object-cover" />
      </button>

      <ImageViewer
        isOpen={open}
        onClose={() => setOpen(false)}
        src={imgUrl}
        alt="High resolution landscape"
      />
    </div>
  );
};

export const Default: StoryObj = {
  render: () => <ViewerDemo />,
  parameters: {
    docs: {
      description: {
        story: "Click the thumbnail to open the lightbox. Inside, you can double-click to zoom, drag to pan, or click the backdrop to close.",
      },
    },
  },
};
