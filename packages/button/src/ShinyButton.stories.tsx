import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShinyButton } from "@altrugenix/button";

const meta: Meta<typeof ShinyButton> = {
  title: "UI/Button/ShinyButton",
  component: ShinyButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A premium, animated button component that features a shiny moving gradient effect. Built with Framer Motion, it's perfect for primary calls-to-action or premium features.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger", "success"],
      description: "Semantic color variant for the button.",
      table: { category: "Appearance" },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
      description: "Size of the button.",
      table: { category: "Appearance" },
    },
    children: {
      description: "Button text or elements.",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Get Started ✨",
    variant: "primary",
    size: "lg",
  },
};

export const Success: Story = {
  args: {
    children: "Claim Reward 🏆",
    variant: "primary",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "A success variant, great for positive confirmations.",
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: "Upgrade to Pro",
    variant: "outline",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "An outline variant with a subtle shine effect, suitable for secondary actions.",
      },
    },
  },
};

export const Danger: Story = {
  args: {
    children: "Delete Account",
    variant: "destructive",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "A destructive variant with a red shine effect.",
      },
    },
  },
};

export const MarketingHero: Story = {
  render: () => (
    <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-md">
      <h2 className="text-3xl font-bold tracking-tight">Supercharge Your Workflow</h2>
      <p className="text-muted-foreground">
        Join thousands of developers building faster and smarter with our premium toolset.
      </p>
      <div className="flex items-center gap-4">
        <ShinyButton size="lg" variant="primary">Start Free Trial</ShinyButton>
        <ShinyButton size="lg" variant="outline">View Demo</ShinyButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A hero section composition showing how ShinyButton attracts attention alongside standard buttons.",
      },
    },
  },
};
