import { THEMES, ThemeType, ThemeTokens } from "../constants/themes";

export const handleThemeSwitch = (
  type: ThemeType,
  setTokens: (t: ThemeTokens | undefined) => void,
  toast: (options: { type: "success"; title: string; description: string }) => void
) => {
  const config = THEMES[type];
  setTokens(config.tokens);
  toast({
    type: "success",
    title: config.title,
    description: config.description,
  });
};
