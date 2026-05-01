import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoPlayer } from "@altrugenix/video-player";

const meta: Meta<typeof VideoPlayer> = {
  title: "Media/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[800px] p-6">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A custom video player with play/pause, seek bar, volume control, mute toggle, and fullscreen support. Features auto-hiding controls and a cinematic play overlay.",
      },
    },
  },
  argTypes: {
    src: {
      description: "Video source URL.",
      table: { category: "Media" },
    },
    poster: {
      description: "Thumbnail image displayed before playback starts.",
      table: { category: "Media" },
    },
    autoPlay: {
      control: "boolean",
      description: "Start playback automatically on mount.",
      table: { category: "Behavior" },
    },
    loop: {
      control: "boolean",
      description: "Restart playback when the video ends.",
      table: { category: "Behavior" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

const videoUrl =
  "https://avtshare01.rz.tu-ilmenau.de/avt-vqdb-uhd-1/test_1/segments/bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.mp4";
const thumbnailUrl =
  "https://telecommunication-telemedia-assessment.github.io/AVT-VQDB-UHD-1/thumbs/new/test_1_bigbuck_bunny_8bit_15000kbps_1080p_60.0fps_h264.jpg";

export const Default: Story = {
  args: {
    src: videoUrl,
    poster: thumbnailUrl,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A standard video player with poster image. Click the play button or video area to start playback.",
      },
    },
  },
};

export const AutoPlayLoop: Story = {
  args: {
    src: videoUrl,
    autoPlay: true,
    loop: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A looping auto-play video — suitable for hero sections and background media.",
      },
    },
  },
};

export const NoPoster: Story = {
  args: {
    src: videoUrl,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A video without a poster image — the first frame of the video is shown instead.",
      },
    },
  },
};

export const CompactPlayer: Story = {
  render: () => (
    <div className="max-w-[400px]">
      <VideoPlayer src={videoUrl} poster={thumbnailUrl} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A compact-sized player at 400px width — controls adapt to the available space.",
      },
    },
  },
};
