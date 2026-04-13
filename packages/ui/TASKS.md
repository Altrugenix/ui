# Altrugenix Modularization Roadmap

The goal is to migrate all UI components from the monolithic `@altrugenix/ui` package into standalone scoped packages. This improves bundle sizes for consumers and enables independent versioning.

## 📦 Package Migration Status

### Foundation

- [x] **@altrugenix/core**: Shared theme, design tokens, and utilities (`cn`, `refs`).

### Core Components

- [x] **@altrugenix/accordion**: Relatable, accessible accordion.
- [x] **@altrugenix/button**: Primitives including `IconButton` and `ButtonGroup`.
- [x] **@altrugenix/badge**: status and notification indicators.
- [x] **@altrugenix/avatar**: profile and image representations.
- [x] **@altrugenix/chip**: compact elements for tags or actions.
- [x] **@altrugenix/link**: themed hyperlink components.
- [x] **@altrugenix/icon**: svg wrapper and icon management.

### Structure & Layout

- [x] **@altrugenix/card**: surface containers for grouping content.
- [x] **@altrugenix/list**: basic and interactive list primitives.
- [x] **@altrugenix/table**: high-performance data tables.
- [x] **@altrugenix/aspect-ratio**: layout utility for fixed ratios.

### Forms & Inputs

- [x] **@altrugenix/input**: standard and specialized text inputs.
- [x] **@altrugenix/textarea**: multiline text entry.
- [x] **@altrugenix/select**: dropdown selection menus.
- [x] **@altrugenix/checkbox**: binary selection controls.
- [x] **@altrugenix/radio**: single-choice selection groups.
- [x] **@altrugenix/switch**: binary toggle controls.
- [x] **@altrugenix/slider**: range selection components.

### Overlays & Feedback

- [x] **@altrugenix/modal**: dialogs and overlay containers.
- [x] **@altrugenix/toast**: transient notification components.
- [x] **@altrugenix/snackbar**: persistent status indicators.
- [x] **@altrugenix/backdrop**: dimming utilities for overlays.

### Specialized Components

- [x] **@altrugenix/carousel**: touch-enabled content sliders.
- [x] **@altrugenix/charts**: data visualization primitives.
- [x] **@altrugenix/kanban**: board-based project management views.
- [x] **@altrugenix/virtual-list**: high-performance list virtualization.

---

## 🛠 Migration Checklist (Per Component)

For each component migrated:

1. Create `packages/<name>` folder.
2. Scaffold `package.json`, `tsconfig.json`, and `vite.config.ts`.
3. Move source files from `packages/ui/src/components/ui/<name>`.
4. Update imports to use `@altrugenix/core` for utilities.
5. Setup unit tests in `src/*.test.tsx`.
6. Re-export from `packages/ui` to maintain backward compatibility.
7. Run `yarn build` and verify.
