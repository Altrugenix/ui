import { Button, useTheme } from "@altrugenix/ui";
import { Sun, Moon } from "lucide-react";
import type { ThemeTokens, ThemeType } from "@/types/themes";
import { THEMES } from "@/constants/themes";

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
          <div className="hidden max-w-2xl items-center gap-1 overflow-x-auto px-2 md:flex">
            {(Object.entries(THEMES) as [ThemeType, any][]).map(
              ([type, config]) => (
                <Button
                  key={type}
                  size="sm"
                  variant={
                    tokens?.colors?.primary === config.tokens.colors?.primary
                      ? "secondary"
                      : "ghost"
                  }
                  onClick={() => onSwitchTheme(type)}
                  className="rounded-full capitalize"
                >
                  {type}
                </Button>
              )
            )}
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
