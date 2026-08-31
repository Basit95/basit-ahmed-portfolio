"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".section-heading > *",
  ".about-unified > *",
  ".about-intro > *",
  ".about-story",
  ".about-profile",
  ".service-row",
  ".hire-lead",
  ".hire-card",
  ".project-card",
  ".github-project-heading > *",
  ".github-project-card",
  ".industry-card",
  ".client-project-card",
  ".wp-console",
  ".wp-capability",
  ".engineering-console",
  ".engineering-capability",
  ".process-grid article",
  ".final-cta > *",
  ".footer > div",
  ".project-detail-hero > *",
  ".project-detail-block > *",
  ".project-detail-actions > *",
];

export default function MotionExperience() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors.join(",")));

    root.classList.add("motion-ready");
    items.forEach((item) => {
      const index = item.parentElement ? Array.from(item.parentElement.children).indexOf(item) : 0;
      item.classList.add("scroll-reveal");
      item.style.setProperty("--reveal-delay", `${Math.min(Math.max(index, 0) * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    items.forEach((item) => observer.observe(item));

    const projectCards = Array.from(document.querySelectorAll<HTMLElement>(".project-card"));
    const cardCleanups = projectCards.map((card) => {
      const move = (event: PointerEvent) => {
        const box = card.getBoundingClientRect();
        const x = ((event.clientX - box.left) / box.width - 0.5) * 12;
        const y = ((event.clientY - box.top) / box.height - 0.5) * 10;
        card.style.setProperty("--preview-x", `${x}px`);
        card.style.setProperty("--preview-y", `${y}px`);
      };
      const reset = () => {
        card.style.setProperty("--preview-x", "0px");
        card.style.setProperty("--preview-y", "0px");
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", reset);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", reset);
      };
    });

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const depthSelectors = [
      ".hero-window",
      ".about-portrait-card",
      ".project-window",
      ".client-project-card",
      ".hire-lead",
      ".service-row",
      ".hire-card",
      ".github-project-card",
      ".industry-card",
      ".process-grid article",
      ".final-cta",
      ".project-detail-hero aside",
      ".detail-feature-grid li",
      ".project-detail-actions",
    ];
    const depthTargets = canHover
      ? Array.from(document.querySelectorAll<HTMLElement>(depthSelectors.join(",")))
      : [];
    const depthCleanups = depthTargets.map((target) => {
      target.classList.add("depth-interactive");
      const move = (event: PointerEvent) => {
        const box = target.getBoundingClientRect();
        const x = Math.min(Math.max((event.clientX - box.left) / box.width, 0), 1);
        const y = Math.min(Math.max((event.clientY - box.top) / box.height, 0), 1);
        const isLargeSurface = target.matches(".final-cta, .project-detail-actions, .project-detail-hero aside");
        const tiltX = isLargeSurface ? 2.4 : 5.5;
        const tiltY = isLargeSurface ? 3.2 : 7;
        target.style.setProperty("--depth-rotate-x", `${(0.5 - y) * tiltX}deg`);
        target.style.setProperty("--depth-rotate-y", `${(x - 0.5) * tiltY}deg`);
        target.style.setProperty("--depth-light-x", `${x * 100}%`);
        target.style.setProperty("--depth-light-y", `${y * 100}%`);
        target.classList.add("is-depth-active");
      };
      const reset = () => {
        target.style.setProperty("--depth-rotate-x", "0deg");
        target.style.setProperty("--depth-rotate-y", "0deg");
        target.style.setProperty("--depth-light-x", "50%");
        target.style.setProperty("--depth-light-y", "50%");
        target.classList.remove("is-depth-active");
      };
      target.addEventListener("pointermove", move);
      target.addEventListener("pointerleave", reset);
      return () => {
        target.removeEventListener("pointermove", move);
        target.removeEventListener("pointerleave", reset);
        target.classList.remove("depth-interactive", "is-depth-active");
      };
    });

    let frame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const stage = document.querySelector<HTMLElement>(".hero-stage");
        if (stage) stage.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.055, 42)}px`);
      });
    };
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });

    const smoothAnchor = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#'], a[href^='/#']");
      if (!link || window.location.pathname !== "/") return;
      const hash = new URL(link.href, window.location.href).hash;
      const target = hash && document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", hash);
    };
    document.addEventListener("click", smoothAnchor);

    return () => {
      observer.disconnect();
      cardCleanups.forEach((cleanup) => cleanup());
      depthCleanups.forEach((cleanup) => cleanup());
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateParallax);
      document.removeEventListener("click", smoothAnchor);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
