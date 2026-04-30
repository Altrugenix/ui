import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormField } from "@altrugenix/form-field";
import { FormGroup } from "@altrugenix/form-group";
import { Input } from "@altrugenix/input";
import { Textarea } from "@altrugenix/textarea";
import { Button } from "@altrugenix/button";

const meta: Meta<typeof FormField> = {
  title: "Composites/FormField",
  component: FormField,
  tags: ["autodocs"],
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
};
