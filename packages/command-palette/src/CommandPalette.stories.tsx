import type { Meta, StoryObj } from "@storybook/react-vite";
import { CommandPalette } from "@altrugenix/command-palette";
import { Button } from "@altrugenix/button";
import { useState } from "react";

const meta: Meta<typeof CommandPalette> = {
  title: "Overlays/CommandPalette",
  component: CommandPalette,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A ⌘K-style command palette with fuzzy search, keyboard navigation (↑↓ + Enter), and grouped items. Opens as a centered modal overlay.",
      },
    },
  },
  argTypes: {
    isOpen: {
      description: "Controls the visibility of the palette.",
      table: { category: "State" },
    },
    onClose: {
      description: "Callback triggered on dismiss (Escape, backdrop click).",
      table: { category: "Events" },
    },
    items: {
      description:
        "Array of command items with label, group, icon, and onSelect.",
      table: { category: "Data" },
    },
    placeholder: {
      description: "Placeholder text in the search input.",
      table: { category: "Content" },
    },
  },
};

export default meta;

const defaultItems = [
  { id: "1", label: "Home", group: "Pages", onSelect: () => {} },
  { id: "2", label: "Dashboard", group: "Pages", onSelect: () => {} },
  { id: "3", label: "Settings", group: "Pages", onSelect: () => {} },
  {
    id: "4",
    label: "Create New Project",
    group: "Actions",
    onSelect: () => {},
  },
  {
    id: "5",
    label: "Invite Team Member",
    group: "Actions",
    onSelect: () => {},
  },
  { id: "6", label: "Toggle Dark Mode", group: "Actions", onSelect: () => {} },
  { id: "7", label: "Button", group: "Components", onSelect: () => {} },
  { id: "8", label: "Modal", group: "Components", onSelect: () => {} },
  { id: "9", label: "Tooltip", group: "Components", onSelect: () => {} },
];

const PaletteDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open Command Palette (⌘K)
      </Button>
      <CommandPalette
        isOpen={open}
        onClose={() => setOpen(false)}
        items={defaultItems}
      />
    </>
  );
};

export const Default: StoryObj = {
  render: () => <PaletteDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Click the button to open the palette. Use arrow keys to navigate and Enter to select.",
      },
    },
  },
};

const CustomPlaceholderDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Search Documentation
      </Button>
      <CommandPalette
        isOpen={open}
        onClose={() => setOpen(false)}
        items={[
          {
            id: "1",
            label: "Getting Started",
            group: "Guides",
            onSelect: () => {},
          },
          {
            id: "2",
            label: "Installation",
            group: "Guides",
            onSelect: () => {},
          },
          { id: "3", label: "Theming", group: "Guides", onSelect: () => {} },
          {
            id: "4",
            label: "Changelog",
            group: "Reference",
            onSelect: () => {},
          },
          {
            id: "5",
            label: "API Reference",
            group: "Reference",
            onSelect: () => {},
          },
        ]}
        placeholder="Search docs, components, or guides..."
      />
    </>
  );
};

export const CustomPlaceholder: StoryObj = {
  render: () => <CustomPlaceholderDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A documentation search palette with custom placeholder text and different item groups.",
      },
    },
  },
};
