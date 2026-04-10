import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageList, ImageListItem } from "~/components/ui/image-list";

const meta: Meta<typeof ImageList> = {
  title: "UI/ImageList",
  component: ImageList,
  tags: ["autodocs"],
};

export default meta;

const IMAGES = [
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444412667106-455200c7ee33",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
];

export const Standard: StoryObj = {
  render: () => (
    <ImageList cols={3} gap={8}>
      {IMAGES.map((img, i) => (
        <ImageListItem key={i}>
          <img
            src={`${img}?w=248&fit=crop&auto=format`}
            alt={`Item ${i}`}
            className="h-full w-full object-cover"
          />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const Quilted: StoryObj = {
  render: () => (
    <ImageList cols={4} gap={8}>
      <ImageListItem cols={2} rows={2}>
        <img
          src={`${IMAGES[0]}?w=500&fit=crop&auto=format`}
          alt="Big"
          className="h-full w-full object-cover"
        />
      </ImageListItem>
      {IMAGES.slice(1).map((img, i) => (
        <ImageListItem key={i}>
          <img
            src={`${img}?w=248&fit=crop&auto=format`}
            alt={`Item ${i}`}
            className="h-full w-full object-cover"
          />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};
