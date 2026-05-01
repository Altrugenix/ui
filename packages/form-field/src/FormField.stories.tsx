import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "@altrugenix/form-field";
import { FormGroup } from "@altrugenix/form-group";
import { Input } from "@altrugenix/input";
import { Textarea } from "@altrugenix/textarea";
import { Select } from "@altrugenix/select";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof FormField> = {
  title: "Forms/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Composes a label, input, and error/helper text into a unified form field. Automatically wires `id`, `aria-describedby`, and `aria-invalid` props to the child input element.",
      },
    },
  },
  argTypes: {
    label: {
      description: "Label text displayed above the input.",
      table: { category: "Content" },
    },
    helperText: {
      description: "Informational text below the input.",
      table: { category: "Validation" },
    },
    error: {
      description: "Error message — triggers error styling when set.",
      table: { category: "Validation" },
    },
    required: {
      control: "boolean",
      description: "Shows a red asterisk next to the label.",
      table: { category: "Validation" },
    },
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="max-w-sm space-y-6">
      <FormField label="Full Name" required>
        <Input placeholder="Enter your name" />
      </FormField>
      <FormField label="Email" helperText="We'll never share your email.">
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
};

export const WithError: StoryObj = {
  render: () => (
    <div className="max-w-sm space-y-6">
      <FormField label="Username" error="Username is already taken.">
        <Input placeholder="your-username" />
      </FormField>
      <FormField label="Password" error="Must be at least 8 characters.">
        <Input type="password" placeholder="••••••••" />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Error messages displayed below each field with red styling and `aria-invalid` set on the inputs.",
      },
    },
  },
};

export const WithFormGroup: StoryObj = {
  render: () => (
    <FormGroup className="max-w-md" onSubmit={(e) => e.preventDefault()}>
      <FormField label="Name" required>
        <Input placeholder="Jane Doe" />
      </FormField>
      <FormField label="Email" required helperText="Used for account recovery.">
        <Input type="email" placeholder="jane@example.com" />
      </FormField>
      <FormField label="Bio">
        <Textarea placeholder="Tell us about yourself..." />
      </FormField>
      <Button type="submit" variant="primary">
        Create Account
      </Button>
    </FormGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A complete registration form composing FormField with FormGroup, mixing Input, Textarea, and a submit button.",
      },
    },
  },
};

export const MixedInputTypes: StoryObj = {
  render: () => (
    <div className="max-w-md space-y-6">
      <FormField label="Project Name" required>
        <Input placeholder="My Awesome Project" />
      </FormField>
      <FormField label="Category" required>
        <Select>
          <option value="">Select a category...</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile App</option>
          <option value="api">API / Backend</option>
        </Select>
      </FormField>
      <FormField label="Description" helperText="Max 500 characters.">
        <Textarea placeholder="Describe your project..." rows={4} />
      </FormField>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "FormField works with any input-like child component — Input, Select, and Textarea are all supported.",
      },
    },
  },
};
