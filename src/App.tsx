import { useState } from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { cn } from "@/lib/utils/cn";
import { ToastProvider, useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select } from "@/components/ui/select";
import { Autocomplete } from "@/components/ui/autocomplete";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Icon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Avatar } from "@/components/ui/avatar";
import { DatePicker } from "@/components/ui/date-picker";
import { FileUpload } from "@/components/ui/file-upload";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { BarChart } from "@/components/ui/charts";
import { CalendarView } from "@/components/ui/calendar-view";
import { KanbanBoard } from "@/components/ui/kanban";
import { DataGrid } from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { Alert } from "@/components/composites/alert";
import { ProgressBar } from "@/components/composites/progress-bar";
import { Tabs } from "@/components/composites/tabs";
import { Breadcrumbs } from "@/components/composites/breadcrumbs";
import { Pagination } from "@/components/composites/pagination";
import { Stepper } from "@/components/composites/stepper";
import { Spinner } from "@/components/composites/spinner";
import { Skeleton } from "@/components/composites/skeleton";
import { Divider } from "@/components/layout/divider";
import { Tooltip } from "@/components/overlays/tooltip";
import { Drawer } from "@/components/navigation/drawer";
import {
  Bell,
  Search,
  Plus,
  Settings,
  User,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Cpu,
  Layout,
  CheckCircle2,
  Type,
  ToggleLeft,
  ShieldAlert,
  BarChart3,
  Layers,
  PanelRight,
  Copy,
  Monitor,
  Smartphone,
} from "lucide-react";
import { CommandPalette } from "@/components/navigation/command-palette";
import type { CommandPaletteItem } from "@/components/navigation/command-palette";
import React from "react";
import { useClipboard, useMediaQuery } from "@/hooks";

