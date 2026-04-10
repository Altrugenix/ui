# @altrugenix/ui

A premium, accessible, and high-performance React component library built with Tailwind CSS and Framer Motion. Designed for building modern, state-of-the-art web applications with ease.

## Features

- 💎 **Premium Aesthetic**: Modern design with glassmorphism, smooth animations, and curated color palettes.
- ♿ **Accessible**: Built with accessibility in mind, ensuring your UI is usable by everyone.
- ⚡ **Performant**: Optimized for speed and small bundle sizes.
- 🎨 **Fully Customizable**: Deep integration with Tailwind CSS for easy styling and theming.
- 🌓 **Dark Mode Support**: Built-in support for dark mode with HSL-based color variables.
- 🧩 **Polymorphic Components**: Many components support the `as` prop for ultimate flexibility.

## Installation

Install the package via yarn:

```bash
yarn add @altrugenix/ui
```

> [!NOTE]
> Ensure you have the required peer dependencies installed: `framer-motion`, `react`, `react-dom`, and `tailwindcss`.

## Setup

### 1. Tailwind CSS Configuration

Update your `tailwind.config.js` (or `.ts`) to include the `@altrugenix/ui` content.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  // Add the package to your content paths
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@altrugenix/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // The library uses custom HSL variables for colors.
      // Ensure your tailwind config matches the library's expectations.
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 2. Import Global Styles

Import the library's CSS in your main entry point (e.g., `main.tsx` or `_app.tsx`):

```typescript
import "@altrugenix/ui/dist/index.css";
```

### 3. Theme Provider

Wrap your application with the `ThemeProvider` to enable theme management (Light/Dark mode).

```tsx
import { ThemeProvider } from "@altrugenix/ui";

function App({ children }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="altrugenix-theme">
      {children}
    </ThemeProvider>
  );
}
```

## Basic Usage

```tsx
import { Button, Card, Heading, Text } from "@altrugenix/ui";

export default function MyComponent() {
  return (
    <Card className="mx-auto max-w-md p-6">
      <Heading level={2} className="mb-4">
        Welcome to Altrugenix
      </Heading>
      <Text variant="muted" className="mb-6">
        This is a premium React component library.
      </Text>
      <div className="flex gap-4">
        <Button variant="primary" onClick={() => console.log("Clicked!")}>
          Get Started
        </Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </Card>
  );
}
```

## Available Components

The library includes a comprehensive set of UI primitives and complex components:

- **General**: Button, Heading, Text, Icon, Image, Link
- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch, Slider, DatePicker, FileUpload, Autocomplete, RichTextEditor
- **Data Display**: Badge, Avatar, Tag, Table, List, Timeline, Accordion, Card
- **Feedback**: Toast, Modal
- **Layout**: VirtualList, Kanban
- **Visuals**: Charts, CalendarView

## Development Scripts

If you're contributing to the library, here are the useful scripts:

- `yarn dev`: Start the Vite dev server for component development.
- `yarn storybook`: Run Storybook for component documentation and testing.
- `yarn build`: Build the library for production.
- `yarn test`: Run unit tests with Vitest.
- `yarn lint`: Run ESLint for code style checks.

## License

MIT © [Altrugenix](https://github.com/altrugenix)
