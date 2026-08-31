"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const metrics = [
  { value: 6, suffix: "+", label: "Years building for the web", note: "Since 2018" },
  { value: 70, suffix: "+", label: "Websites built and delivered", note: "Client and company work" },
  { value: 40, suffix: "%", label: "Manual work reduced", note: "Through automation" },
  { value: 100, suffix: "%", label: "Remote collaboration", note: "Available worldwide" },
];

export default function AnimatedMetrics() {
  const root = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const started = useRef(false);
  const [values, setValues] = useState(metrics.map((metric) => metric.value));
  const [phase, setPhase] = useState<"idle" | "counting" | "done">("idle");

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    const finishWithoutMotion = () => {
      setValues(metrics.map((metric) => metric.value));
      setPhase("done");
    };

    if (!("IntersectionObserver" in window)) {
      finishWithoutMotion();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          finishWithoutMotion();
          return;
        }

        setValues(metrics.map(() => 0));
        setPhase("counting");
        const start = performance.now() + 120;
        const duration = 1450;
        const stagger = 140;

        const tick = (now: number) => {
          let complete = true;
          const next = metrics.map((metric, index) => {
            const progress = Math.min(1, Math.max(0, (now - start - index * stagger) / duration));
            if (progress < 1) complete = false;
            const eased = 1 - Math.pow(1 - progress, 4);
            return Math.round(metric.value * eased);
          });

          setValues(next);
          if (complete) setPhase("done");
          else frame.current = requestAnimationFrame(tick);
        };

        frame.current = requestAnimationFrame(tick);
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section className={`proof-strip metrics-${phase}`} aria-label="Experience summary">
      <div ref={root} className="page-shell proof-grid">
        {metrics.map((metric, index) => (
          <article
            className="metric-card liquid-target"
            key={metric.label}
            aria-label={`${metric.value}${metric.suffix} ${metric.label}`}
            style={{ "--metric-delay": `${index * 140}ms` } as CSSProperties}
          >
            <div className="metric-top">
              <small>0{index + 1}</small>
              <i>↗</i>
            </div>
            <div className="metric-value" aria-hidden="true">
              <strong>{values[index]}</strong>
              <em>{metric.suffix}</em>
            </div>
            <span>{metric.label}</span>
            <small className="metric-note">{metric.note}</small>
            <div className="metric-line"><i /></div>
          </article>
        ))}
      </div>
    </section>
  );
}
