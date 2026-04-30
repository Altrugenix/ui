import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "@altrugenix/carousel";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="bg-muted/20 h-[400px] w-full max-w-3xl overflow-hidden rounded-2xl border">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const DemoSlide = ({ color, text }: { color: string; text: string }) => (
  <div
    className={`flex h-full w-full items-center justify-center text-4xl font-bold text-white ${color}`}
  >
    {text}
  </div>
);

const MOCK_ITEMS = [
  <DemoSlide
    key="1"
    color="bg-gradient-to-br from-indigo-500 to-purple-600"
    text="Slide 1"
  />,
  <DemoSlide
    key="2"
    color="bg-gradient-to-br from-rose-500 to-orange-500"
    text="Slide 2"
  />,
  <DemoSlide
    key="3"
    color="bg-gradient-to-br from-emerald-500 to-teal-600"
    text="Slide 3"
  />,
  <DemoSlide
    key="4"
    color="bg-gradient-to-br from-amber-400 to-yellow-600"
    text="Slide 4"
  />,
];

export const Default: Story = {
  args: {
    items: MOCK_ITEMS,
  },
};

export const FastAutoPlay: Story = {
  args: {
    items: MOCK_ITEMS,
    autoPlayInterval: 2000,
  },
};

export const NavigationOnly: Story = {
  args: {
    items: MOCK_ITEMS,
    showDots: false,
    autoPlayInterval: 0,
  },
};

export const DotsOnly: Story = {
  args: {
    items: MOCK_ITEMS,
    showArrows: false,
    autoPlayInterval: 0,
  },
};
