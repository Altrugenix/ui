import { useState, useMemo, useEffect } from "react";
import {
  ThemeProvider,
  useTheme,
  useToast,
  ToastProvider,
  Button,
  Heading,
  Text,
  Divider,
  ProgressBar,
  Skeleton,
  Modal,
  Drawer,
  CommandPalette,
  DatePicker,
  FileUpload,
  RichTextEditor,
  BarChart,
  CalendarView,
  KanbanBoard,
  VirtualList,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Avatar,
  Badge,
  cn,
  Accordion,
  Autocomplete,
  Checkbox,
  Input,
  Radio,
  Select,
  Slider,
  Switch,
  Tag,
  Timeline,
  type TimelineItem,
  List,
  ListItem,
  Link,
  Textarea,
} from "@/components/ui";
import { useInfiniteScroll, InfiniteScrollObserver } from "@/hooks";
import {
  Search,
  Plus,
  Layout,
  Box,
  Layers,
  Settings,
  User,
  Zap,
  Sun,
  Moon,
  ToggleLeft,
  ChevronRight,
  Mail,
  Shield,
  Bell,
  Star,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

interface PerformanceRecord {
  id: number;
  title: string;
  status: string;
  load: number;
}

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  time: string;
}

interface ThemeTokens {
  colors?: {
    primary?: string;
    secondary?: string;
    ring?: string;
  };
  radius?: string;
}

const ActivityFeed = () => {
  const { items, loading, hasMore, loadMore } = useInfiniteScroll({
    fetchData: async (page: number) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Array.from({ length: 10 }).map((_, i) => ({
        id: `feed-${page}-${i}`,
        user: `User ${Math.floor(Math.random() * 100)}`,
        action: "updated a component",
        time: "Just now",
      }));
    },
  });

  return (
    <>
      <div className="space-y-6">
        {items.map((item: ActivityItem) => (
          <div key={item.id} className="flex gap-4">
            <Avatar className="h-10 w-10" />
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-bold">{item.user}</span> {item.action}
              </p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        )}
      </div>
      <InfiniteScrollObserver
        onIntersect={loadMore}
        enabled={hasMore && !loading}
      />
    </>
  );
};

