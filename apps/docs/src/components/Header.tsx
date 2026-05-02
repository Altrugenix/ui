import {
  Button,
  useTheme,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@altrugenix/ui";
import { Sun, Moon, Palette } from "lucide-react";
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
          <DropdownMenu
            align="right"
            trigger={
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <Palette className="h-4 w-4" />
                <span>Themes</span>
              </Button>
            }
          >
            <div className="px-2 py-1.5 text-sm font-semibold">
              Select Theme
            </div>
            <DropdownMenuSeparator />
            {(Object.entries(THEMES) as [ThemeType, any][]).map(
              ([type, config]) => (
                <DropdownMenuItem
                  key={type}
                  onClick={() => onSwitchTheme(type)}
                  className="capitalize"
                >
                  <div
                    className="mr-2 h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: `hsl(${config.tokens.colors?.primary})`,
                    }}
                  />
                  {type}
                  {tokens?.colors?.primary ===
                    config.tokens.colors?.primary && (
                    <span className="ml-auto text-[10px] uppercase opacity-50">
                      Active
                    </span>
                  )}
                </DropdownMenuItem>
              )
            )}
          </DropdownMenu>

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
