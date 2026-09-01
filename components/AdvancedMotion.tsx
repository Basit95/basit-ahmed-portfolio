"use client";

import { useEffect } from "react";

const parallaxSelector = [
  ".hero-stage", ".about-portrait-card", ".hire-lead", ".project-card:nth-child(odd) .project-visual",
  ".engineering-console", ".wp-console", ".final-cta-aside", ".project-detail-hero aside",
  ".project-detail-block:nth-of-type(odd) > div", ".project-detail-actions",
].join(",");

export default function AdvancedMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(parallaxSelector));
    targets.forEach((target, index) => { target.classList.add("parallax-scene"); target.dataset.parallaxDirection = index % 2 ? "-1" : "1"; });
    let parallaxFrame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(parallaxFrame);
      parallaxFrame = requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;
        targets.forEach((target) => {
          const box = target.getBoundingClientRect();
          if (box.bottom < -120 || box.top > window.innerHeight + 120) return;
          const direction = Number(target.dataset.parallaxDirection) || 1;
          const movement = Math.max(-28, Math.min(28, (viewportCenter - (box.top + box.height / 2)) * 0.035)) * direction;
          target.style.setProperty("--parallax-y", movement.toFixed(2) + "px");
        });
      });
    };
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    let current = window.scrollY; let destination = current; let scrollFrame = 0; let active = false;
    const maximum = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const animate = () => {
      const distance = destination - current; current += distance * 0.13; window.scrollTo(0, current);
      if (Math.abs(distance) > 0.5) scrollFrame = requestAnimationFrame(animate);
      else { window.scrollTo(0, destination); current = destination; active = false; }
    };
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || document.documentElement.classList.contains("menu-open")) return;
      event.preventDefault();
      if (!active) { current = window.scrollY; destination = current; active = true; }
      destination = Math.max(0, Math.min(maximum(), destination + event.deltaY));
      cancelAnimationFrame(scrollFrame); scrollFrame = requestAnimationFrame(animate);
    };
    const desktop = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 821px)").matches;
    if (desktop) window.addEventListener("wheel", wheel, { passive: false });
    return () => {
      cancelAnimationFrame(parallaxFrame); cancelAnimationFrame(scrollFrame); window.removeEventListener("scroll", updateParallax);
      if (desktop) window.removeEventListener("wheel", wheel);
      targets.forEach((target) => { target.classList.remove("parallax-scene"); target.style.removeProperty("--parallax-y"); delete target.dataset.parallaxDirection; });
    };
  }, []);
  return null;
}
