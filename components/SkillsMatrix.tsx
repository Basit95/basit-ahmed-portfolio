const deliveredSkills = [
  { group: "Frontend engineering", mark: "FE", items: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "RxJS", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Bootstrap", "Responsive Design"] },
  { group: "Backend & data", mark: "BE", items: ["PHP", "Laravel", "REST APIs", "MySQL", "PostgreSQL", "Supabase", "Authentication", "Role-based access"] },
  { group: "CMS & commerce", mark: "CM", items: ["WordPress", "Custom themes", "Custom plugins", "WooCommerce", "Shopify Liquid", "Gutenberg", "Elementor", "SiteOrigin"] },
  { group: "Cloud & delivery", mark: "CD", items: ["AWS S3", "Vercel", "Git / GitHub", "Docker", "Core Web Vitals", "Performance Optimization"] },
];

const workingKnowledge = ["Redux", "Material UI", "GraphQL", "Jest", "Cypress", "Java basics"];

export default function SkillsMatrix() {
  return (
    <section className="section page-shell" id="skills" aria-labelledby="skills-heading">
      <div className="grid gap-8 border-t border-[#ded3c6] pt-16 lg:grid-cols-[1fr_.72fr] lg:items-end">
        <div>
          <span className="kicker">02 / Skills & technologies</span>
          <h2 id="skills-heading" className="mt-5 max-w-[820px] text-[clamp(42px,5.4vw,72px)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#20251f]">
            Technology chosen for the work, not for the buzzword list.
          </h2>
        </div>
        <p className="max-w-[580px] text-base leading-7 text-[#666b63] lg:justify-self-end">
          These are the tools I have used across delivered websites, product interfaces and application workflows. Additional technologies are separated as working knowledge instead of being presented as production expertise.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {deliveredSkills.map((category) => (
          <article key={category.group} className="group rounded-[28px] border border-[#ddd1c3] bg-[#fffaf3] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c8846c] hover:shadow-[0_18px_45px_rgba(71,52,38,0.10)] sm:p-8">
            <header className="flex items-center gap-4 border-b border-[#e3d9cc] pb-5">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#20251f] text-xs font-bold tracking-[0.12em] text-[#f3a085]">{category.mark}</span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#ae6048]">Used in delivered work</span>
                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#20251f]">{category.group}</h3>
              </div>
            </header>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {category.items.map((skill) => (
                <span key={skill} className="rounded-full border border-[#ded3c6] bg-white/80 px-4 py-2 text-sm font-semibold text-[#4f554d]">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 grid gap-6 rounded-[28px] border border-[#d6dacd] bg-[#eef0e8] p-6 sm:p-8 lg:grid-cols-[.42fr_1fr] lg:items-center">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f5744]">Additional working knowledge</span>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#20251f]">Skills I can work with and continue developing.</h3>
        </div>
        <div className="flex flex-wrap gap-2.5 lg:justify-end">
          {workingKnowledge.map((skill) => (
            <span key={skill} className="rounded-full border border-[#cdd3c5] bg-white/70 px-4 py-2 text-sm font-semibold text-[#50564e]">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
