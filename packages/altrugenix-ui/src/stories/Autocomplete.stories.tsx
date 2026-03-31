import type { Meta, StoryObj } from "@storybook/react-vite";
import { Autocomplete } from "@/components/ui/autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "UI/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
  args: {
    label: "Framework",
    placeholder: "Search frameworks...",
    options: [
      "React",
      "Vue",
      "Angular",
      "Svelte",
      "Next.js",
      "Nuxt",
      "Solid",
      "Remix",
    ],
  },
};

export const WithFewOptions: Story = {
  args: {
    label: "Color",
    placeholder: "Pick a color...",
    options: ["Red", "Blue", "Green"],
  },
};