const DemoAppContent = ({
  setTokens,
  tokens,
}: {
  setTokens: (t: ThemeTokens | undefined) => void;
  tokens: ThemeTokens | undefined;
}) => {
  const { toast } = useToast();
  const { isDark, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState(50);
  const [autoValue, setAutoValue] = useState("");

  const performanceData = useMemo(
    () =>
      Array.from({ length: 10000 }).map((_, i) => ({
        id: i,
        title: `Resource Record #${i + 1}`,
        status: i % 2 === 0 ? "Active" : "Archived",
        load: Math.floor((Math.sin(i) * 0.5 + 0.5) * 100),
      })),
    []
  );

  const timelineItems: TimelineItem[] = [
    {
      title: "Project Initialized",
      description: "Started the new Altrugenix UI development.",
      date: "Oct 1, 2023",
      icon: <Layers className="h-3 w-3" />,
    },
    {
      title: "v1.0 Released",
      description: "Production-ready core components delivered.",
      date: "Nov 15, 2023",
      variant: "success",
      icon: <CheckCircle2 className="h-3 w-3" />,
    },
    {
      title: "Beta Testing",
      description: "Handling feedback from early adopters.",
      date: "Dec 5, 2023",
      variant: "warning",
      icon: <MessageSquare className="h-3 w-3" />,
    },
  ];

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
        onSelect: () => setIsModalOpen(true),
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
        onSelect: () => setIsDrawerOpen(true),
      },
    ],
    [toast]
  );

  const switchTheme = (type: "default" | "crimson") => {
    if (type === "crimson") {
      setTokens({
        colors: { primary: "0 72% 51%", ring: "0 72% 51%" },
        radius: "0rem",
      });
      toast({
        type: "success",
        title: "Theme Updated",
        description: "Enterprise Crimson mode activated.",
      });
    } else {
      setTokens(undefined);
      toast({
        type: "success",
        title: "Theme Restored",
        description: "Default Altrugenix Blue restored.",
      });
    }
  };

  useEffect(() => {
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
      <header className="sticky top-0 z-50 border-b bg-background/80 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Layers className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Altrugenix
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 md:flex">
              <Button
                size="sm"
                variant={!tokens ? "secondary" : "ghost"}
                onClick={() => switchTheme("default")}
                className="rounded-full"
              >
                Default
              </Button>
              <Button
                size="sm"
                variant={
                  tokens?.colors?.primary === "0 72% 51%"
                    ? "secondary"
                    : "ghost"
                }
                onClick={() => switchTheme("crimson")}
                className="rounded-full"
              >
                Crimson
              </Button>
            </div>
            <div className="mx-2 h-4 w-px bg-border" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto space-y-12 px-6 py-12">
        <section className="mb-16 space-y-4 text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
            Premium UI Library v1.0
          </Badge>
          <Heading
            level={1}
            className="mx-auto max-w-4xl text-6xl font-black leading-tight lg:text-7xl"
          >
            Design System for{" "}
            <span className="italic text-primary">Winners</span>
          </Heading>
          <Text className="mx-auto max-w-2xl text-xl text-muted-foreground">
            A comprehensive set of high-performance React components
            meticulously crafted for enterprise-grade SaaS platforms.
          </Text>
          <div className="flex items-center justify-center gap-4 pt-6">
            <Button size="lg" className="rounded-full px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Documentation
            </Button>
          </div>
        </section>

        <Divider label="Foundations" />
        <section className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <Heading level={3}>Typography</Heading>
              <div className="space-y-2 rounded-xl border bg-muted/5 p-6">
                <Heading level={1}>Heading 1</Heading>
                <Heading level={2}>Heading 2</Heading>
                <Heading level={3}>Heading 3</Heading>
                <Heading level={4}>Heading 4</Heading>
                <Text>Standard body text for long content.</Text>
                <Text className="text-sm text-muted-foreground">
                  Small text for metadata and captions.
                </Text>
                <Link href="#" className="mt-4 flex items-center gap-1">
                  View full spec <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <Heading level={3}>Buttons & Badges</Heading>
              <div className="flex flex-wrap items-center gap-4 rounded-xl border bg-muted/5 p-6">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <div className="flex gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="destructive">Error</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Heading level={3}>Accordion & Layout</Heading>
            <Accordion
              type="single"
              items={[
                {
                  value: "item-1",
                  trigger: "What is Altrugenix?",
                  content:
                    "Altrugenix is a modern UI library built on top of Tailwind CSS and Framer Motion, optimized for performance and accessibility.",
                },
                {
                  value: "item-2",
                  trigger: "Is it production ready?",
                  content:
                    "Absolutely. We use virtualization for heavy data and rigorous type safety across all components.",
                },
                {
                  value: "item-3",
                  trigger: "Customization options",
                  content:
                    "Every component is built with the 'cn' utility for easy class overrides and a flexible theme provider for global styling.",
                },
              ]}
            />
          </div>
        </section>

        <Divider label="Form Controls" />
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="space-y-6 p-6">
            <Heading level={4}>Inputs & Text</Heading>
            <Input label="Username" placeholder="e.g. chesteralan" />
            <Textarea label="Bio" placeholder="Tell us about yourself..." />
            <Autocomplete
              label="Tag Search"
              placeholder="Search components..."
              options={["Button", "Card", "Modal", "Timeline", "Avatar"]}
              value={autoValue}
              onChange={setAutoValue}
            />
          </Card>

          <Card className="space-y-6 p-6">
            <Heading level={4}>Selects & Sliders</Heading>
            <Select label="Priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
            <div className="space-y-3">
              <div className="flex justify-between">
                <Text className="font-medium">Opacity</Text>
                <Text className="text-muted-foreground">{sliderValue}%</Text>
              </div>
              <Slider
                value={sliderValue}
                onChange={(e) => setSliderValue(parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-1.5">
              <Text className="text-sm font-medium">Start Date</Text>
              <DatePicker value={date} onChange={setDate} />
            </div>
          </Card>

          <Card className="space-y-6 p-6">
            <Heading level={4}>Switches & Selections</Heading>
            <div className="space-y-4">
              <Switch label="Marketing Emails" />
              <div className="space-y-3 pt-2">
                <Text className="text-sm font-medium">Account Type</Text>
                <div className="flex gap-4">
                  <Radio label="Personal" name="acc" defaultChecked />
                  <Radio label="Business" name="acc" />
                </div>
              </div>
              <Checkbox
                label="I agree to terms"
                description="Read our licensing agreement."
              />
            </div>
          </Card>
        </section>

        <Divider label="Data & Feedback" />
        <section className="grid gap-8 lg:grid-cols-12">
          <Card className="overflow-hidden p-6 lg:col-span-4">
            <Heading level={3} className="mb-6">
              Timeline
            </Heading>
            <Timeline items={timelineItems} />
          </Card>

          <Card className="overflow-hidden p-0 lg:col-span-4">
            <CardHeader className="px-6 pt-6">
              <CardTitle>User List</CardTitle>
            </CardHeader>
            <CardContent>
              <List divided>
                <ListItem
                  leading={<Avatar className="h-8 w-8" />}
                  trailing={
                    <Badge variant="success" className="h-4">
                      Online
                    </Badge>
                  }
                  secondary="Product Designer"
                  interactive
                >
                  Chester Alan
                </ListItem>
                <ListItem
                  leading={<Avatar className="h-8 w-8" />}
                  secondary="System Architect"
                  interactive
                >
                  Jane Cooper
                </ListItem>
                <ListItem
                  leading={<Avatar className="h-8 w-8" />}
                  secondary="QA Engineer"
                  interactive
                >
                  Robert Fox
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card className="space-y-6 p-6 lg:col-span-4">
            <Heading level={3}>Status & Tags</Heading>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="mb-1 flex justify-between text-xs font-medium italic">
                  <span>System Reliability</span>
                  <span>99.9%</span>
                </div>
                <ProgressBar value={99.9} size="sm" variant="success" />
              </div>
              <div className="space-y-2">
                <div className="mb-1 flex justify-between text-xs font-medium italic">
                  <span>Disk Usage</span>
                  <span>84%</span>
                </div>
                <ProgressBar value={84} size="sm" variant="destructive" />
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                <Tag icon={<Shield className="h-3 w-3" />}>Security</Tag>
                <Tag variant="secondary" icon={<Star className="h-3 w-3" />}>
                  Featured
                </Tag>
                <Tag variant="success" icon={<Zap className="h-3 w-3" />}>
                  Active
                </Tag>
                <Tag onRemove={() => {}}>Removable</Tag>
              </div>
            </div>
          </Card>
        </section>

        <Divider label="Advanced Demo" />
        <section className="space-y-8">
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Heading level={2}>Virtualized High-Performance List</Heading>
                <Text className="text-muted-foreground">
                  Rendering 10,000 records with near-zero memory overhead.
                </Text>
              </div>
            </div>
            <Card className="overflow-hidden">
              <VirtualList<PerformanceRecord>
                items={performanceData}
                height={400}
                rowHeight={60}
                renderRow={(item, index) => (
                  <div
                    className={cn(
                      "flex h-full items-center justify-between border-b px-6 py-2",
                      index % 2 === 0 ? "bg-muted/5" : "bg-transparent"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 font-mono text-xs text-muted-foreground">
                        #{item.id}
                      </span>
                      <span className="text-sm font-semibold">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex w-32 flex-col gap-1">
                        <div className="flex justify-between text-[10px] italic text-muted-foreground">
                          <span>CPU Load</span>
                          <span>{item.load}%</span>
                        </div>
                        <ProgressBar
                          value={item.load}
                          size="sm"
                          variant={item.load > 80 ? "destructive" : "default"}
                        />
                      </div>
                      <Badge
                        variant={
                          item.status === "Active" ? "success" : "secondary"
                        }
                        className="h-5"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                )}
              />
            </Card>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <Card hover>
              <CardHeader>
                <div className="mb-2 w-fit rounded-lg bg-green-500/10 p-2">
                  <ToggleLeft className="h-5 w-5 text-green-500" />
                </div>
                <CardTitle>Rich Media & Files</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FileUpload
                  multiple
                  onFilesSelected={(files) =>
                    toast({
                      type: "success",
                      title: "Files Added",
                      description: `Attached ${files.length} documents.`,
                    })
                  }
                />
                <RichTextEditor
                  placeholder="Enter project description..."
                  onChange={(html) => console.log(html)}
                />
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="mb-2 w-fit rounded-lg bg-orange-500/10 p-2">
                  <Bell className="h-5 w-5 text-orange-500" />
                </div>
                <CardTitle>Activity Stream</CardTitle>
                <CardDescription>
                  Infinite scrolling with intersection observer.
                </CardDescription>
              </CardHeader>
              <CardContent className="scrollbar-thin h-[350px] overflow-y-auto pr-2">
                <ActivityFeed />
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <Heading level={2}>Kanban & Project Management</Heading>
            <KanbanBoard
              tasks={[
                {
                  id: "1",
                  title: "Refactor Theme Engine",
                  status: "in-progress",
                  priority: "high",
                  assignee: { name: "A" },
                },
                {
                  id: "2",
                  title: "Docs refinement",
                  status: "todo",
                  priority: "medium",
                  assignee: { name: "B" },
                },
                {
                  id: "3",
                  title: "Build system optimization",
                  status: "done",
                  priority: "low",
                  assignee: { name: "C" },
                },
              ]}
            />
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <Heading level={2}>Calendar & Events</Heading>
              <CalendarView
                events={[
                  {
                    id: "1",
                    title: "v1.0 Launch",
                    date: new Date(),
                    color: "bg-primary/20",
                  },
                ]}
              />
            </div>
            <div className="space-y-6">
              <Heading level={2}>Analytics</Heading>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Usage Growth</CardTitle>
                </CardHeader>
                <CardContent className="flex h-[350px] items-end pt-8">
                  <BarChart
                    data={[
                      { label: "Oct", value: 30 },
                      { label: "Nov", value: 45 },
                      { label: "Dec", value: 85 },
                      { label: "Jan", value: 65 },
                      { label: "Feb", value: 95 },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </section>
        </section>

        <section className="mt-20 flex flex-col items-center justify-center space-y-6 rounded-3xl border border-primary/10 bg-primary/5 p-12 text-center">
          <Heading level={2}>Ready to Build Something Great?</Heading>
          <Text className="max-w-xl">
            Start using Altrugenix today and transform your development workflow
            with high-performance, beautiful components.
          </Text>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="rounded-full shadow-lg shadow-primary/20"
              onClick={() => setIsModalOpen(true)}
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full"
              onClick={() => setIsDrawerOpen(true)}
            >
              Open Settings
            </Button>
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t bg-muted/5 py-12">
        <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Altrugenix UI</span>
            </div>
            <Text className="max-w-xs text-sm text-muted-foreground">
              The high-performance design system for modern web application
              developers.
            </Text>
          </div>
          <div className="space-y-4">
            <Heading level={4} className="text-sm uppercase tracking-wider">
              Product
            </Heading>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Components
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Templates
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Themes
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <Heading level={4} className="text-sm uppercase tracking-wider">
              Company
            </Heading>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Started"
      >
        <div className="space-y-4 py-6">
          <Text>Create your account to start building with Altrugenix UI.</Text>
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
        onClose={() => setIsDrawerOpen(false)}
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
            <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Drawer>

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        items={paletteItems}
      />
    </div>
  );
};

export default function App() {
  const [tokens, setTokens] = useState<ThemeTokens | undefined>(undefined);
  return (
    <ThemeProvider tokens={tokens}>
      <ToastProvider>
        <DemoAppContent setTokens={setTokens} tokens={tokens} />
      </ToastProvider>
    </ThemeProvider>
  );
}
