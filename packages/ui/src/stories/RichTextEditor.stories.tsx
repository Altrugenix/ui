import type { Meta, StoryObj } from "@storybook/react-vite";
import { RichTextEditor } from "~/components/ui/rich-text-editor";
import { useState } from "react";

const meta: Meta<typeof RichTextEditor> = {
  title: "UI/RichTextEditor",
  component: RichTextEditor,
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
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  render: (args) => {
    const [content, setContent] = useState("");
    return (
      <div className="space-y-4">
        <RichTextEditor {...args} onChange={setContent} />
        <div className="rounded-lg border bg-muted p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            HTML Output:
          </p>
          <code className="block break-all text-xs">{content}</code>
        </div>
      </div>
    );
  },
};

export const PreFilled: Story = {
  args: {
    initialValue:
      "<h1>Hello World</h1><p>This is <b>bold</b> and this is <i>italic</i>.</p>",
  },
};
