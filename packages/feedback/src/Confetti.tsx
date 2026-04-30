import confetti from "canvas-confetti";

/**
 * Confetti celebration trigger.
 * Can be triggered from any successful user action (e.g., form submission).
 * Uses canvas-confetti under the hood for high-performance celebration effects.
 */

export type ConfettiOptions = confetti.Options;

/**
 * Standard celebratory blast from the center.
 */
export const confettiBurst = (options?: ConfettiOptions) => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    ...options,
  });
};

/**
 * Side cannons effect, perfect for full-page celebrations.
 */
export const confettiSideCannons = () => {
  const end = Date.now() + 3 * 1000; // 3 seconds

  const frame = () => {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: [
        "#26ccff",
        "#a25afd",
        "#ff5e7e",
        "#88ff5a",
        "#fcff42",
        "#ffa62d",
        "#ff36ff",
      ],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };
  frame();
};

/**
 * Realistic "rain" effect from the top.
 */
export const confettiRain = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const interval: ReturnType<typeof setInterval> = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

export const Confetti = {
  burst: confettiBurst,
  sideCannons: confettiSideCannons,
  rain: confettiRain,
};
