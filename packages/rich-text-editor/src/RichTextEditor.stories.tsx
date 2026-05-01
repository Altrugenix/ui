import type { Meta, StoryObj } from "@storybook/react-vite";
import { RichTextEditor } from "@altrugenix/rich-text-editor";
import { useState } from "react";

const meta: Meta<typeof RichTextEditor> = {
  title: "Forms/RichTextEditor",
  component: RichTextEditor,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A WYSIWYG rich text editor with standard formatting controls (bold, italic, lists, etc). Uses a native `contenteditable` element under the hood.",
      },
    },
  },
  argTypes: {
    initialValue: {
      description: "Initial HTML content.",
      table: { category: "Data" },
    },
    onChange: {
      description: "Callback triggered with raw HTML when content changes.",
      table: { category: "Events" },
    },
    placeholder: {
      description: "Text shown when the editor is empty.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  render: () => {
    const [html, setHtml] = useState("");
    return (
      <div className="space-y-4 max-w-2xl">
        <RichTextEditor onChange={setHtml} />
        <div className="bg-muted/30 rounded-lg p-4 font-mono text-xs text-muted-foreground break-all">
          {html || "HTML Output will appear here..."}
        </div>
      </div>
    );
  },
};

export const PreFilled: Story = {
  render: () => {
    const [html, setHtml] = useState("<p>Hello <b>World</b>!</p><ul><li>One</li><li>Two</li></ul>");
    return (
      <div className="max-w-2xl">
        <RichTextEditor initialValue={html} onChange={setHtml} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Editor initialized with HTML content.",
      },
    },
  },
};

export const CommentBox: Story = {
  render: () => (
    <div className="max-w-xl space-y-3 rounded-xl border p-4 shadow-sm">
      <h3 className="font-semibold">Leave a comment</h3>
      <RichTextEditor placeholder="What are your thoughts?" />
      <div className="flex justify-end">
        <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium">
          Post Comment
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A real-world comment box composition.",
      },
    },
  },
};
