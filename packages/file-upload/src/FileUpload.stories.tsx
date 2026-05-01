import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileUpload } from "@altrugenix/file-upload";

const meta: Meta<typeof FileUpload> = {
  title: "Forms/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[500px] p-6">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A drag-and-drop file upload component with progress tracking. Supports single/multiple files, file type filtering via accept, and max file size validation.",
      },
    },
  },
  argTypes: {
    multiple: {
      control: "boolean",
      description: "Allow selecting multiple files.",
      table: { category: "Behavior" },
    },
    maxSize: {
      control: "number",
      description: "Maximum file size in MB.",
      table: { category: "Validation" },
    },
    accept: {
      description: "MIME type filter (e.g. 'image/*', '.pdf,.doc').",
      table: { category: "Validation" },
    },
    onFilesSelected: {
      description: "Callback triggered when files are selected.",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    multiple: true,
  },
};

export const SingleFile: Story = {
  args: {
    multiple: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Restricts upload to a single file at a time.",
      },
    },
  },
};

export const ImageOnly: Story = {
  args: {
    accept: "image/*",
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Filters the file picker to only show image files (JPEG, PNG, GIF, etc.).",
      },
    },
  },
};

export const SmallLimit: Story = {
  args: {
    maxSize: 1,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A 1MB file size limit — files exceeding this will be rejected during selection.",
      },
    },
  },
};

export const DocumentUpload: Story = {
  args: {
    accept: ".pdf,.doc,.docx,.txt",
    multiple: true,
    maxSize: 5,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Configured for document uploads — accepts PDF, Word, and text files up to 5MB each.",
      },
    },
  },
};
