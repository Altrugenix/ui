import {
  Heading,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Avatar,
  Badge,
  ProgressBar,
  Tag,
  Timeline,
  type TimelineItem,
  List,
  ListItem,
} from "@altrugenix/ui";
import {
  Layers,
  Shield,
  Star,
  Zap,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const timelineItems: TimelineItem[] = [
  {
    title: "Project Initialized",
    description: "Started the new Altrugenix development.",
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

export function DataFeedbackSection() {
  return (
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
  );
}
