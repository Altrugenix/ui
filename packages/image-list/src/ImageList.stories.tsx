import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageList, ImageListItem } from "@altrugenix/image-list";

const meta: Meta<typeof ImageList> = {
  title: "Data Display/ImageList",
  component: ImageList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A CSS grid-based layout for displaying collections of images. Supports configuring total columns and gap, with individual items spanning multiple columns or rows to create varied quilt-like patterns.",
      },
    },
  },
  argTypes: {
    cols: {
      control: "number",
      description: "Total number of grid columns.",
      table: { category: "Layout" },
    },
    gap: {
      control: "number",
      description: "Gap between images in pixels.",
      table: { category: "Layout" },
    },
  },
};

export default meta;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=200&h=200&fit=crop",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=200&fit=crop",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=200&h=200&fit=crop",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=200&h=200&fit=crop",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=200&h=200&fit=crop",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop",
    title: "Honey",
  },
];

export const Standard: StoryObj = {
  render: () => (
    <div className="max-w-[500px]">
      <ImageList cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A standard uniform grid image list.",
      },
    },
  },
};

const quiltedData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=400&fit=crop",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=200&fit=crop",
    title: "Burger",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=200&h=200&fit=crop",
    title: "Camera",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=400&h=200&fit=crop",
    title: "Coffee",
    rows: 1,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=200&h=200&fit=crop",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop",
    title: "Honey",
    rows: 1,
    cols: 1,
  },
];

export const Quilted: StoryObj = {
  render: () => (
    <div className="max-w-[600px]">
      <ImageList cols={4} gap={8}>
        {quiltedData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols} rows={item.rows}>
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full rounded-md object-cover"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A quilted image list where individual items span multiple columns and rows to create emphasis.",
      },
    },
  },
};
