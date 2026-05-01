import type { Meta, StoryObj } from "@storybook/react-vite";
import { NoSsr } from "@altrugenix/utilities";

const meta: Meta<typeof NoSsr> = {
  title: "Utilities/NoSsr",
  component: NoSsr,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A utility component that prevents its children from being rendered during Server-Side Rendering (SSR). It only mounts the children on the client, useful for components that rely on `window` or `document`.",
      },
    },
  },
  argTypes: {
    fallback: {
      description:
        "Optional content to render on the server while waiting for the client to mount.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof NoSsr> = {
  args: {
    children: (
      <div className="bg-primary/10 text-primary border-primary/20 rounded-md border p-4 font-medium">
        This content is only rendered on the client.
      </div>
    ),
    fallback: (
      <div className="bg-muted text-muted-foreground rounded-md p-4 text-sm">
        Loading on the server...
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic usage showing how a fallback can be provided before hydration.",
      },
    },
  },
};
