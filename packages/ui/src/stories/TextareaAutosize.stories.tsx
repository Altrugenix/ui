import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextareaAutosize } from "@altrugenix/utilities";

const meta: Meta<typeof TextareaAutosize> = {
  title: "Utilities/TextareaAutosize",
  component: TextareaAutosize,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextareaAutosize>;

export const Default: Story = {
  args: {
    placeholder: "Type something long to see me grow...",
    minRows: 3,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue:
      "This is a pre-filled textarea.\nIt has multiple lines.\nWatch it adjust its height automatically to fit all this content without showing a scrollbar.",
    minRows: 2,
  },
};
