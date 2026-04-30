/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
      exclude: [
        "src/test",
        "src/**/*.test.ts",
        "src/**/*.test.tsx",
        "src/App.tsx",
        "src/main.tsx",
      ],
      skipDiagnostics: false,
      rollupTypes: true,
    }),
  ],
  resolve: {
    alias: {
      ...(process.env.VITEST
        ? {
            "@altrugenix/accordion": path.resolve(
              __dirname,
              "../accordion/src"
            ),
            "@altrugenix/aspect-ratio": path.resolve(
              __dirname,
              "../aspect-ratio/src"
            ),
            "@altrugenix/autocomplete": path.resolve(
              __dirname,
              "../autocomplete/src"
            ),
            "@altrugenix/avatar": path.resolve(__dirname, "../avatar/src"),
            "@altrugenix/backdrop": path.resolve(__dirname, "../backdrop/src"),
            "@altrugenix/badge": path.resolve(__dirname, "../badge/src"),
            "@altrugenix/breadcrumbs": path.resolve(
              __dirname,
              "../breadcrumbs/src"
            ),
            "@altrugenix/button": path.resolve(__dirname, "../button/src"),
            "@altrugenix/calendar-view": path.resolve(
              __dirname,
              "../calendar-view/src"
            ),
            "@altrugenix/card": path.resolve(__dirname, "../card/src"),
            "@altrugenix/carousel": path.resolve(__dirname, "../carousel/src"),
            "@altrugenix/charts": path.resolve(__dirname, "../charts/src"),
            "@altrugenix/checkbox": path.resolve(__dirname, "../checkbox/src"),
            "@altrugenix/chip": path.resolve(__dirname, "../chip/src"),
            "@altrugenix/circular-progress": path.resolve(
              __dirname,
              "../circular-progress/src"
            ),
            "@altrugenix/color-picker": path.resolve(
              __dirname,
              "../color-picker/src"
            ),
            "@altrugenix/command-palette": path.resolve(
              __dirname,
              "../command-palette/src"
            ),
            "@altrugenix/core": path.resolve(__dirname, "../core/src"),
            "@altrugenix/css-baseline": path.resolve(
              __dirname,
              "../css-baseline/src"
            ),
            "@altrugenix/date-picker": path.resolve(
              __dirname,
              "../date-picker/src"
            ),
            "@altrugenix/divider": path.resolve(__dirname, "../divider/src"),
            "@altrugenix/drawer": path.resolve(__dirname, "../drawer/src"),
            "@altrugenix/effects": path.resolve(__dirname, "../effects/src"),
            "@altrugenix/feedback": path.resolve(__dirname, "../feedback/src"),
            "@altrugenix/file-upload": path.resolve(
              __dirname,
              "../file-upload/src"
            ),
            "@altrugenix/heading": path.resolve(__dirname, "../heading/src"),
            "@altrugenix/icon": path.resolve(__dirname, "../icon/src"),
            "@altrugenix/image": path.resolve(__dirname, "../image/src"),
            "@altrugenix/image-list": path.resolve(
              __dirname,
              "../image-list/src"
            ),
            "@altrugenix/image-viewer": path.resolve(
              __dirname,
              "../image-viewer/src"
            ),
            "@altrugenix/input": path.resolve(__dirname, "../input/src"),
            "@altrugenix/input-otp": path.resolve(
              __dirname,
              "../input-otp/src"
            ),
            "@altrugenix/kanban": path.resolve(__dirname, "../kanban/src"),
            "@altrugenix/link": path.resolve(__dirname, "../link/src"),
            "@altrugenix/list": path.resolve(__dirname, "../list/src"),
            "@altrugenix/metric-card": path.resolve(
              __dirname,
              "../metric-card/src"
            ),
            "@altrugenix/modal": path.resolve(__dirname, "../modal/src"),
            "@altrugenix/popover": path.resolve(__dirname, "../popover/src"),
            "@altrugenix/progress-bar": path.resolve(
              __dirname,
              "../progress-bar/src"
            ),
            "@altrugenix/radio": path.resolve(__dirname, "../radio/src"),
            "@altrugenix/rating": path.resolve(__dirname, "../rating/src"),
            "@altrugenix/rich-text-editor": path.resolve(
              __dirname,
              "../rich-text-editor/src"
            ),
            "@altrugenix/select": path.resolve(__dirname, "../select/src"),
            "@altrugenix/skeleton": path.resolve(__dirname, "../skeleton/src"),
            "@altrugenix/slider": path.resolve(__dirname, "../slider/src"),
            "@altrugenix/snackbar": path.resolve(__dirname, "../snackbar/src"),
            "@altrugenix/speed-dial": path.resolve(
              __dirname,
              "../speed-dial/src"
            ),
            "@altrugenix/stepper": path.resolve(__dirname, "../stepper/src"),
            "@altrugenix/switch": path.resolve(__dirname, "../switch/src"),
            "@altrugenix/table": path.resolve(__dirname, "../table/src"),
            "@altrugenix/tabs": path.resolve(__dirname, "../tabs/src"),
            "@altrugenix/tag": path.resolve(__dirname, "../tag/src"),
            "@altrugenix/text": path.resolve(__dirname, "../text/src"),
            "@altrugenix/textarea": path.resolve(__dirname, "../textarea/src"),
            "@altrugenix/timeline": path.resolve(__dirname, "../timeline/src"),
            "@altrugenix/toast": path.resolve(__dirname, "../toast/src"),
            "@altrugenix/toggle": path.resolve(__dirname, "../toggle/src"),
            "@altrugenix/transfer-list": path.resolve(
              __dirname,
              "../transfer-list/src"
            ),
            "@altrugenix/typography": path.resolve(
              __dirname,
              "../typography/src"
            ),
            "@altrugenix/utilities": path.resolve(
              __dirname,
              "../utilities/src"
            ),
            "@altrugenix/video-player": path.resolve(
              __dirname,
              "../video-player/src"
            ),
            "@altrugenix/virtual-list": path.resolve(
              __dirname,
              "../virtual-list/src"
            ),
            "@altrugenix/alert": path.resolve(
              __dirname,
              "../alert/src"
            ),
            "@altrugenix/form-field": path.resolve(
              __dirname,
              "../form-field/src"
            ),
            "@altrugenix/form-group": path.resolve(
              __dirname,
              "../form-group/src"
            ),
            "@altrugenix/form-validation": path.resolve(
              __dirname,
              "../form-validation/src"
            ),
            "@altrugenix/pagination": path.resolve(
              __dirname,
              "../pagination/src"
            ),
            "@altrugenix/spinner": path.resolve(
              __dirname,
              "../spinner/src"
            ),
            "@altrugenix/app-shell": path.resolve(
              __dirname,
              "../app-shell/src"
            ),
            "@altrugenix/box": path.resolve(
              __dirname,
              "../box/src"
            ),
            "@altrugenix/container": path.resolve(
              __dirname,
              "../container/src"
            ),
            "@altrugenix/flex": path.resolve(
              __dirname,
              "../flex/src"
            ),
            "@altrugenix/grid": path.resolve(
              __dirname,
              "../grid/src"
            ),
            "@altrugenix/marquee": path.resolve(
              __dirname,
              "../marquee/src"
            ),
            "@altrugenix/paper": path.resolve(
              __dirname,
              "../paper/src"
            ),
            "@altrugenix/spacer": path.resolve(
              __dirname,
              "../spacer/src"
            ),
            "@altrugenix/stack": path.resolve(
              __dirname,
              "../stack/src"
            ),
            "@altrugenix/dropdown-menu": path.resolve(
              __dirname,
              "../dropdown-menu/src"
            ),
            "@altrugenix/navbar": path.resolve(
              __dirname,
              "../navbar/src"
            ),
            "@altrugenix/sidebar": path.resolve(
              __dirname,
              "../sidebar/src"
            ),
            "@altrugenix/context-menu": path.resolve(
              __dirname,
              "../context-menu/src"
            ),
            "@altrugenix/tooltip": path.resolve(
              __dirname,
              "../tooltip/src"
            ),
            "~": path.resolve(__dirname, "./src"),
          }
        : {}),
    },
  },
  build: {
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      name: "AltrugenixUI",
      formats: ["es", "umd"],
      fileName: (format) =>
        `altrugenix-ui.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "react",
        "react-dom",
        "framer-motion",
        "lucide-react",
        "clsx",
        "tailwind-merge",
        "class-variance-authority",
        "@altrugenix/accordion",
        "@altrugenix/aspect-ratio",
        "@altrugenix/autocomplete",
        "@altrugenix/avatar",
        "@altrugenix/backdrop",
        "@altrugenix/badge",
        "@altrugenix/breadcrumbs",
        "@altrugenix/button",
        "@altrugenix/calendar-view",
        "@altrugenix/card",
        "@altrugenix/carousel",
        "@altrugenix/charts",
        "@altrugenix/checkbox",
        "@altrugenix/chip",
        "@altrugenix/circular-progress",
        "@altrugenix/color-picker",
        "@altrugenix/command-palette",
        "@altrugenix/core",
        "@altrugenix/css-baseline",
        "@altrugenix/date-picker",
        "@altrugenix/divider",
        "@altrugenix/drawer",
        "@altrugenix/effects",
        "@altrugenix/feedback",
        "@altrugenix/file-upload",
        "@altrugenix/heading",
        "@altrugenix/icon",
        "@altrugenix/image",
        "@altrugenix/image-list",
        "@altrugenix/image-viewer",
        "@altrugenix/input",
        "@altrugenix/input-otp",
        "@altrugenix/kanban",
        "@altrugenix/link",
        "@altrugenix/list",
        "@altrugenix/metric-card",
        "@altrugenix/modal",
        "@altrugenix/popover",
        "@altrugenix/progress-bar",
        "@altrugenix/radio",
        "@altrugenix/rating",
        "@altrugenix/rich-text-editor",
        "@altrugenix/select",
        "@altrugenix/sheet",
        "@altrugenix/skeleton",
        "@altrugenix/slider",
        "@altrugenix/snackbar",
        "@altrugenix/speed-dial",
        "@altrugenix/stepper",
        "@altrugenix/switch",
        "@altrugenix/table",
        "@altrugenix/tabs",
        "@altrugenix/tag",
        "@altrugenix/text",
        "@altrugenix/textarea",
        "@altrugenix/timeline",
        "@altrugenix/toast",
        "@altrugenix/toggle",
        "@altrugenix/transfer-list",
        "@altrugenix/typography",
        "@altrugenix/utilities",
        "@altrugenix/video-player",
        "@altrugenix/virtual-list",
        "@altrugenix/alert",
        "@altrugenix/form-field",
        "@altrugenix/form-group",
        "@altrugenix/form-validation",
        "@altrugenix/pagination",
        "@altrugenix/spinner",
        "@altrugenix/app-shell",
        "@altrugenix/box",
        "@altrugenix/container",
        "@altrugenix/flex",
        "@altrugenix/grid",
        "@altrugenix/marquee",
        "@altrugenix/paper",
        "@altrugenix/spacer",
        "@altrugenix/stack",
        "@altrugenix/dropdown-menu",
        "@altrugenix/navbar",
        "@altrugenix/sidebar",
        "@altrugenix/context-menu",
        "@altrugenix/tooltip",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "Motion",
          "lucide-react": "Lucide",
          clsx: "Clsx",
          "tailwind-merge": "TailwindMerge",
          "class-variance-authority": "Cva",
          "react/jsx-runtime": "jsxRuntime",
          "@altrugenix/accordion": "AltrugenixAccordion",
          "@altrugenix/aspect-ratio": "AltrugenixAspectRatio",
          "@altrugenix/autocomplete": "AltrugenixAutocomplete",
          "@altrugenix/avatar": "AltrugenixAvatar",
          "@altrugenix/backdrop": "AltrugenixBackdrop",
          "@altrugenix/badge": "AltrugenixBadge",
          "@altrugenix/breadcrumbs": "AltrugenixBreadcrumbs",
          "@altrugenix/button": "AltrugenixButton",
          "@altrugenix/calendar-view": "AltrugenixCalendarView",
          "@altrugenix/card": "AltrugenixCard",
          "@altrugenix/carousel": "AltrugenixCarousel",
          "@altrugenix/charts": "AltrugenixCharts",
          "@altrugenix/checkbox": "AltrugenixCheckbox",
          "@altrugenix/chip": "AltrugenixChip",
          "@altrugenix/circular-progress": "AltrugenixCircularProgress",
          "@altrugenix/color-picker": "AltrugenixColorPicker",
          "@altrugenix/command-palette": "AltrugenixCommandPalette",
          "@altrugenix/core": "AltrugenixCore",
          "@altrugenix/css-baseline": "AltrugenixCssBaseline",
          "@altrugenix/date-picker": "AltrugenixDatePicker",
          "@altrugenix/divider": "AltrugenixDivider",
          "@altrugenix/drawer": "AltrugenixDrawer",
          "@altrugenix/effects": "AltrugenixEffects",
          "@altrugenix/feedback": "AltrugenixFeedback",
          "@altrugenix/file-upload": "AltrugenixFileUpload",
          "@altrugenix/heading": "AltrugenixHeading",
          "@altrugenix/icon": "AltrugenixIcon",
          "@altrugenix/image": "AltrugenixImage",
          "@altrugenix/image-list": "AltrugenixImageList",
          "@altrugenix/image-viewer": "AltrugenixImageViewer",
          "@altrugenix/input": "AltrugenixInput",
          "@altrugenix/input-otp": "AltrugenixInputOtp",
          "@altrugenix/kanban": "AltrugenixKanban",
          "@altrugenix/link": "AltrugenixLink",
          "@altrugenix/list": "AltrugenixList",
          "@altrugenix/metric-card": "AltrugenixMetricCard",
          "@altrugenix/modal": "AltrugenixModal",
          "@altrugenix/popover": "AltrugenixPopover",
          "@altrugenix/progress-bar": "AltrugenixProgressBar",
          "@altrugenix/radio": "AltrugenixRadio",
          "@altrugenix/rating": "AltrugenixRating",
          "@altrugenix/rich-text-editor": "AltrugenixRichTextEditor",
          "@altrugenix/select": "AltrugenixSelect",
          "@altrugenix/sheet": "AltrugenixSheet",
          "@altrugenix/skeleton": "AltrugenixSkeleton",
          "@altrugenix/slider": "AltrugenixSlider",
          "@altrugenix/snackbar": "AltrugenixSnackbar",
          "@altrugenix/speed-dial": "AltrugenixSpeedDial",
          "@altrugenix/stepper": "AltrugenixStepper",
          "@altrugenix/switch": "AltrugenixSwitch",
          "@altrugenix/table": "AltrugenixTable",
          "@altrugenix/tabs": "AltrugenixTabs",
          "@altrugenix/tag": "AltrugenixTag",
          "@altrugenix/text": "AltrugenixText",
          "@altrugenix/textarea": "AltrugenixTextarea",
          "@altrugenix/timeline": "AltrugenixTimeline",
          "@altrugenix/toast": "AltrugenixToast",
          "@altrugenix/toggle": "AltrugenixToggle",
          "@altrugenix/transfer-list": "AltrugenixTransferList",
          "@altrugenix/typography": "AltrugenixTypography",
          "@altrugenix/utilities": "AltrugenixUtilities",
          "@altrugenix/video-player": "AltrugenixVideoPlayer",
          "@altrugenix/virtual-list": "AltrugenixVirtualList",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
