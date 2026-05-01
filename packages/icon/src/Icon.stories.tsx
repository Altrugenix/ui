import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "@altrugenix/icon";

const meta: Meta<typeof Icon> = {
  title: "Data Display/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A wrapper around Lucide icons that renders any icon by name with configurable size. Uses the full Lucide icon library under the hood.",
      },
    },
  },
  argTypes: {
    name: {
      description: "The name of the Lucide icon (e.g. 'Home', 'Settings', 'User').",
      table: { category: "Content" },
    },
    size: {
      control: { type: "number", min: 12, max: 64 },
      description: "Size of the icon in pixels.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "Home",
    size: 24,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      {[16, 20, 24, 32, 48].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon name="Heart" size={size} />
          <span className="text-muted-foreground text-xs">{size}px</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Icons at various sizes from 16px to 48px.",
      },
    },
  },
};

export const IconGrid: Story = {
  render: () => {
    const icons = [
      "Home", "User", "Settings", "Search", "Bell", "Mail",
      "Heart", "Star", "Trash2", "Edit", "Plus", "X",
      "Check", "ChevronDown", "ChevronRight", "ArrowRight",
      "Download", "Upload", "Share2", "Copy",
      "Eye", "EyeOff", "Lock", "Unlock",
    ] as const;
    return (
      <div className="grid grid-cols-6 gap-4">
        {icons.map((name) => (
          <div key={name} className="flex flex-col items-center gap-2 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
            <Icon name={name} size={24} />
            <span className="text-muted-foreground text-[10px] font-mono">{name}</span>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A grid showing commonly used icons with their names. The full Lucide library is available.",
      },
    },
  },
};

export const WithColor: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="Heart" size={24} className="text-rose-500" />
      <Icon name="Star" size={24} className="text-amber-500" />
      <Icon name="Check" size={24} className="text-emerald-500" />
      <Icon name="AlertTriangle" size={24} className="text-orange-500" />
      <Icon name="Info" size={24} className="text-sky-500" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Icons colored with Tailwind text color utilities.",
      },
    },
  },
};
