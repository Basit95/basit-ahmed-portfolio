"use client";

import { useEffect, useRef } from "react";

export default function LiquidCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduceMotion) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let frame = 0;

    document.documentElement.classList.add("has-liquid-cursor");

    const move = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dotRef.current?.style.setProperty("transform", `translate3d(${mouseX}px, ${mouseY}px, 0)`);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ringRef.current?.style.setProperty("transform", `translate3d(${ringX}px, ${ringY}px, 0)`);
      frame = requestAnimationFrame(animate);
    };

    const hide = () => {
      dotRef.current?.classList.add("is-hidden");
      ringRef.current?.classList.add("is-hidden");
    };
    const show = () => {
      dotRef.current?.classList.remove("is-hidden");
      ringRef.current?.classList.remove("is-hidden");
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-liquid-cursor");
    };
  }, []);

  return <><div ref={ringRef} className="liquid-glow" aria-hidden="true" /><div ref={dotRef} className="liquid-cursor" aria-hidden="true"><span /></div></>;
}
