const parentContainer = document.querySelector(".gigs-row");
const loopMarquee = document.querySelector(".piece-title");

parentContainer.addEventListener("mouseenter", () => {
  for (let i = 0; i < 3; i++) {
    const clone = loopMarquee.cloneNode(true);
    clone.classList.add("clone-marquee");
    parentContainer.appendChild(clone);
  }
});

parentContainer.addEventListener("mouseleave", () => {
  const clones = document.querySelectorAll(".clone-marquee");
  clones.forEach((clone) => clone.remove());
});
