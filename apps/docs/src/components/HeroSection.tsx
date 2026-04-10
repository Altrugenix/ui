import { Badge, Heading, Text, Button } from "@altrugenix/ui";

export function HeroSection() {
  return (
    <section className="mb-16 space-y-4 text-center">
      <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5">
        Premium UI Library v1.0
      </Badge>
      <Heading
        level={1}
        className="mx-auto max-w-4xl text-6xl font-black leading-tight lg:text-7xl"
      >
        Design System for <span className="italic text-primary">Winners</span>
      </Heading>
      <Text className="mx-auto max-w-2xl text-xl text-muted-foreground">
        A comprehensive set of high-performance React components meticulously
        crafted for enterprise-grade SaaS platforms.
      </Text>
      <div className="flex items-center justify-center gap-4 pt-6">
        <Button
          size="lg"
          className="rounded-full px-8"
          as="a"
          href="https://github.com/altrugenix/ui"
        >
          Get Started
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full px-8"
          as="a"
          href="/storybook"
        >
          Documentation
        </Button>
      </div>
    </section>
  );
}
