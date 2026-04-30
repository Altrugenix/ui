import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageViewer } from "@altrugenix/image-viewer";
import { Button } from "@altrugenix/button";
import { useState } from "react";

const meta: Meta<typeof ImageViewer> = {
  title: "UI/ImageViewer",
  component: ImageViewer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageViewer>;

const ImageViewerStory1Render = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <div className="group relative aspect-video w-[400px] overflow-hidden rounded-xl border">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
          alt="Lake"
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <Button variant="secondary" onClick={() => setIsOpen(true)}>
            View Large
          </Button>
        </div>
      </div>

      <ImageViewer
        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
        alt="Beautiful Lake View"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <ImageViewerStory1Render />,
};
