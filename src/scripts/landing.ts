const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const hasFinePointer = window.matchMedia("(pointer: fine)");
const canAnimate = !prefersReducedMotion.matches;

const tiltCard = document.querySelector<HTMLElement>("[data-tilt-card]");
const visualCard = tiltCard?.querySelector<HTMLElement>(".visual-card");

if (canAnimate && hasFinePointer.matches && tiltCard && visualCard) {
  const resetTilt = () => {
    visualCard.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  tiltCard.addEventListener("pointermove", (event) => {
    const rect = tiltCard.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 7;

    visualCard.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.012)`;
  });

  tiltCard.addEventListener("pointerleave", resetTilt);
  tiltCard.addEventListener("pointercancel", resetTilt);

  resetTilt();
}
