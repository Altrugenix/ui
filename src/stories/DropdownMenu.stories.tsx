import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/navigation/dropdown-menu";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof DropdownMenu> = {
  title: "Navigation/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Open Menu</Button>,
    children: (
      <>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>Sign out</DropdownMenuItem>
      </>
    ),
  },
};

export const AlignRight: Story = {
  render: () => (
    <div className="flex justify-end">
      <DropdownMenu
        trigger={<Button variant="outline">Right-aligned</Button>}
        align="right"
      >
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
        <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
      </DropdownMenu>
    </div>
  ),
};
