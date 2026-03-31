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
        <div className="container flex h-16 items-center justify-between">
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

      <main className="container space-y-12 py-12">
        <section className="space-y-4">
          <Badge variant="secondary" className="px-3 py-1">
            Premium UI Kit
          </Badge>
          <Heading
            level={1}
            className="max-w-3xl text-5xl font-extrabold lg:text-6xl"
          >
            Build Stunning Interfaces{" "}
            <span className="text-primary">Effortlessly</span>
          </Heading>
          <Text className="max-w-2xl text-xl text-muted-foreground">
            A comprehensive, high-performance UI library designed for modern
            SaaS applications. Built with React, Tailwind, and Framer Motion.
          </Text>
        </section>

        <Divider label="Performance & Scale" />
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
                    <span className="text-sm font-semibold">{item.title}</span>
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
            <div className="border-t bg-muted/10 px-6 py-2 text-[10px] italic text-muted-foreground">
              Virtualization check: only rendering ~15 DOM nodes at a time for
              10k items.
            </div>
          </Card>
        </section>

        <Divider label="Interactive Components" />
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card hover className="md:col-span-2">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-green-500/10 p-2">
                <ToggleLeft className="h-5 w-5 text-green-500" />
              </div>
              <CardTitle>Advanced Form Controls</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <DatePicker
                value={date}
                onChange={setDate}
                className="col-span-full md:col-span-1"
              />
              <div className="col-span-full pt-4">
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
              </div>
              <div className="col-span-full pt-4">
                <RichTextEditor
                  placeholder="Enter project description..."
                  onChange={(html) => console.log(html)}
                />
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-purple-500/10 p-2">
                <Zap className="h-5 w-5 text-purple-500" />
              </div>
              <CardTitle>Activity Feed</CardTitle>
              <CardDescription>
                Infinite scrolling with intersection observer.
              </CardDescription>
            </CardHeader>
            <CardContent className="scrollbar-thin h-[400px] overflow-y-auto pr-2">
              <ActivityFeed />
            </CardContent>
          </Card>
        </section>

        <Divider label="Project Management" />
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <Heading level={2}>Kanban & Lifecycle</Heading>
          </div>
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

        <section className="space-y-6 pt-12">
          <Divider label="Scheduling" />
          <CalendarView
            events={[
              {
                id: "1",
                title: "Core Sync",
                date: new Date(),
                color: "bg-primary/20",
              },
            ]}
          />
        </section>

        <section className="space-y-6 pt-12">
          <Divider label="Data Visualization" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Forecast</CardTitle>
              </CardHeader>
              <CardContent className="flex h-[250px] items-end pt-8">
                <BarChart
                  data={[
                    { label: "Jan", value: 45 },
                    { label: "Feb", value: 65 },
                    { label: "Mar", value: 55 },
                  ]}
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="New Task"
      >
        <div className="py-6">Simple task creation flow goes here.</div>
      </Modal>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Configuration"
      />
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
