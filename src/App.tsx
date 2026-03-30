import { useState } from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import {
  Mail,
  Bell,
  Moon,
  Sun,
  Code,
  Cpu,
  Layout,
  CheckCircle2,
} from "lucide-react";

const DemoApp = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-1.5">
              <Cpu className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Altrugenix UI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              as="a"
              href="https://github.com"
              className="rounded-full"
            >
              <Code className="h-5 w-5" />
            </Button>
            <Button radius="full" className="px-6 font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main className="container space-y-24 py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center space-y-8 text-center duration-1000 animate-in fade-in slide-in-from-bottom-8">
          <Badge className="gap-2 rounded-full border-orange-500/20 bg-orange-500/10 px-3 py-1 font-bold uppercase tracking-wider text-orange-500 hover:bg-orange-500/20 shadow-none">
            <CheckCircle2 className="h-3 w-3" /> In Development
          </Badge>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            Build stunning interfaces with{" "}
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-primary text-transparent">
              Altrugenix UI
            </span>
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            A premium, scalable, and accessible component library built with
            React, Tailwind CSS, and Framer Motion. Designed for performance and
            built for developers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-14 rounded-full px-10 text-lg shadow-lg shadow-primary/20"
            >
              Download Package
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full px-10 text-lg"
            >
              Documentation
            </Button>
          </div>
        </section>

        {/* Components Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Buttons Showcase */}
          <Card hover className="md:col-span-2">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-orange-500/10 p-2">
                <Layout className="h-5 w-5 text-orange-500" />
              </div>
              <CardTitle>Interactive Components</CardTitle>
              <CardDescription>
                Explore our core interactive elements and their states.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Button Variants
                </h4>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button isLoading>Processing</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Form Inputs
                </h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <Input
                    label="Full Name"
                    placeholder="Enter your name"
                    helperText="What should we call you?"
                  />
                  <Input
                    label="Email Address"
                    placeholder="you@Altrugenix.ui"
                    leftAddon={<Mail className="h-4 w-4" />}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Toast and Modal */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-indigo-500/10 p-2">
                <Bell className="h-5 w-5 text-indigo-500" />
              </div>
              <CardTitle>Global Systems</CardTitle>
              <CardDescription>
                Managed notifications and overlays.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-6 pt-4 text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Experience our global toast system and accessible modal
                patterns.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  variant="secondary"
                  onClick={() =>
                    toast({
                      type: "success",
                      title: "Success Notification",
                      description: "Action completed with premium animations.",
                    })
                  }
                >
                  Trigger Success Toast
                </Button>
                <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                  Open Sample Modal
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Sample Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Altrugenix"
        description="This modal supports focus locking, keyboard events, and smooth animations."
        footer={<Button onClick={() => setIsModalOpen(false)}>Continue</Button>}
      >
        <div className="space-y-4 py-6">
          <p className="text-sm leading-relaxed">
            Every component in Altrugenix UI is built with a focus on developer
            experience and end-user accessibility.
          </p>
          <div className="rounded-lg border bg-muted p-4 font-mono text-sm">
            npm install Altrugenix-ui
          </div>
        </div>
      </Modal>

      {/* Footer */}
      <footer className="mt-24 border-t py-12">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Altrugenix UI. Built by Senior Frontend Engineers.
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="Altrugenix-ui-theme">
      <ToastProvider>
        <DemoApp />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
