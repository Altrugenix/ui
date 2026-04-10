import { useState, useEffect } from "react";
import {
  ThemeProvider,
  ToastProvider,
  useToast,
  Divider,
} from "@altrugenix/ui";
import {
  Header,
  HeroSection,
  FoundationsSection,
  FormControlsSection,
  DataFeedbackSection,
  AdvancedDemoSection,
  CTASection,
  Footer,
  Overlays,
} from "./components";

/* ─── Types ─── */
interface ThemeTokens {
  colors?: {
    primary?: string;
    secondary?: string;
    ring?: string;
  };
  radius?: string;
}

/* ─── Main Demo Content ─── */
function DemoAppContent({
  setTokens,
  tokens,
}: {
  setTokens: (t: ThemeTokens | undefined) => void;
  tokens: ThemeTokens | undefined;
}) {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const switchTheme = (type: "default" | "crimson") => {
    if (type === "crimson") {
      setTokens({
        colors: { primary: "0 72% 51%", ring: "0 72% 51%" },
        radius: "0rem",
      });
      toast({
        type: "success",
        title: "Theme Updated",
        description: "Enterprise Crimson mode activated.",
      });
    } else {
      setTokens(undefined);
      toast({
        type: "success",
        title: "Theme Restored",
        description: "Default Altrugenix Blue restored.",
      });
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsPaletteOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Header tokens={tokens} onSwitchTheme={switchTheme} />

      <main className="container mx-auto space-y-12 px-6 py-12">
        <HeroSection />

        <Divider label="Foundations" />
        <FoundationsSection />

        <Divider label="Form Controls" />
        <FormControlsSection />

        <Divider label="Data & Feedback" />
        <DataFeedbackSection />

        <Divider label="Advanced Demo" />
        <AdvancedDemoSection />

        <CTASection
          onGetStarted={() => setIsModalOpen(true)}
          onOpenSettings={() => setIsDrawerOpen(true)}
        />
      </main>

      <Footer />

      <Overlays
        isModalOpen={isModalOpen}
        onModalClose={() => setIsModalOpen(false)}
        isDrawerOpen={isDrawerOpen}
        onDrawerClose={() => setIsDrawerOpen(false)}
        isPaletteOpen={isPaletteOpen}
        onPaletteClose={() => setIsPaletteOpen(false)}
        onOpenModal={() => setIsModalOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />
    </div>
  );
}

/* ─── Root App ─── */
export default function App() {
  const [tokens, setTokens] = useState<ThemeTokens | undefined>(undefined);
  return (
    <ThemeProvider tokens={tokens}>
      <ToastProvider>
        <DemoAppContent setTokens={setTokens} tokens={tokens} />
      </ToastProvider>
    </ThemeProvider>
  );
}
