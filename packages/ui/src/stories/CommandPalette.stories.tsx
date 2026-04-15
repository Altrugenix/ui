import type { Meta, StoryObj } from "@storybook/react-vite";
import { CommandPalette } from "~/components/navigation/command-palette";
import { Button } from "@altrugenix/button";
import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Settings,
  User,
  Mail,
  Layout,
  Code,
  FileText,
  ExternalLink,
  Calendar,
} from "lucide-react";

const meta: Meta<typeof CommandPalette> = {
  title: "Navigation/CommandPalette",
  component: CommandPalette,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setIsOpen((open) => !open);
        }
      };
      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, []);

    const items = [
      {
        id: "new-project",
        label: "Create New Project",
        group: "Actions",
        icon: <Plus className="h-4 w-4" />,
        shortcut: ["⌘", "N"],
        onSelect: () => alert("Creating new project..."),
      },
      {
        id: "search-docs",
        label: "Search Documentation",
        group: "Actions",
        icon: <Search className="h-4 w-4" />,
        shortcut: ["⌘", "D"],
        onSelect: () => alert("Opening docs..."),
      },
      {
        id: "profile",
        label: "View Profile",
        group: "Account",
        icon: <User className="h-4 w-4" />,
        onSelect: () => alert("Viewing profile..."),
      },
      {
        id: "settings",
        label: "Settings",
        group: "Account",
        icon: <Settings className="h-4 w-4" />,
        shortcut: ["⌘", ","],
        onSelect: () => alert("Opening settings..."),
      },
      {
        id: "dashboard",
        label: "Dashboard",
        group: "Pages",
        icon: <Layout className="h-4 w-4" />,
        onSelect: () => alert("Navigating to Dashboard"),
      },
      {
        id: "components",
        label: "Components Library",
        group: "Pages",
        icon: <Code className="h-4 w-4" />,
        onSelect: () => alert("Navigating to Components"),
      },
      {
        id: "github",
        label: "GitHub Repository",
        group: "Social",
        icon: <ExternalLink className="h-4 w-4" />,
        onSelect: () =>
          window.open("https://github.com/altrugenix/ui", "_blank"),
      },
      {
        id: "twitter",
        label: "Twitter / X",
        group: "Social",
        icon: <ExternalLink className="h-4 w-4" />,
        onSelect: () => alert("Opening Twitter..."),
      },
    ];

    return (
      <div className="flex flex-col items-center justify-center gap-6 p-20">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold">Command Palette</h2>
          <p className="text-muted-foreground">
            Press{" "}
            <kbd className="rounded border bg-muted px-1.5 font-sans font-medium text-muted-foreground opacity-100">
              ⌘K
            </kbd>{" "}
            to open the command palette.
          </p>
        </div>
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="rounded-full px-8"
        >
          Open Palette
        </Button>
        <CommandPalette
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={items}
        />
      </div>
    );
  },
};

export const LargeDataSet: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = Array.from({ length: 50 }).map((_, i) => ({
      id: `item-${i}`,
      label: `Result Item ${i + 1}`,
      group: i < 25 ? "Group A" : "Group B",
      icon:
        i % 3 === 0 ? (
          <FileText className="h-4 w-4" />
        ) : i % 3 === 1 ? (
          <Mail className="h-4 w-4" />
        ) : (
          <Calendar className="h-4 w-4" />
        ),
      onSelect: () => alert(`Selected item ${i + 1}`),
    }));

    return (
      <div className="flex flex-col items-center justify-center gap-6 p-20">
        <Button onClick={() => setIsOpen(true)}>Open with 50 Items</Button>
        <CommandPalette
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={items}
          placeholder="Filter 50+ items..."
        />
      </div>
    );
  },
};
