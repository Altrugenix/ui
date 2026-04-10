import { Button, useTheme } from "@altrugenix/ui";
import { Layers, Sun, Moon } from "lucide-react";

interface ThemeTokens {
  colors?: {
    primary?: string;
    secondary?: string;
    ring?: string;
  };
  radius?: string;
}

interface HeaderProps {
  tokens: ThemeTokens | undefined;
  onSwitchTheme: (type: "default" | "crimson") => void;
}

export function Header({ tokens, onSwitchTheme }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Layers className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Altrugenix</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <Button
              size="sm"
              variant={!tokens ? "secondary" : "ghost"}
              onClick={() => onSwitchTheme("default")}
              className="rounded-full"
            >
              Default
            </Button>
            <Button
              size="sm"
              variant={
                tokens?.colors?.primary === "0 72% 51%" ? "secondary" : "ghost"
              }
              onClick={() => onSwitchTheme("crimson")}
              className="rounded-full"
            >
              Crimson
            </Button>
          </div>
          <div className="mx-2 h-4 w-px bg-border" />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
