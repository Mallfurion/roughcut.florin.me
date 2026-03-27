const revealItems = document.querySelectorAll<HTMLElement>(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px"
  }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 40, 220)}ms`;
  revealObserver.observe(item);
});

const tiltCard = document.querySelector<HTMLElement>("[data-tilt-card]");
const visualCard = tiltCard?.querySelector<HTMLElement>(".visual-card");

if (tiltCard && visualCard) {
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
