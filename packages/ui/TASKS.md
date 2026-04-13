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

- [ ] **@altrugenix/card**: surface containers for grouping content.
- [ ] **@altrugenix/list**: basic and interactive list primitives.
- [ ] **@altrugenix/table**: high-performance data tables.
- [ ] **@altrugenix/aspect-ratio**: layout utility for fixed ratios.

### Forms & Inputs

- [ ] **@altrugenix/input**: standard and specialized text inputs.
- [ ] **@altrugenix/textarea**: multiline text entry.
- [ ] **@altrugenix/select**: dropdown selection menus.
- [ ] **@altrugenix/checkbox**: binary selection controls.
- [ ] **@altrugenix/radio**: single-choice selection groups.
- [ ] **@altrugenix/switch**: binary toggle controls.
- [ ] **@altrugenix/slider**: range selection components.

### Overlays & Feedback

- [ ] **@altrugenix/modal**: dialogs and overlay containers.
- [ ] **@altrugenix/toast**: transient notification components.
- [ ] **@altrugenix/snackbar**: persistent status indicators.
- [ ] **@altrugenix/backdrop**: dimming utilities for overlays.

### Specialized Components

- [ ] **@altrugenix/carousel**: touch-enabled content sliders.
- [ ] **@altrugenix/charts**: data visualization primitives.
- [ ] **@altrugenix/kanban**: board-based project management views.

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
