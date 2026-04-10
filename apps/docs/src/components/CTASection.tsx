import { Heading, Text, Button } from "@altrugenix/ui";

interface CTASectionProps {
  onGetStarted: () => void;
  onOpenSettings: () => void;
}

export function CTASection({ onGetStarted, onOpenSettings }: CTASectionProps) {
  return (
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
          onClick={onGetStarted}
        >
          Get Started Now
        </Button>
        <Button
          size="lg"
          variant="ghost"
          className="rounded-full"
          onClick={onOpenSettings}
        >
          Open Settings
        </Button>
      </div>
    </section>
  );
}
