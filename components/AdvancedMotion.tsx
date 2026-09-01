"use client";

import { useEffect } from "react";

const parallaxGroups = [
  { selector: ".hero-stage", factor: 0.09 },
  { selector: ".about-portrait-card", factor: -0.08 },
  { selector: ".section-heading", factor: 0.045 },
  { selector: ".project-card:nth-child(odd) .project-visual", factor: 0.07 },
  { selector: ".engineering-console", factor: -0.065 },
  { selector: ".wp-console", factor: 0.065 },
  { selector: ".final-cta-aside", factor: -0.075 },
  { selector: ".project-detail-hero aside", factor: -0.08 },
  { selector: ".project-detail-block:nth-of-type(odd) > div", factor: 0.055 },
  { selector: ".parallax-band .parallax-backdrop", factor: 0.16 },
  { selector: ".parallax-band .parallax-grid", factor: -0.08 },
  { selector: ".parallax-band .parallax-copy", factor: -0.055 },
  { selector: ".parallax-band .parallax-card", factor: 0.12 },
];

export default function AdvancedMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 821px)").matches;
    if (reduced || !desktop) return;

    const targets = parallaxGroups.flatMap(({ selector, factor }) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)).map((element) => ({ element, factor })),
    );

    targets.forEach(({ element }) => element.classList.add("parallax-scene"));

    let frame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        targets.forEach(({ element, factor }) => {
          const box = element.getBoundingClientRect();
          if (box.bottom < -180 || box.top > window.innerHeight + 180) return;
          const elementCenter = box.top + box.height / 2;
          const movement = Math.max(-86, Math.min(86, (viewportCenter - elementCenter) * factor));
          element.style.setProperty("--parallax-y", movement.toFixed(2) + "px");
        });
      });
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
      targets.forEach(({ element }) => {
        element.classList.remove("parallax-scene");
        element.style.removeProperty("--parallax-y");
      });
    };
  }, []);

  return null;
}
