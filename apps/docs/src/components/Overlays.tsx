import { useMemo } from "react";
import {
  Modal,
  Drawer,
  CommandPalette,
  Button,
  Text,
  Heading,
  Divider,
  Input,
  Switch,
  Checkbox,
  useToast,
} from "@altrugenix/ui";
import {
  Layout,
  Box,
  Plus,
  Search,
  User,
  Settings,
  Mail,
  Shield,
  Bell,
} from "lucide-react";

interface OverlaysProps {
  isModalOpen: boolean;
  onModalClose: () => void;
  isDrawerOpen: boolean;
  onDrawerClose: () => void;
  isPaletteOpen: boolean;
  onPaletteClose: () => void;
  onOpenModal: () => void;
  onOpenDrawer: () => void;
}

export function Overlays({
  isModalOpen,
  onModalClose,
  isDrawerOpen,
  onDrawerClose,
  isPaletteOpen,
  onPaletteClose,
  onOpenModal,
  onOpenDrawer,
}: OverlaysProps) {
  const { toast } = useToast();

  const paletteItems = useMemo(
    () => [
      {
        id: "1",
        label: "Dashboard",
        group: "General",
        icon: <Layout className="mr-2 h-4 w-4" />,
        onSelect: () =>
          toast({
            type: "info",
            title: "Navigating",
            description: "Taking you to Dashboard...",
          }),
      },
      {
        id: "2",
        label: "Projects",
        group: "General",
        icon: <Box className="mr-2 h-4 w-4" />,
        onSelect: () =>
          toast({
            type: "info",
            title: "Navigating",
            description: "Opening Projects...",
          }),
      },
      {
        id: "3",
        label: "New Task",
        group: "Actions",
        icon: <Plus className="mr-2 h-4 w-4" />,
        onSelect: () => onOpenModal(),
      },
      {
        id: "4",
        label: "Search Docs",
        group: "Actions",
        icon: <Search className="mr-2 h-4 w-4" />,
        onSelect: () => console.log("Searching..."),
      },
      {
        id: "5",
        label: "Profile",
        group: "Account",
        icon: <User className="mr-2 h-4 w-4" />,
        onSelect: () => console.log("Profile..."),
      },
      {
        id: "6",
        label: "Settings",
        group: "Account",
        icon: <Settings className="mr-2 h-4 w-4" />,
        onSelect: () => onOpenDrawer(),
      },
    ],
    [toast, onOpenModal, onOpenDrawer]
  );

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={onModalClose} title="Get Started">
        <div className="space-y-4 py-6">
          <Text>Create your account to start building with Altrugenix.</Text>
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            leftAddon={<Mail className="h-4 w-4 text-muted-foreground" />}
          />
          <Button className="mt-4 w-full">Create Account</Button>
        </div>
      </Modal>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
        title="Configuration"
      >
        <div className="flex h-full flex-col">
          <div className="flex-1 space-y-6 p-6">
            <div className="space-y-4">
              <Heading level={4} className="flex items-center gap-2 text-base">
                <Shield className="h-4 w-4" /> Security
              </Heading>
              <Switch label="Two-Factor Authentication" defaultChecked />
              <Switch label="API Access" />
            </div>
            <Divider />
            <div className="space-y-4">
              <Heading level={4} className="flex items-center gap-2 text-base">
                <Bell className="h-4 w-4" /> Notifications
              </Heading>
              <Checkbox label="Push Notifications" defaultChecked />
              <Checkbox label="Weekly Reports" />
            </div>
          </div>
          <div className="flex gap-3 border-t bg-muted/5 p-6">
            <Button className="flex-1">Save Changes</Button>
            <Button variant="outline" onClick={onDrawerClose}>
              Cancel
            </Button>
          </div>
        </div>
      </Drawer>

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={onPaletteClose}
        items={paletteItems}
      />
    </>
  );
}
