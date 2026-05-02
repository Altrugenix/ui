import {
  Heading,
  Card,
  CardContent,
  Accordion,
  Carousel,
  VideoPlayer,
  MetricCard,
  Stepper,
  TransferList,
} from "@altrugenix/ui";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

export function ComplexComponentsSection() {
  return (
    <section className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Heading level={2}>Accordion & Information</Heading>
          <Card>
            <CardContent className="pt-6">
              <Accordion
                items={[
                  {
                    content: "Yes. It adheres to the WAI-ARIA design pattern.",
                    trigger: "Is it accessible?",
                    value: "1",
                  },
                  {
                    content:
                      "Yes. It comes with default styles that match the Altrugenix design system.",
                    trigger: "Is it styled?",
                    value: "2",
                  },
                  {
                    content:
                      "Yes. It uses CSS transitions for smooth expand and collapse animations.",
                    trigger: "Is it animated?",
                    value: "3",
                  },
                ]}
                type="single"
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Heading level={2}>Media & Display</Heading>
          <Card className="overflow-hidden">
            <VideoPlayer
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg"
            />
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <Heading level={2}>Performance Metrics</Heading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Users"
            value="45,231"
            change="+12.5%"
            trend="up"
            icon={<Users className="h-4 w-4" />}
          />
          <MetricCard
            title="Revenue"
            value="$12,405"
            change="+8.2%"
            trend="up"
            icon={<DollarSign className="h-4 w-4" />}
          />
          <MetricCard
            title="Active Sessions"
            value="573"
            change="-2.4%"
            trend="down"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <MetricCard
            title="System Load"
            value="14%"
            change="Stable"
            trend="up"
            icon={<Activity className="h-4 w-4" />}
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Heading level={2}>Multi-step Process</Heading>
          <Card>
            <CardContent className="pt-6">
              <Stepper
                activeStep={1}
                steps={[
                  { label: "Account Info" },
                  { label: "Personal Details" },
                  { label: "Confirmation" },
                ]}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Heading level={2}>Data Management</Heading>
          <Card>
            <CardContent className="pt-6">
              <TransferList items={["React", "Vue", "Angular", "Svelte"]} />
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <Heading level={2}>Featured Content</Heading>
        <Carousel
          items={[
            <Card
              key="1"
              className="bg-primary/10 flex h-48 items-center justify-center"
            >
              <Heading level={3}>Slide 1</Heading>
            </Card>,
            <Card
              key="2"
              className="bg-secondary/10 flex h-48 items-center justify-center"
            >
              <Heading level={3}>Slide 2</Heading>
            </Card>,
            <Card
              key="3"
              className="bg-accent/10 flex h-48 items-center justify-center"
            >
              <Heading level={3}>Slide 3</Heading>
            </Card>,
          ]}
        />
      </div>
    </section>
  );
}
