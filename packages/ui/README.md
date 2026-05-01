<div align="center">
  <a href="https://altrugenix.js.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://avatars.githubusercontent.com/u/272279351">
      <img alt="Altrugenix logo" src="https://avatars.githubusercontent.com/u/272279351" height="128">
    </picture>
  </a>
  <h1>@altrugenix/ui</h1>

<a href="https://altrugenix.js.org/"><img alt="Altrugenix logo" src="https://img.shields.io/badge/MADE%20BY%20Altrugenix-000000.svg?style=for-the-badge&logo=Altrugenix&labelColor=000"></a>
<a href="https://www.npmjs.com/package/@altrugenix/ui"><img alt="NPM version" src="https://img.shields.io/npm/v/@altrugenix/ui.svg?style=for-the-badge&labelColor=000000"></a>
<a href="https://github.com/Altrugenix/ui/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/npm/l/@altrugenix/ui.svg?style=for-the-badge&labelColor=000000"></a>
<a href="https://github.com/Altrugenix/ui/discussions"><img alt="Join the community on GitHub" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=GitHub&labelColor=000000&logoWidth=20"></a>

</div>

An open-source, accessible, and high-performance React component library built with Tailwind CSS and Framer Motion. Designed for building modern, state-of-the-art web applications with ease.

## Features

- 💎 **Modern Aesthetic**: Modern design with glassmorphism, smooth animations, and curated color palettes.
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
