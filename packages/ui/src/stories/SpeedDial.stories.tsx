import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpeedDial } from "~/components/ui/speed-dial";
import {
  FileText,
  Image as ImageIcon,
  Video,
  Share2,
  Printer,
  Copy,
} from "lucide-react";

const meta: Meta<typeof SpeedDial> = {
  title: "UI/SpeedDial",
  component: SpeedDial,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex h-[400px] items-end justify-center pb-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj = {
  args: {
    actions: [
      {
        icon: <Copy className="h-5 w-5" />,
        label: "Copy",
        onClick: () => alert("Copied!"),
      },
      {
        icon: <Printer className="h-5 w-5" />,
        label: "Print",
        onClick: () => alert("Printing..."),
      },
      {
        icon: <Share2 className="h-5 w-5" />,
        label: "Share",
        onClick: () => alert("Sharing..."),
      },
    ],
  },
};

export const MediaActions: StoryObj = {
  args: {
    direction: "right",
    actions: [
      {
        icon: <FileText className="h-5 w-5" />,
        label: "Document",
        onClick: () => {},
      },
      {
        icon: <ImageIcon className="h-5 w-5" />,
        label: "Image",
        onClick: () => {},
      },
      {
        icon: <Video className="h-5 w-5" />,
        label: "Video",
        onClick: () => {},
      },
    ],
  },
};
