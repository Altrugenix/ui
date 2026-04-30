import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "@altrugenix/core";
import { ToastProvider } from "@altrugenix/toast";
import "../packages/ui/src/index.css";
import React from "react";

import { INITIAL_VIEWPORTS } from "storybook/viewport";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <ToastProvider>
          <div className="bg-background text-foreground selection:bg-primary/20 p-8 font-sans antialiased transition-colors duration-300">
            <Story />
          </div>
        </ToastProvider>
      </ThemeProvider>
    ),
  ],
  initialGlobals: {
    viewport: { value: "ipad", isRotated: false },
  },
};

export default preview;
