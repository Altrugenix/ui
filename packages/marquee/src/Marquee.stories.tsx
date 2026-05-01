import type { Meta, StoryObj } from "@storybook/react-vite";
import { Marquee } from "@altrugenix/marquee";

const meta: Meta<typeof Marquee> = {
  title: "Animation/Marquee",
  component: Marquee,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A continuously scrolling content strip with configurable direction, speed, and pause-on-hover. Automatically duplicates children to create a seamless infinite loop.",
      },
    },
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["left", "right"],
      description: "Scrolling direction.",
      table: { category: "Behavior" },
    },
    speed: {
      control: { type: "number", min: 5, max: 100 },
      description: "Animation duration in seconds (lower = faster).",
      table: { category: "Behavior" },
    },
    pauseOnHover: {
      control: "boolean",
      description: "Pause animation when the user hovers.",
      table: { category: "Behavior" },
    },
    vertical: {
      control: "boolean",
      description: "Scroll vertically instead of horizontally.",
      table: { category: "Behavior" },
    },
    gap: {
      description: "CSS gap between duplicated content blocks.",
      table: { category: "Appearance" },
    },
  },
};

export default meta;

const LogoCard = ({ name }: { name: string }) => (
  <div className="bg-card flex h-16 w-32 items-center justify-center rounded-lg border px-4 text-sm font-medium shadow-sm">
    {name}
  </div>
);

export const Default: StoryObj = {
  render: () => (
    <Marquee>
      <LogoCard name="React" />
      <LogoCard name="Vue" />
      <LogoCard name="Angular" />
      <LogoCard name="Svelte" />
      <LogoCard name="Next.js" />
      <LogoCard name="Nuxt" />
    </Marquee>
  ),
};

export const ReverseDirection: StoryObj = {
  render: () => (
    <Marquee direction="right">
      <LogoCard name="TypeScript" />
      <LogoCard name="JavaScript" />
      <LogoCard name="Python" />
      <LogoCard name="Rust" />
      <LogoCard name="Go" />
    </Marquee>
  ),
  parameters: {
    docs: {
      description: {
        story: "Scrolling from left to right instead of the default right to left.",
      },
    },
  },
};

export const Fast: StoryObj = {
  render: () => (
    <Marquee speed={10}>
      <LogoCard name="Fast" />
      <LogoCard name="Speed" />
      <LogoCard name="Quick" />
      <LogoCard name="Rapid" />
      <LogoCard name="Swift" />
    </Marquee>
  ),
  parameters: {
    docs: {
      description: {
        story: "A fast-scrolling marquee with `speed={10}` (10 second loop).",
      },
    },
  },
};

export const TechLogos: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <Marquee speed={30}>
        <LogoCard name="React" />
        <LogoCard name="TypeScript" />
        <LogoCard name="Tailwind" />
        <LogoCard name="Vite" />
        <LogoCard name="Storybook" />
        <LogoCard name="Vitest" />
      </Marquee>
      <Marquee speed={30} direction="right">
        <LogoCard name="Node.js" />
        <LogoCard name="Docker" />
        <LogoCard name="Prisma" />
        <LogoCard name="Redis" />
        <LogoCard name="PostgreSQL" />
        <LogoCard name="Firebase" />
      </Marquee>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A dual-row marquee with opposite directions — a common hero section pattern for showcasing partner logos or tech stacks.",
      },
    },
  },
};
