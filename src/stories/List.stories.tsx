import type { Meta, StoryObj } from "@storybook/react-vite";
import { List, ListItem } from "@/components/ui/list";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Star, User } from "lucide-react";

const meta: Meta<typeof List> = {
  title: "Data Display/List",
  component: List,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Simple: Story = {
  render: () => (
    <List divided className="rounded-lg border">
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
};

export const WithLeadingAndTrailing: Story = {
  render: () => (
    <List divided className="rounded-lg border">
      <ListItem
        leading={<Avatar fallback="JD" />}
        secondary="jane@example.com"
        trailing={<Badge variant="success">Active</Badge>}
        interactive
      >
        Jane Doe
      </ListItem>
      <ListItem
        leading={<Avatar fallback="AB" />}
        secondary="alan@example.com"
        trailing={<Badge variant="warning">Pending</Badge>}
        interactive
      >
        Alan Baker
      </ListItem>
      <ListItem
        leading={<Avatar fallback="SM" />}
        secondary="sarah@example.com"
        trailing={<Badge variant="outline">Inactive</Badge>}
        interactive
      >
        Sarah Miller
      </ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <List divided className="rounded-lg border">
      <ListItem leading={<User className="h-4 w-4" />} interactive>
        Profile
      </ListItem>
      <ListItem leading={<Mail className="h-4 w-4" />} interactive>
        Messages
      </ListItem>
      <ListItem leading={<Star className="h-4 w-4" />} interactive>
        Favorites
      </ListItem>
    </List>
  ),
};
