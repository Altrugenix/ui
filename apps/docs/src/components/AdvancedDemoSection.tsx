import { useMemo } from "react";
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  ProgressBar,
  Skeleton,
  FileUpload,
  RichTextEditor,
  BarChart,
  CalendarView,
  KanbanBoard,
  VirtualList,
  useToast,
  cn,
} from "@altrugenix/ui";
import { useInfiniteScroll, InfiniteScrollObserver } from "@altrugenix/ui";
import { Avatar } from "@altrugenix/ui";
import { ToggleLeft, Bell } from "lucide-react";

/* ─── Types ─── */
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

/* ─── Activity Feed (infinite scroll) ─── */
function ActivityFeed() {
  const { items, loading, hasMore, loadMore } = useInfiniteScroll({
    fetchData: async (page: number) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return Array.from({ length: 10 }).map((_, i) => ({
        id: `feed-${page}-${i}-${Date.now()}`,
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
}

/* ─── Virtual List Section ─── */
function VirtualListDemo() {
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

  return (
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
                  variant={item.status === "Active" ? "success" : "secondary"}
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
  );
}

/* ─── Rich Media & Activity Cards ─── */
function MediaAndActivity() {
  const { toast } = useToast();

  return (
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
  );
}

/* ─── Kanban Board ─── */
function KanbanDemo() {
  return (
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
  );
}

/* ─── Calendar & Analytics ─── */
function CalendarAndAnalytics() {
  return (
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
  );
}

/* ─── Composed Export ─── */
export function AdvancedDemoSection() {
  return (
    <section className="space-y-8">
      <VirtualListDemo />
      <MediaAndActivity />
      <KanbanDemo />
      <CalendarAndAnalytics />
    </section>
  );
}
