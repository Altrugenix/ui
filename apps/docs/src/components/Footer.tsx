import { Heading, Text, Link } from "@altrugenix/ui";
import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-muted/5 py-12">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Altrugenix</span>
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
  );
}
