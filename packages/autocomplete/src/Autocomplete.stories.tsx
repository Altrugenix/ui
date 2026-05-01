import type { Meta, StoryObj } from "@storybook/react-vite";
import { Autocomplete } from "@altrugenix/autocomplete";
import { useState } from "react";

const meta: Meta<typeof Autocomplete> = {
  title: "Forms/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A searchable input that filters and displays matching options from a predefined list. Built on top of the Input component with click-away dismissal.",
      },
    },
  },
  argTypes: {
    options: {
      description: "Array of string options to filter from.",
      table: { category: "Data" },
    },
    label: {
      description: "Label text rendered above the input.",
      table: { category: "Content" },
    },
    placeholder: {
      description: "Placeholder text when the input is empty.",
      table: { category: "Content" },
    },
    value: {
      description: "Controlled value of the input.",
      table: { category: "State" },
    },
    onChange: {
      description: "Callback triggered when the value changes.",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const frameworks = [
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Next.js",
  "Nuxt",
  "Solid",
  "Remix",
  "Astro",
  "Qwik",
];

export const Default: Story = {
  args: {
    label: "Framework",
    placeholder: "Search frameworks...",
    options: frameworks,
  },
};

export const WithFewOptions: Story = {
  args: {
    label: "Color",
    placeholder: "Pick a color...",
    options: ["Red", "Blue", "Green", "Yellow", "Purple"],
  },
};

export const ManyOptions: Story = {
  args: {
    label: "Country",
    placeholder: "Search countries...",
    options: [
      "Argentina",
      "Australia",
      "Brazil",
      "Canada",
      "China",
      "Denmark",
      "Egypt",
      "France",
      "Germany",
      "India",
      "Italy",
      "Japan",
      "Mexico",
      "Norway",
      "Philippines",
      "Spain",
      "Sweden",
      "United Kingdom",
      "United States",
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "With a large set of options, the dropdown scrolls and filtering becomes essential for quick selection.",
      },
    },
  },
};

const ControlledDemo = () => {
  const [value, setValue] = useState("");
  return (
    <div className="max-w-sm space-y-2">
      <Autocomplete
        label="Programming Language"
        placeholder="Type to search..."
        options={[
          "TypeScript",
          "JavaScript",
          "Python",
          "Rust",
          "Go",
          "C++",
          "Java",
          "Kotlin",
          "Swift",
        ]}
        value={value}
        onChange={setValue}
      />
      <p className="text-muted-foreground text-sm">
        Selected: <span className="font-mono font-semibold">{value || "—"}</span>
      </p>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "A controlled autocomplete with external state displaying the current value below.",
      },
    },
  },
};
