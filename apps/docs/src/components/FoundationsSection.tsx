import { Heading, Text, Button, Badge, Accordion, Link } from "@altrugenix/ui";
import { ChevronRight } from "lucide-react";

export function FoundationsSection() {
  return (
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
  );
}
