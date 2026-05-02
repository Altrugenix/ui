<div align="center">
  <a href="https://altrugenix.js.org/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://avatars.githubusercontent.com/u/272279351">
      <img alt="Altrugenix logo" src="https://avatars.githubusercontent.com/u/272279351" height="128">
    </picture>
  </a>
  <h1>Altrugenix UI</h1>

<a href="https://altrugenix.js.org/"><img alt="Altrugenix logo" src="https://img.shields.io/badge/MADE%20BY%20Altrugenix-000000.svg?style=for-the-badge&logo=Altrugenix&labelColor=000"></a>
<a href="https://www.npmjs.com/package/@altrugenix/ui"><img alt="NPM version" src="https://img.shields.io/npm/v/@altrugenix/ui.svg?style=for-the-badge&labelColor=000000"></a>
<a href="https://github.com/Altrugenix/ui/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/npm/l/@altrugenix/ui.svg?style=for-the-badge&labelColor=000000"></a>
<a href="https://github.com/Altrugenix/ui/discussions"><img alt="Join the community on GitHub" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=GitHub&labelColor=000000&logoWidth=20"></a>

</div>

# Altrugenix

An open-source, scalable, and production-ready UI component library built with React, TypeScript, and Tailwind CSS.

> [!NOTE]
> This project is built and maintained with the assistance of **AI code agents**, leveraging state-of-the-art agentic workflows for rapid development and high-quality implementation.

## Features

- 💎 **Modern Design**: Modern aesthetics with glassmorphism, smooth animations, and curated color palettes.
- ⚡ **Performance**: Built on Vite with tree-shakeable exports.
- 🎨 **Tailwind Powered**: Full customization via `tailwind.config.ts` and design tokens.
- 🌓 **Dark Mode**: Built-in support for light and dark modes with a simple context provider.
- 🧩 **Scalable Structure**: Atomic component design with compound patterns.
- ♿ **Accessible**: ARIA-compliant components with keyboard navigation support.
- 🧪 **Tested**: Unit tests using Vitest and React Testing Library.
- 📚 **Documented**: Interactive documentation using Storybook.

## Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Vite**
- **class-variance-authority (CVA)**
- **clsx + tailwind-merge**
- **Framer Motion**
- **Storybook**
- **Vitest**

## Getting Started

### Installation

```bash
yarn install
```

### Installation & Usage

To use these packages in another project, you can install them directly from **NPM**:

```bash
yarn add @altrugenix/ui
```

If you are using the scoped packages individually, you can also install them like this:

```bash
yarn add @altrugenix/button
```

## Releasing

We use [Changesets](https://github.com/changesets/changesets) for versioning and releases.

1.  Create a new changeset:
    ```bash
    yarn change
    ```
2.  Follow the prompts to select the packages and version type (patch, minor, major).
3.  Commit the generated changeset file.
4.  Push to `main`.
5.  A "Version Packages" PR will be automatically created/updated.
6.  Merging this PR will trigger an automatic release to **NPM**.

### Development

Run the development server for the docs app:

```bash
yarn dev
```

### Storybook

Run the interactive documentation:

```bash
yarn storybook
```

### Testing

Run unit tests:

```bash
yarn test
```

## Folder Structure

```text
.
├── apps/
│   └── docs/           # Documentation application (Vite + React)
├── packages/
│   ├── ui/             # Main entry point and aggregator for the UI library
│   ├── core/           # Core design tokens, ThemeProvider, and base types
│   ├── utilities/      # Shared animation wrappers and utility components
│   └── [component]/    # Scoped packages (e.g., button, accordion, modal, etc.)
├── .github/
│   └── workflows/      # CI/CD pipelines (Release, Deploy, Linting, etc.)
├── .changeset/         # Version management and changelog configuration
└── .yarn/              # Yarn Modern (v4) configuration
```

## Component Example (Button)

```tsx
import { Button } from "@altrugenix/ui";
import { Mail } from "lucide-react";

export const MyComponent = () => (
  <Button
    variant="primary"
    size="md"
    leftIcon={<Mail className="h-4 w-4" />}
    onClick={() => console.log("Clicked!")}
  >
    Send Email
  </Button>
);
```

## License

MIT
