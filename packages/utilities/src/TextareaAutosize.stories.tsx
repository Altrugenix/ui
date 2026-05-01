import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextareaAutosize } from "@altrugenix/utilities";

const meta: Meta<typeof TextareaAutosize> = {
  title: "Utilities/TextareaAutosize",
  component: TextareaAutosize,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A textarea component that automatically adjusts its height based on the content entered by the user. Prevents ugly internal scrollbars while typing long messages.",
      },
    },
  },
  argTypes: {
    minRows: {
      control: "number",
      description: "Minimum number of rows to display.",
      table: { category: "Appearance" },
    },
    maxRows: {
      control: "number",
      description: "Maximum number of rows before a scrollbar appears.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextareaAutosize>;

export const Default: Story = {
  args: {
    placeholder: "Type something long to see me grow vertically...",
    minRows: 3,
    className:
      "w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
  },
  parameters: {
    docs: {
      description: {
        story: "Start typing multiple lines and watch the textarea expand.",
      },
    },
  },
};

export const WithValue: Story = {
  args: {
    defaultValue:
      "This is a pre-filled textarea.\nIt has multiple lines.\nWatch it adjust its height automatically to fit all this content without showing a scrollbar.",
    minRows: 2,
    className:
      "w-full max-w-sm rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Automatically calculates height for pre-filled defaultValue content.",
      },
    },
  },
};
