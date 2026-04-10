# Altrugenix UI Component Roadmap

This document identifies components that are currently missing Storybook documentation. The goal is to ensure 100% coverage for all UI primitives.

## 📝 Missing Storybook Stories

- [x] **Calendar View**: Add interactive story for the complex calendar component.
- [x] **Carousel**: Implement slider demonstration with touch support and dot-indicators.
- [x] **Charts**: Create stories for available chart variants (e.g., BarChart).
- [x] **Color Picker**: Demonstrate hex selection and preset palettes.
- [x] **Date Picker**: Add stories for single and range date selection.
- [x] **File Upload**: Showcase drag-and-drop and file selection states.
- [x] **Heading**: Demonstrate different levels (H1-H6) and variants.
- [x] **Icon**: Create a gallery/listing of available icons.
- [x] **Image**: Showcase lazy loading and fallback behaviors.
- [x] **Image Viewer (Lightroom)**: Demonstrate zoom, pan, and gallery interaction.
- [x] **Input OTP**: Add stories for various lengths and validation states.
- [x] **Kanban**: Implementing an interactive board demonstration.
- [x] **Link**: Showcase standard and themed link styles.
- [x] **Metric Card**: Demonstrate KPI cards with trends and sparklines.
- [x] **Rich Text Editor**: Add interactive editor story.
- [x] **Text**: Show off typography tokens and utility variants.
- [x] **Video Player**: Demonstrate custom controls and progress tracking.
- [x] **Virtual List**: Show handling of large datasets with virtualization.

## 🧱 Missing Core Components (Joy UI Inspired)

High-quality primitives to round out the library's versatility.

- [x] **IconButton**: A specialized button variant optimized for single-icon use cases with proper padding and hover states.
- [x] **ButtonGroup**: A layout component to group multiple buttons into a single visually cohesive unit.
- [x] **AvatarGroup**: A component for stacking multiple avatars (overlapping) with a limit indicator (e.g., +3).
- [x] **ListItemButton & Decorator**: Advanced primitives for the `List` component to handle interactive items and lead/tail icons.
- [x] **Sheet**: A foundational surface component for grouping content with specific elevations and backgrounds.
- [x] **Circular Progress**: A circular indeterminate or determinate loading indicator.
- [x] **Aspect Ratio**: A utility wrapper to force a specific ratio on its children (e.g., 16/9 for video/images).
- [x] **Snackbar**: A specialized "Toast" variant for bottom/top persistent notifications.
- [x] **Typography Wrapper**: A high-level component to manage consistent text styles (Size, Weight, Color) across the app.
- [x] **CssBaseline / GlobalStyles**: Utilities for consistent global resets and styles across different environments.

## 🧠 Headless & Accessibility Utilities (Base UI Inspired)

Low-level primitives focused on behavior and accessibility.

- [x] **TextareaAutosize**: A specialized textarea component that automatically adjusts its height based on the content.
- [ ] **Popper / Floating Utility**: A low-level positioning engine for popovers, tooltips, and menus (potentially leveraging Floating UI).
- [x] **Portal**: A utility to render component children into a DOM node at the end of `document.body`.
- [x] **ClickAwayListener**: A utility component to detect and handle click events outside its child element.
- [x] **FocusTrap**: A critical accessibility component that traps focus within a specific container (e.g., inside a Modal or Drawer).
- [x] **VisuallyHidden**: A utility to hide content from the screen while remaining accessible to screen readers.

## 🌟 Advanced Inputs & Refined Layouts (MUI Inspired)

Enterprise-grade components for complex data and mobile-first interactions.

- [x] **ToggleButton & ToggleButtonGroup**: A set of mutually exclusive buttons for mode switching or data filtering.
- [x] **Rating**: An interactive star or icon-based rating component with support for halves and read-only states.
- [x] **Transfer List**: A dual-list selection component for moving items between two sets (e.g., "Available" vs "Selected").
- [x] **Speed Dial**: A floating action button that displays a series of quick-access actions upon hover or click.
- [x] **Backdrop**: A standalone utility component for dimming the background behind active elements.
- [x] **Image List**: A specialized grid layout optimized for displaying collections of images with captions.
- [x] **Data Grid (High-Performance)**: A virtualization-powered grid for handling thousands of rows with advanced Excel-like features.
- [x] **Time & DateTime Picker**: Complementary pickers for selecting time or combined date/time values.

## 🎬 Animation & System Utilities

Standardized behaviors for consistent UI motion and environment handling.

- [ ] **Animation Wrappers**: Reusable `framer-motion` components for `Grow`, `Fade`, `Slide`, `Zoom`, and `Collapse`.
- [ ] **NoSsr Wrapper**: A utility component to ensure its children are only rendered on the client side (Vite/Next.js).
- [ ] **Elevation / Paper**: A high-level layout component that abstracts shadows and borders into standardized depth levels.

---

_Note: Use `yarn storybook` to verify implementations._
