import { Heading, Text, Link } from "@altrugenix/ui";
import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/5 mt-20 border-t py-12">
      <div className="container mx-auto grid gap-8 px-6 md:grid-cols-4">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="text-primary h-6 w-6" />
            <span className="text-lg font-bold">Altrugenix</span>
          </div>
          <Text className="text-muted-foreground max-w-xs text-sm">
            The high-performance design system for modern web application
            developers.
          </Text>
        </div>
        <div className="space-y-4">
          <Heading level={4} className="text-sm tracking-wider uppercase">
            Product
          </Heading>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Components
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Templates
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Themes
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <Heading level={4} className="text-sm tracking-wider uppercase">
            Company
          </Heading>
          <div className="flex flex-col gap-2">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
