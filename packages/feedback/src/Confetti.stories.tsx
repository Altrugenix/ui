import type { Meta } from "@storybook/react-vite";
import { Confetti } from "@altrugenix/feedback";
import { Button } from "@altrugenix/button";

const meta: Meta = {
  title: "Feedback/Confetti",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A utility for triggering confetti animations on the screen. Uses `canvas-confetti` under the hood to fire confetti bursts from different positions.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Burst = () => (
  <Button onClick={() => Confetti.burst()}>Trigger Celebration! 🎉</Button>
);

Burst.parameters = {
  docs: {
    description: {
      story: "A standard burst of confetti from the center of the screen.",
    },
  },
};

export const SideCannons = () => (
  <Button onClick={() => Confetti.sideCannons()}>Side Cannons Blast 🎆</Button>
);

SideCannons.parameters = {
  docs: {
    description: {
      story: "Shoots confetti from the bottom left and bottom right corners simultaneously.",
    },
  },
};

export const Rain = () => (
  <Button onClick={() => Confetti.rain()}>It's Raining Confetti! ☔</Button>
);

Rain.parameters = {
  docs: {
    description: {
      story: "A continuous rain of confetti from the top of the screen. Drops slowly and constantly over a few seconds.",
    },
  },
};