const DemoApp = () => {
  const { toast } = useToast();
  const { copy } = useClipboard();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState(3);

  // Command Palette Items
  const paletteItems: CommandPaletteItem[] = [
    {
      id: "new-project",
      label: "Create New Project",
      group: "Actions",
      icon: <Plus className="h-4 w-4" />,
      shortcut: ["⌘", "N"],
      onSelect: () =>
        toast({
          type: "success",
          title: "New Project",
          description: "Project creation initiated.",
        }),
    },
    {
      id: "search-docs",
      label: "Search Documentation",
      group: "Actions",
      icon: <Search className="h-4 w-4" />,
      shortcut: ["⌘", "D"],
      onSelect: () =>
        toast({
          type: "success",
          title: "Docs",
          description: "Opening documentation...",
        }),
    },
    {
      id: "profile",
      label: "View Profile",
      group: "Account",
      icon: <User className="h-4 w-4" />,
      onSelect: () =>
        toast({
          type: "info",
          title: "Profile",
          description: "Navigating to profile.",
        }),
    },
    {
      id: "settings",
      label: "Settings",
      group: "Account",
      icon: <Settings className="h-4 w-4" />,
      shortcut: ["⌘", ","],
      onSelect: () =>
        toast({
          type: "info",
          title: "Settings",
          description: "Opening settings panel.",
        }),
    },
    {
      id: "github",
      label: "GitHub Repository",
      group: "Social",
      icon: <ExternalLink className="h-4 w-4" />,
      onSelect: () => window.open("https://github.com/altrugenix/ui", "_blank"),
    },
    {
      id: "twitter",
      label: "Twitter / X",
      group: "Social",
      icon: <ExternalLink className="h-4 w-4" />,
      onSelect: () => alert("Opening Twitter..."),
    },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // Keyboard shortcut for Command Palette
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsPaletteOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-1.5">
              <Cpu className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Altrugenix UI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              as="a"
              href="https://github.com/altrugenix/ui"
              className="rounded-full"
            >
              <Code className="h-5 w-5" />
            </Button>
            <Button
              radius="full"
              className="px-6 font-semibold"
              as="a"
              href="https://altrugenix.github.io/storybook"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => setIsPaletteOpen(true)}
              title="Command Palette (⌘K)"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container space-y-24 py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center space-y-8 text-center duration-1000 animate-in fade-in slide-in-from-bottom-8">
          <Badge className="gap-2 rounded-full border-orange-500/20 bg-orange-500/10 px-3 py-1 font-bold uppercase tracking-wider text-orange-500 shadow-none hover:bg-orange-500/20">
            <CheckCircle2 className="h-3 w-3" /> In Development
          </Badge>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            Build stunning interfaces with{" "}
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-primary text-transparent">
              Altrugenix UI
            </span>
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            A premium, scalable, and accessible component library built with
            React, Tailwind CSS, and Framer Motion. Designed for performance and
            built for developers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-14 rounded-full px-10 text-lg shadow-lg shadow-primary/20"
              as="a"
              href="https://altrugenix.github.io/storybook"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full px-10 text-lg"
              as="a"
              href="https://altrugenix.github.io/storybook"
            >
              Documentation
            </Button>
          </div>
        </section>

        {/* Components Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Buttons Showcase */}
          <Card hover>
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-orange-500/10 p-2">
                <Layout className="h-5 w-5 text-orange-500" />
              </div>
              <CardTitle>Interactive Elements</CardTitle>
              <CardDescription>
                Core actions and their variants.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button isLoading>Processing</Button>
              </div>

              <div className="space-y-4 border-t pt-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Status Badges
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Controls */}
          <Card hover className="md:col-span-2">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-green-500/10 p-2">
                <ToggleLeft className="h-5 w-5 text-green-500" />
              </div>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>
                Comprehensive set of atomic form inputs and selectors.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Input label="Standard Input" placeholder="Type here..." />
                <Select label="Select Choice">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Select>
                <Textarea
                  label="Message"
                  placeholder="Type your message here..."
                  className="col-span-full md:col-span-1"
                />
                <Autocomplete
                  label="Framework"
                  options={[
                    "React",
                    "Vue",
                    "Angular",
                    "Svelte",
                    "Next.js",
                    "Nuxt",
                    "Solid",
                  ]}
                  placeholder="Search frameworks..."
                  className="col-span-full md:col-span-1"
                />
                <DatePicker
                  value={date}
                  onChange={setDate}
                  className="col-span-full md:col-span-1"
                />

                <div className="col-span-full pt-4">
                  <header className="mb-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                      Advanced Upload
                    </h4>
                  </header>
                  <FileUpload
                    multiple
                    onFilesSelected={(files) =>
                      toast({
                        type: "success",
                        title: "Files Added",
                        description: `Successfully attached ${files.length} document(s).`,
                      })
                    }
                  />
                </div>

                <div className="col-span-full pt-4">
                  <header className="mb-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                      Rich Content Editor
                    </h4>
                  </header>
                  <RichTextEditor
                    placeholder="Describe your project goals..."
                    onChange={(html) => console.log("Content updated:", html)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-8 border-t pt-4">
                <div className="min-w-[200px] flex-1 space-y-4">
                  <Switch label="Enable Notifications" defaultChecked />
                  <Checkbox
                    label="Accept Terms"
                    description="You agree to our terms of service."
                    defaultChecked
                  />
                </div>
                <div className="min-w-[200px] flex-1 space-y-4">
                  <div className="flex items-center gap-6">
                    <Radio label="Option A" name="radio-demo" defaultChecked />
                    <Radio label="Option B" name="radio-demo" />
                  </div>
                  <Slider label="Volume Range" defaultValue={75} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Typography & Media */}
          <Card hover className="md:col-span-2">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-sky-500/10 p-2">
                <Type className="h-5 w-5 text-sky-500" />
              </div>
              <CardTitle>Typography & Media</CardTitle>
              <CardDescription>
                Base elements for rendering text, links, and visual content.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Heading level={3}>The Quick Brown Fox</Heading>
              <Text>
                Altrugenix UI provides robust typography components. They
                automatically handle spacing, wrap behavior, and responsively
                scale to fit the constraints of modern devices seamlessly. Want
                to learn more?{" "}
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Read the documentation
                </Link>
                .
              </Text>

              <div className="mt-4 overflow-hidden rounded-xl border">
                <Image
                  src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop"
                  alt="Abstract rendering"
                  className="h-32 w-full object-cover md:h-48"
                />
              </div>

              <div className="flex flex-wrap items-center gap-8 border-t pt-4">
                <div className="flex items-center gap-3">
                  <Avatar src="https://github.com/shadcn.png" fallback="CN" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Jane Doe</p>
                    <p className="text-xs text-muted-foreground">
                      jane@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar fallback="AB" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Alain B.</p>
                    <p className="text-xs text-muted-foreground">Guest User</p>
                  </div>
                </div>

                <div className="ml-auto flex gap-4">
                  <Icon name="Activity" size={24} className="text-primary" />
                  <Icon name="Heart" size={24} className="text-destructive" />
                  <Icon
                    name="Settings"
                    size={24}
                    className="text-muted-foreground"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Toast and Modal */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-indigo-500/10 p-2">
                <Bell className="h-5 w-5 text-indigo-500" />
              </div>
              <CardTitle>Global Systems</CardTitle>
              <CardDescription>
                Managed notifications and overlays.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 pt-4 text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Experience our global toast system and accessible modal
                patterns.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  variant="secondary"
                  onClick={() =>
                    toast({
                      type: "success",
                      title: "Success Notification",
                      description: "Action completed with premium animations.",
                    })
                  }
                >
                  Trigger Success Toast
                </Button>
                <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                  Open Sample Modal
                </Button>
                <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>
                  Open Drawer Panel
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Phase 3 Composite Components */}
        <Divider label="Composite Components" />

        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feedback Components */}
          <Card hover className="md:col-span-2">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-red-500/10 p-2">
                <ShieldAlert className="h-5 w-5 text-red-500" />
              </div>
              <CardTitle>Feedback Components</CardTitle>
              <CardDescription>
                Alerts, progress indicators, and loading states.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert variant="info" title="Information">
                This is an informational alert for users.
              </Alert>
              <Alert variant="success" title="Operation Successful">
                Your changes have been saved.
              </Alert>
              <Alert variant="warning" title="Warning">
                Please review before continuing.
              </Alert>
              <Alert variant="destructive" title="Error Detected">
                Something went wrong. Please try again.
              </Alert>

              <div className="space-y-4 border-t pt-4">
                <ProgressBar
                  value={75}
                  label="Upload Progress"
                  showValue
                  variant="default"
                />
                <ProgressBar
                  value={100}
                  label="Complete"
                  showValue
                  variant="success"
                  size="sm"
                />
                <ProgressBar
                  value={40}
                  label="Storage"
                  showValue
                  variant="warning"
                  size="lg"
                />
              </div>

              <div className="flex items-center gap-8 border-t pt-4">
                <Spinner size="sm" label="Small" />
                <Spinner size="md" label="Loading" />
                <Spinner size="lg" />
              </div>

              <div className="space-y-3 border-t pt-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Skeleton Loaders
                </h4>
                <div className="flex items-center gap-4">
                  <Skeleton variant="circular" width={48} height={48} />
                  <div className="flex-1 space-y-2">
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" />
                  </div>
                </div>
                <Skeleton variant="rounded" height={120} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Navigation Molecules */}
          <Card hover>
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-purple-500/10 p-2">
                <Layers className="h-5 w-5 text-purple-500" />
              </div>
              <CardTitle>Navigation</CardTitle>
              <CardDescription>
                Breadcrumbs, pagination, and step indicators.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Breadcrumbs
                items={[
                  { label: "Home" },
                  { label: "Products" },
                  { label: "Detail" },
                ]}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={setCurrentPage}
              />

              <Stepper
                activeStep={1}
                steps={[
                  { label: "Account", description: "Create account" },
                  { label: "Profile", description: "Set up profile" },
                  { label: "Complete", description: "All done" },
                ]}
              />
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card hover className="lg:col-span-2">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-teal-500/10 p-2">
                <BarChart3 className="h-5 w-5 text-teal-500" />
              </div>
              <CardTitle>Tabs & Overlays</CardTitle>
              <CardDescription>
                Tabbed content, tooltips, and slide panels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs
                variant="underline"
                items={[
                  {
                    label: "Overview",
                    value: "overview",
                    content: (
                      <p className="text-sm text-muted-foreground">
                        This is the overview tab content. Tabs support default,
                        pills, and underline variants.
                      </p>
                    ),
                  },
                  {
                    label: "Analytics",
                    value: "analytics",
                    content: (
                      <p className="text-sm text-muted-foreground">
                        Analytics content goes here. Each tab panel is lazily
                        rendered.
                      </p>
                    ),
                  },
                  {
                    label: "Settings",
                    value: "settings",
                    content: (
                      <p className="text-sm text-muted-foreground">
                        Settings content with form fields could go here.
                      </p>
                    ),
                  },
                ]}
              />

              <div className="flex items-center gap-4 border-t pt-4">
                <Tooltip content="I'm a tooltip!">
                  <Button variant="outline" size="sm">
                    Hover me
                  </Button>
                </Tooltip>
                <Tooltip content="Right side tooltip" side="right">
                  <Button variant="ghost" size="sm">
                    Right tooltip
                  </Button>
                </Tooltip>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <PanelRight className="mr-2 h-4 w-4" /> Open Drawer
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Analytics Section */}
        <Divider label="Analytics" />

        <section className="grid gap-8 md:grid-cols-2">
          <Card hover>
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-emerald-500/10 p-2">
                <BarChart3 className="h-5 w-5 text-emerald-500" />
              </div>
              <CardTitle>Project Performance</CardTitle>
              <CardDescription>
                Live metrics from active workstreams.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-[250px] items-end pt-8">
              <BarChart
                data={[
                  { label: "Jan", value: 45 },
                  { label: "Feb", value: 52 },
                  { label: "Mar", value: 38 },
                  { label: "Apr", value: 65, color: "bg-emerald-500" },
                  { label: "May", value: 48 },
                  { label: "Jun", value: 59 },
                ]}
              />
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-sky-500/10 p-2">
                <Layout className="h-5 w-5 text-sky-500" />
              </div>
              <CardTitle>Resource Allocation</CardTitle>
              <CardDescription>
                Distribution across development teams.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-[250px] items-end pt-8">
              <BarChart
                data={[
                  { label: "Core", value: 85, color: "bg-sky-500" },
                  { label: "UI/UX", value: 65, color: "bg-indigo-500" },
                  { label: "Backend", value: 92, color: "bg-violet-500" },
                  { label: "QA", value: 45, color: "bg-amber-500" },
                ]}
              />
            </CardContent>
          </Card>
        </section>

        {/* Schedule Section */}
        <Divider label="Schedule & Planning" />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Heading level={2}>Premium Calendar View</Heading>
              <Text className="text-muted-foreground">
                Manage project timelines and resource allocations in a
                grid-based monthly view.
              </Text>
            </div>
          </div>

          <CalendarView
            events={[
              {
                id: "1",
                title: "Design Sprint",
                date: new Date(),
                color: "bg-primary/20 text-primary border-primary",
              },
              {
                id: "2",
                title: "Client Demo",
                date: new Date(new Date().setDate(new Date().getDate() + 2)),
                color: "bg-emerald-500/20 text-emerald-600 border-emerald-500",
              },
              {
                id: "3",
                title: "API Release",
                date: new Date(new Date().setDate(new Date().getDate() + 5)),
                color: "bg-indigo-500/20 text-indigo-600 border-indigo-500",
              },
              {
                id: "4",
                title: "QA Review",
                date: new Date(new Date().setDate(new Date().getDate() + 5)),
                color: "bg-amber-500/20 text-amber-600 border-amber-500",
              },
            ]}
            onAddEvent={(date) =>
              toast({
                type: "info",
                title: "New Event",
                description: `Scheduling event for ${date.toLocaleDateString()}`,
              })
            }
          />
        </section>
        <Divider label="Schedule & Planning" />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Heading level={2}>Premium Calendar View</Heading>
              <Text className="text-muted-foreground">
                Manage project timelines and resource allocations in a
                grid-based monthly view.
              </Text>
            </div>
          </div>

          <CalendarView
            events={[
              {
                id: "1",
                title: "Design Sprint",
                date: new Date(),
                color: "bg-primary/20 text-primary border-primary",
              },
              {
                id: "2",
                title: "Client Demo",
                date: new Date(new Date().setDate(new Date().getDate() + 2)),
                color: "bg-emerald-500/20 text-emerald-600 border-emerald-500",
              },
              {
                id: "3",
                title: "API Release",
                date: new Date(new Date().setDate(new Date().getDate() + 5)),
                color: "bg-indigo-500/20 text-indigo-600 border-indigo-500",
              },
              {
                id: "4",
                title: "QA Review",
                date: new Date(new Date().setDate(new Date().getDate() + 5)),
                color: "bg-amber-500/20 text-amber-600 border-amber-500",
              },
            ]}
            onAddEvent={(date) =>
              toast({
                type: "info",
                title: "New Event",
                description: `Scheduling event for ${date.toLocaleDateString()}`,
              })
            }
          />
        </section>

        {/* Project Management Section */}
        <Divider label="Project Management" />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Heading level={2}>Premium Kanban Board</Heading>
              <Text className="text-muted-foreground">
                Iterative task tracking with priority badges and assignee
                management.
              </Text>
            </div>
          </div>

          <KanbanBoard
            tasks={[
              {
                id: "1",
                title: "Implement Auth Flow",
                status: "todo",
                priority: "high",
                assignee: { name: "Alice" },
              },
              {
                id: "2",
                title: "Refactor Component Logic",
                status: "in-progress",
                priority: "medium",
                assignee: { name: "Bob" },
              },
              {
                id: "3",
                title: "Update Design Tokens",
                status: "done",
                priority: "low",
                assignee: { name: "Charlie" },
              },
              {
                id: "4",
                title: "Setup CI/CD Pipeline",
                status: "todo",
                priority: "high",
                assignee: { name: "DevOps" },
              },
              {
                id: "5",
                title: "Write API Tests",
                status: "in-progress",
                priority: "high",
                assignee: { name: "Alice" },
              },
            ]}
            onTaskMove={(id, status) =>
              toast({
                type: "info",
                title: "Task Moved",
                description: `Task ${id} status updated to ${status}`,
              })
            }
          />
        </section>

        {/* Data Grid Section */}
        <Divider label="Data Management" />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Heading level={2}>Premium Data Grid</Heading>
              <Text className="text-muted-foreground">
                Built-in sorting, custom rendering, and responsive behavior.
              </Text>
            </div>
            <Button size="sm" variant="outline">
              Export CSV
            </Button>
          </div>

          <DataGrid
            data={[
              {
                id: 1,
                name: "Project Alpha",
                client: "Acme Corp",
                budget: "$12,000",
                status: "In Progress",
                deadline: "2024-06-01",
              },
              {
                id: 2,
                name: "Marketing Site",
                client: "Global Tech",
                budget: "$8,500",
                status: "Completed",
                deadline: "2024-05-15",
              },
              {
                id: 3,
                name: "Mobile App",
                client: "Start-up Inc",
                budget: "$25,000",
                status: "Review",
                deadline: "2024-07-20",
              },
              {
                id: 4,
                name: "API Integration",
                client: "Finanz Dev",
                budget: "$5,000",
                status: "In Progress",
                deadline: "2024-06-10",
              },
              {
                id: 5,
                name: "Brand Refresh",
                client: "Creative Co",
                budget: "$3,200",
                status: "Completed",
                deadline: "2024-04-30",
              },
            ]}
            columns={[
              { key: "name", header: "Project Name", sortable: true },
              { key: "client", header: "Client", sortable: true },
              {
                key: "budget",
                header: "Budget",
                sortable: true,
                align: "right",
              },
              {
                key: "status",
                header: "Status",
                sortable: true,
                render: (item) => {
                  const status = item.status as string;
                  return (
                    <Badge
                      variant={
                        status === "Completed"
                          ? "success"
                          : status === "In Progress"
                            ? "default"
                            : "warning"
                      }
                    >
                      {status}
                    </Badge>
                  );
                },
              },
              { key: "deadline", header: "Deadline", sortable: true },
            ]}
            onRowClick={(item: { name: string }) =>
              toast({
                type: "info",
                title: "Row Clicked",
                description: `Viewing details for ${item.name}`,
              })
            }
          />
        </section>

        {/* Hooks Section */}
        <Divider label="Interactive Hooks" />

        <section className="grid gap-8 md:grid-cols-2">
          <Card hover>
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-yellow-500/10 p-2">
                <Monitor className="h-5 w-5 text-yellow-500" />
              </div>
              <CardTitle>Viewport Detection</CardTitle>
              <CardDescription>
                Responsive logic using useMediaQuery hook.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <Monitor
                    className={cn(
                      "h-5 w-5",
                      useMediaQuery("(min-width: 768px)")
                        ? "text-primary"
                        : "text-muted"
                    )}
                  />
                  <span>Desktop View</span>
                </div>
                <Badge
                  variant={
                    useMediaQuery("(min-width: 768px)")
                      ? "success"
                      : "secondary"
                  }
                >
                  {useMediaQuery("(min-width: 768px)") ? "Active" : "Inactive"}
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <Smartphone
                    className={cn(
                      "h-5 w-5",
                      useMediaQuery("(max-width: 767px)")
                        ? "text-primary"
                        : "text-muted"
                    )}
                  />
                  <span>Mobile View</span>
                </div>
                <Badge
                  variant={
                    useMediaQuery("(max-width: 767px)")
                      ? "success"
                      : "secondary"
                  }
                >
                  {useMediaQuery("(max-width: 767px)") ? "Active" : "Inactive"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-blue-500/10 p-2">
                <Copy className="h-5 w-5 text-blue-500" />
              </div>
              <CardTitle>Clipboard & State</CardTitle>
              <CardDescription>
                Utilities for copying and state management.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Click to copy token
                </label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 rounded border bg-muted p-2 font-mono text-xs">
                    alt_live_8k2n9s1m0p
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      copy("alt_live_8k2n9s1m0p");
                      toast({
                        type: "success",
                        title: "Copied!",
                        description: "Token copied to clipboard.",
                      });
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="w-full justify-between"
                  variant="outline"
                  onClick={() =>
                    toast({
                      type: "info",
                      title: "Coming Soon",
                      description: "Kanban and Charts are in the next sprint.",
                    })
                  }
                >
                  View Road Map
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Sample Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Altrugenix"
        description="This modal supports focus locking, keyboard events, and smooth animations."
        footer={<Button onClick={() => setIsModalOpen(false)}>Continue</Button>}
      >
        <div className="space-y-4 py-6">
          <p className="text-sm leading-relaxed">
            Every component in Altrugenix UI is built with a focus on developer
            experience and end-user accessibility.
          </p>
          <div className="rounded-lg border bg-muted p-4 font-mono text-sm">
            npm install Altrugenix-ui
          </div>
        </div>
      </Modal>

      {/* Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Drawer Panel"
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            This is a slide-out drawer panel. It supports left/right
            positioning, keyboard dismiss, and backdrop click to close.
          </p>
          <Input label="Quick Note" placeholder="Write something..." />
          <Button className="w-full" onClick={() => setIsDrawerOpen(false)}>
            Save & Close
          </Button>
        </div>
      </Drawer>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        items={paletteItems}
      />

      {/* Footer */}
      <footer className="mt-24 border-t py-12">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Altrugenix UI. Built by Senior Frontend Engineers.
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="Altrugenix-ui-theme">
      <ToastProvider>
        <DemoApp />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
