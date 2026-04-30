import type { Meta, StoryObj } from "@storybook/react-vite";
import { RichTextEditor } from "@altrugenix/rich-text-editor";
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

const DefaultRender = (args: React.ComponentProps<typeof RichTextEditor>) => {
  const [content, setContent] = useState("");
  return (
    <div className="space-y-4">
      <RichTextEditor {...args} onChange={setContent} />
      <div className="bg-muted rounded-lg border p-4">
        <p className="text-muted-foreground mb-2 text-xs font-bold tracking-wider uppercase">
          HTML Output:
        </p>
        <code className="block text-xs break-all">{content}</code>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <DefaultRender {...args} />,
};

export const PreFilled: Story = {
  args: {
    initialValue:
      "<h1>Hello World</h1><p>This is <b>bold</b> and this is <i>italic</i>.</p>",
  },
};
