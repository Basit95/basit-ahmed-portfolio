type ParallaxBandProps = {
  compact?: boolean;
  projectName?: string;
};

export default function ParallaxBand({ compact = false, projectName }: ParallaxBandProps) {
  const title = projectName
    ? `Engineering decisions behind ${projectName}.`
    : "Frontend craft with full-product depth.";

  return (
    <section
      className={`parallax-band relative isolate mx-auto overflow-hidden bg-[#20251f] text-[#fffaf2] shadow-[0_34px_90px_rgba(37,29,22,0.18)] ${
        compact
          ? "my-16 min-h-[360px] max-w-[1280px] rounded-[30px] px-6 py-16 sm:px-10 lg:px-16"
          : "my-24 min-h-[480px] max-w-[1320px] rounded-[38px] px-6 py-20 sm:px-10 lg:px-20"
      }`}
      aria-label="Scroll-driven engineering showcase"
    >
      <div className="parallax-backdrop pointer-events-none absolute -inset-[18%] bg-[radial-gradient(circle_at_20%_35%,rgba(191,103,73,0.48),transparent_31%),radial-gradient(circle_at_82%_65%,rgba(151,170,139,0.42),transparent_34%)]" />
      <div className="parallax-grid pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="parallax-copy relative z-10 grid min-h-[300px] items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <span className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e49a7f]">
            <i className="h-2 w-2 rounded-full bg-[#d67455]" />
            Scroll to explore
          </span>
          <h2 className="max-w-[760px] text-[clamp(42px,6vw,82px)] font-semibold leading-[0.95] tracking-[-0.065em]">
            {title}
          </h2>
          <p className="mt-7 max-w-[650px] text-base leading-7 text-[#d8ddd3] sm:text-lg">
            Interfaces, application logic and production experience move together—not as isolated layers.
          </p>
        </div>
        <div className="parallax-card relative justify-self-stretch rounded-[26px] border border-white/15 bg-[#f7f0e7] p-6 text-[#20251f] shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-8 lg:justify-self-end lg:min-w-[360px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ae5f46]">Product delivery</span>
          <div className="mt-6 space-y-3">
            {["Responsive interfaces", "Business-ready APIs", "Scalable content systems", "Production performance"].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-[#ded3c6] bg-white/70 px-4 py-3">
                <span className="text-sm font-semibold">{item}</span>
                <b className="text-xs text-[#b86448]">{String(index + 1).padStart(2, "0")}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
