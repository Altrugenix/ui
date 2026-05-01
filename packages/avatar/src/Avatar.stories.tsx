import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@altrugenix/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A circular user avatar displaying an image with automatic fallback to initials when the image fails to load or is not provided.",
      },
    },
  },
  argTypes: {
    src: {
      description: "Image URL for the avatar.",
      table: { category: "Content" },
    },
    alt: {
      description:
        "Alt text for the image. Also used for fallback initials if `fallback` is not provided.",
      table: { category: "Content" },
    },
    fallback: {
      description: "Initials or text to display when the image is unavailable.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: "https://github.com/shadcn.png",
    fallback: "CN",
  },
};

export const FallbackOnly: Story = {
  args: {
    fallback: "AB",
  },
  parameters: {
    docs: {
      description: {
        story:
          "When no `src` is provided, the avatar falls back to displaying initials.",
      },
    },
  },
};

export const BrokenImage: Story = {
  args: {
    src: "https://broken-url.example/image.png",
    fallback: "JD",
  },
  parameters: {
    docs: {
      description: {
        story:
          "When the image URL fails to load, the avatar gracefully falls back to initials.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://github.com/shadcn.png"
        fallback="SM"
        className="h-8 w-8 text-xs"
      />
      <Avatar src="https://github.com/shadcn.png" fallback="MD" />
      <Avatar
        src="https://github.com/shadcn.png"
        fallback="LG"
        className="h-14 w-14 text-lg"
      />
      <Avatar
        src="https://github.com/shadcn.png"
        fallback="XL"
        className="h-20 w-20 text-xl"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Avatar sizes can be customized via className. The default is 40×40px (h-10 w-10).",
      },
    },
  },
};

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-3">
      <Avatar
        src="https://github.com/shadcn.png"
        fallback="CN"
        className="border-background border-2"
      />
      <Avatar fallback="AB" className="border-background border-2" />
      <Avatar fallback="QR" className="border-background border-2" />
      <Avatar fallback="JK" className="border-background border-2" />
      <Avatar fallback="+3" className="border-background border-2 text-xs" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Avatars overlapped with negative spacing create a stacked group — common for showing collaborators or team members.",
      },
    },
  },
};

export const FallbackVariations: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar fallback="A" />
      <Avatar fallback="JD" />
      <Avatar alt="Jane Doe" />
      <Avatar />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Fallback uses the `fallback` prop first, then first 2 chars of `alt`, and finally 'U' as the ultimate default.",
      },
    },
  },
};
