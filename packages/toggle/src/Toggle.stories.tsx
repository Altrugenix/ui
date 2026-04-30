import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle, ToggleGroup } from "@altrugenix/toggle";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
};

export default meta;

export const SingleToggle: StoryObj = {
  render: () => {
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
  },
};

export const SingleGroup: StoryObj = {
  render: () => {
    const [alignment, setAlignment] = useState("left");
    return (
      <div className="space-y-4">
        <ToggleGroup
          value={alignment}
          onValueChange={(val) => val && setAlignment(val)}
        >
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
        <p className="text-sm">Active alignment: {alignment}</p>
      </div>
    );
  },
};

export const MultipleGroup: StoryObj = {
  render: () => {
    const [formats, setFormats] = useState(["bold"]);
    return (
      <div className="space-y-4">
        <ToggleGroup type="multiple" value={formats} onValueChange={setFormats}>
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
        <p className="text-sm">
          Active formats: {formats.join(", ") || "None"}
        </p>
      </div>
    );
  },
};
