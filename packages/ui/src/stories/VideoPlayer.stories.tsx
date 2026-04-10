import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoPlayer } from "~/components/ui/video-player";

const meta: Meta<typeof VideoPlayer> = {
  title: "UI/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[800px] p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
  args: {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    poster:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
  },
};

export const AutoPlayLoop: Story = {
  args: {
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    autoPlay: true,
    loop: true,
  },
};
