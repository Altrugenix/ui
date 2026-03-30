import { useState } from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { ToastProvider, useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select } from "@/components/ui/select";
import { Autocomplete } from "@/components/ui/autocomplete";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Icon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";
import { Avatar } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import {
  Bell,
  Moon,
  Sun,
  Code,
  Cpu,
  Layout,
  CheckCircle2,
  Type,
  ToggleLeft,
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
              href="https://github.com/altrugenix/ui"
              className="rounded-full"
            >
              <Code className="h-5 w-5" />
            </Button>
            <Button
              radius="full"
              className="px-6 font-semibold"
              as="a"
              href="https://altrugenix.github.io/storybook"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <main className="container space-y-24 py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center space-y-8 text-center duration-1000 animate-in fade-in slide-in-from-bottom-8">
          <Badge className="gap-2 rounded-full border-orange-500/20 bg-orange-500/10 px-3 py-1 font-bold uppercase tracking-wider text-orange-500 shadow-none hover:bg-orange-500/20">
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
          <Card hover>
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-orange-500/10 p-2">
                <Layout className="h-5 w-5 text-orange-500" />
              </div>
              <CardTitle>Interactive Elements</CardTitle>
              <CardDescription>
                Core actions and their variants.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button isLoading>Processing</Button>
              </div>

              <div className="space-y-4 border-t pt-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Status Badges
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Controls */}
          <Card hover className="md:col-span-2">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-green-500/10 p-2">
                <ToggleLeft className="h-5 w-5 text-green-500" />
              </div>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>
                Comprehensive set of atomic form inputs and selectors.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Input label="Standard Input" placeholder="Type here..." />
                <Select label="Select Choice">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </Select>
                <Textarea
                  label="Message"
                  placeholder="Type your message here..."
                  className="col-span-full md:col-span-1"
                />
                <Autocomplete
                  label="Framework"
                  options={[
                    "React",
                    "Vue",
                    "Angular",
                    "Svelte",
                    "Next.js",
                    "Nuxt",
                    "Solid",
                  ]}
                  placeholder="Search frameworks..."
                  className="col-span-full md:col-span-1"
                />
              </div>

              <div className="flex flex-wrap gap-8 border-t pt-4">
                <div className="min-w-[200px] flex-1 space-y-4">
                  <Switch label="Enable Notifications" defaultChecked />
                  <Checkbox
                    label="Accept Terms"
                    description="You agree to our terms of service."
                    defaultChecked
                  />
                </div>
                <div className="min-w-[200px] flex-1 space-y-4">
                  <div className="flex items-center gap-6">
                    <Radio label="Option A" name="radio-demo" defaultChecked />
                    <Radio label="Option B" name="radio-demo" />
                  </div>
                  <Slider label="Volume Range" defaultValue={75} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Typography & Media */}
          <Card hover className="md:col-span-2">
            <CardHeader>
              <div className="mb-2 w-fit rounded-lg bg-sky-500/10 p-2">
                <Type className="h-5 w-5 text-sky-500" />
              </div>
              <CardTitle>Typography & Media</CardTitle>
              <CardDescription>
                Base elements for rendering text, links, and visual content.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Heading level={3}>The Quick Brown Fox</Heading>
              <Text>
                Altrugenix UI provides robust typography components. They
                automatically handle spacing, wrap behavior, and responsively
                scale to fit the constraints of modern devices seamlessly. Want
                to learn more?{" "}
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Read the documentation
                </Link>
                .
              </Text>

              <div className="mt-4 overflow-hidden rounded-xl border">
                <Image
                  src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop"
                  alt="Abstract rendering"
                  className="h-32 w-full object-cover md:h-48"
                />
              </div>

              <div className="flex flex-wrap items-center gap-8 border-t pt-4">
                <div className="flex items-center gap-3">
                  <Avatar src="https://github.com/shadcn.png" fallback="CN" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Jane Doe</p>
                    <p className="text-xs text-muted-foreground">
                      jane@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar fallback="AB" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Alain B.</p>
                    <p className="text-xs text-muted-foreground">Guest User</p>
                  </div>
                </div>

                <div className="ml-auto flex gap-4">
                  <Icon name="Activity" size={24} className="text-primary" />
                  <Icon name="Heart" size={24} className="text-destructive" />
                  <Icon
                    name="Settings"
                    size={24}
                    className="text-muted-foreground"
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
