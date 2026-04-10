import type { Meta } from "@storybook/react-vite";
import { Confetti } from "../components/feedback/Confetti";
import { Button } from "../components/ui/button";

const meta: Meta = {
  title: "Components/Feedback/Confetti",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Burst = () => (
  <Button onClick={() => Confetti.burst()}>Trigger Celebration! 🎉</Button>
);

export const SideCannons = () => (
  <Button onClick={() => Confetti.sideCannons()}>Side Cannons Blast 🎆</Button>
);

export const Rain = () => (
  <Button onClick={() => Confetti.rain()}>It's Raining Confetti! ☔</Button>
);
