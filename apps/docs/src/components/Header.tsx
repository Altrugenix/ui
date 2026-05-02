import { Button, useTheme } from "@altrugenix/ui";
import { Sun, Moon } from "lucide-react";
import type { ThemeTokens, ThemeType } from "@/types/themes";

interface HeaderProps {
  tokens: ThemeTokens | undefined;
  onSwitchTheme: (type: ThemeType) => void;
}

export function Header({ tokens, onSwitchTheme }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-background/80 sticky top-0 z-50 border-b shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img
              src="/favicon-32x32.png"
              alt="Altrugenix Logo"
              className="h-8 w-8"
            />
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
            <Button
              size="sm"
              variant={
                tokens?.colors?.primary === "142 71% 45%"
                  ? "secondary"
                  : "ghost"
              }
              onClick={() => onSwitchTheme("emerald")}
              className="rounded-full"
            >
              Emerald
            </Button>
            <Button
              size="sm"
              variant={
                tokens?.colors?.primary === "262 83% 58%"
                  ? "secondary"
                  : "ghost"
              }
              onClick={() => onSwitchTheme("violet")}
              className="rounded-full"
            >
              Violet
            </Button>
            <Button
              size="sm"
              variant={
                tokens?.colors?.primary === "38 92% 50%" ? "secondary" : "ghost"
              }
              onClick={() => onSwitchTheme("amber")}
              className="rounded-full"
            >
              Amber
            </Button>
          </div>
          <div className="bg-border mx-2 h-4 w-px" />
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
