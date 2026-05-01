import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@altrugenix/switch";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toggle switch for boolean settings. Provides an alternative to checkboxes for on/off states with a more visual sliding interaction.",
      },
    },
  },
  argTypes: {
    label: {
      description: "Text label displayed next to the switch.",
      table: { category: "Content" },
    },
    disabled: {
      control: "boolean",
      description: "Disables the switch when true.",
      table: { category: "State" },
    },
    defaultChecked: {
      control: "boolean",
      description: "Initial checked state for uncontrolled usage.",
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Dark mode",
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Switch rendered in the checked/on state by default.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Feature locked",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Always on",
    disabled: true,
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A disabled switch in the checked state — useful for indicating a locked-on feature.",
      },
    },
  },
};

export const SettingsPanel: Story = {
  render: () => (
    <div className="w-[360px] space-y-5">
      <h3 className="text-foreground text-base font-semibold">
        Notification Preferences
      </h3>
      <div className="border-border space-y-4 rounded-lg border p-4">
        <Switch label="Push notifications" defaultChecked />
        <Switch label="Email digest" defaultChecked />
        <Switch label="SMS alerts" />
        <Switch label="Marketing emails" disabled />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple switches arranged in a realistic settings panel layout.",
      },
    },
  },
};
