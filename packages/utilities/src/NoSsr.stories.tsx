import type { Meta, StoryObj } from "@storybook/react-vite";
import { NoSsr } from "@altrugenix/utilities";

export default {
  title: "Utilities/NoSsr",
  component: NoSsr,
  tags: ["autodocs"],
} satisfies Meta<typeof NoSsr>;

export const Default: StoryObj<typeof NoSsr> = {
  args: {
    children: <div>This content is only rendered on the client.</div>,
    fallback: <div>Loading on the server...</div>,
  },
};
