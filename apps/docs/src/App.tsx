import { useState, useEffect } from "react";
import {
  ThemeProvider,
  ToastProvider,
  useToast,
  Divider,
} from "@altrugenix/ui";
import { handleThemeSwitch } from "./lib/theme-utils";
import type { ThemeTokens, ThemeType } from "./types/themes";
import {
  Header,
  HeroSection,
  FoundationsSection,
  FormControlsSection,
  DataFeedbackSection,
  ComplexComponentsSection,
  AdvancedDemoSection,
  CTASection,
  Footer,
  Overlays,
} from "./components";

/* ─── Main App Content ─── */
function AppContent({
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

  const switchTheme = (type: ThemeType) => {
    handleThemeSwitch(type, setTokens, toast);
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
    <div className="bg-background text-foreground min-h-screen transition-colors duration-500">
      <Header tokens={tokens} onSwitchTheme={switchTheme} />

      <main className="container mx-auto space-y-12 px-6 py-12">
        <HeroSection />

        <Divider label="Foundations" />
        <FoundationsSection />

        <Divider label="Form Controls" />
        <FormControlsSection />

        <Divider label="Data & Feedback" />
        <DataFeedbackSection />

        <Divider label="Complex Components" />
        <ComplexComponentsSection />

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
        <AppContent setTokens={setTokens} tokens={tokens} />
      </ToastProvider>
    </ThemeProvider>
  );
}
