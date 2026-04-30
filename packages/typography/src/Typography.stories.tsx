import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "@altrugenix/typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-1">
        <Typography variant="overline">Headings</Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
      </div>
      <div className="space-y-2">
        <Typography variant="overline">Body Text</Typography>
        <Typography variant="body1">
          Body 1: The quick brown fox jumps over the lazy dog. This is the
          default text style for paragraphs and long-form content.
        </Typography>
        <Typography variant="body2">
          Body 2: The quick brown fox jumps over the lazy dog. This is a
          slightly smaller text style for supporting content.
        </Typography>
      </div>
      <div className="space-y-2">
        <Typography variant="overline">Metadata</Typography>
        <div className="flex flex-col gap-1">
          <Typography variant="caption">
            Caption: Last updated 2 minutes ago
          </Typography>
          <Typography variant="overline">
            Overline: Premium Component
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const Customization: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography
        variant="h2"
        weight="black"
        align="center"
        className="text-primary italic"
      >
        Bold Center Italic
      </Typography>
      <Typography variant="body1" noWrap className="max-w-[200px] border p-2">
        This is a very long text that will eventually be truncated because
        noWrap is set to true and there is a max width.
      </Typography>
      <Typography variant="h4" gutter>
        With Gutter Bottom
      </Typography>
      <Typography variant="body1">
        The text above has a margin bottom because gutter is set to true.
      </Typography>
    </div>
  ),
};
