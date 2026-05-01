import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@altrugenix/select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A native HTML select wrapper with label, error, and helper text support. Provides consistent styling with the rest of the form field components.",
      },
    },
  },
  argTypes: {
    label: {
      description: "Label text rendered above the select.",
      table: { category: "Content" },
    },
    error: {
      control: "boolean",
      description: "Applies error styling to the select.",
      table: { category: "Validation" },
    },
    errorText: {
      description: "Error message displayed below the select.",
      table: { category: "Validation" },
    },
    disabled: {
      control: "boolean",
      description: "Disables the select element.",
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Country",
    children: (
      <>
        <option value="">Select a country...</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
        <option value="jp">Japan</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Role",
    error: true,
    errorText: "Please select a role.",
    children: (
      <>
        <option value="">Choose...</option>
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "The error state highlights the select with a red border and displays validation feedback below.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Plan",
    disabled: true,
    children: <option>Enterprise</option>,
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Select label="Default">
        <option value="">Choose a framework...</option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
      </Select>
      <Select label="With Error" error errorText="Selection is required.">
        <option value="">Choose...</option>
        <option value="a">Option A</option>
      </Select>
      <Select label="Disabled" disabled>
        <option>Locked option</option>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Overview of all select states in a single view.",
      },
    },
  },
};
