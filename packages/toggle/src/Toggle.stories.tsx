import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle, ToggleGroup } from "@altrugenix/toggle";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "Forms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A two-state button that can be toggled on or off. Use `ToggleGroup` to create mutually exclusive or multi-select toggle groups.",
      },
    },
  },
  argTypes: {
    pressed: {
      control: "boolean",
      description: "Controlled pressed state.",
      table: { category: "State" },
    },
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Visual style of the toggle.",
      table: { category: "Appearance" },
    },
    value: {
      description: "Value used by ToggleGroup to track selection.",
      table: { category: "Data" },
    },
  },
};

export default meta;

const SingleToggleDemo = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <Toggle
      pressed={pressed}
      onClick={() => setPressed(!pressed)}
      variant="outline"
    >
      <Bold className="mr-2 h-4 w-4" />
      Bold
    </Toggle>
  );
};

export const SingleToggle: StoryObj = {
  render: () => <SingleToggleDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A standalone toggle button with controlled pressed state.",
      },
    },
  },
};

const SingleGroupDemo = () => {
  const [alignment, setAlignment] = useState<string | string[]>("left");
  return (
    <div className="space-y-4">
      <ToggleGroup value={alignment} onValueChange={(val) => setAlignment(val)}>
        <Toggle value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>
      <p className="text-muted-foreground text-sm">
        Active: <span className="font-mono font-semibold">{alignment}</span>
      </p>
    </div>
  );
};

export const SingleGroup: StoryObj = {
  render: () => <SingleGroupDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A single-select toggle group — only one option can be active at a time (like radio buttons).",
      },
    },
  },
};

const MultipleGroupDemo = () => {
  const [formats, setFormats] = useState<string | string[]>(["bold"]);
  return (
    <div className="space-y-4">
      <ToggleGroup
        type="multiple"
        value={formats}
        onValueChange={(val) => setFormats(val)}
      >
        <Toggle value="bold" aria-label="Bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle value="italic" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle value="underline" aria-label="Underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>
      <p className="text-muted-foreground text-sm">
        Active:{" "}
        <span className="font-mono font-semibold">
          {Array.isArray(formats) ? formats.join(", ") : formats || "None"}
        </span>
      </p>
    </div>
  );
};

export const MultipleGroup: StoryObj = {
  render: () => <MultipleGroupDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A multi-select toggle group — multiple options can be active simultaneously (like checkboxes).",
      },
    },
  },
};

export const TextEditorToolbar: StoryObj = {
  render: () => (
    <div className="border-border inline-flex items-center gap-1 rounded-lg border p-1">
      <ToggleGroup type="multiple" value={["bold"]}>
        <Toggle value="bold" aria-label="Bold" variant="outline">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle value="italic" aria-label="Italic" variant="outline">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle value="underline" aria-label="Underline" variant="outline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>
      <div className="bg-border mx-1 h-6 w-px" />
      <ToggleGroup value="unordered">
        <Toggle value="unordered" aria-label="Bullet list" variant="outline">
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle value="ordered" aria-label="Numbered list" variant="outline">
          <ListOrdered className="h-4 w-4" />
        </Toggle>
      </ToggleGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A text editor toolbar composing multiple toggle groups with a separator — a common pattern for rich text editors.",
      },
    },
  },
};
