import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "@altrugenix/file-upload";

const meta: Meta<typeof FileUpload> = {
  title: "UI/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[500px] p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    multiple: true,
  },
};

export const SingleFile: Story = {
  args: {
    multiple: false,
  },
};

export const ImageOnly: Story = {
  args: {
    accept: "image/*",
    multiple: true,
  },
};

export const SmallLimit: Story = {
  args: {
    maxSize: 1, // 1MB
  },
};
