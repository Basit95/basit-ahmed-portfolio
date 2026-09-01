import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import ParallaxBand from "../../../components/ParallaxBand";
import { allProjects, getProject } from "../../../data/projects";

const technologyLogoRules: Array<[string, string]> = [
  ["next.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"],
  ["react", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
  ["typescript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"],
  ["javascript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
  ["angular", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"],
  ["rxjs", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rxjs/rxjs-original.svg"],
  ["tailwind", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
  ["jquery", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"],
  ["html5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
  ["css3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
  ["bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
  ["laravel", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"],
  ["php", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"],
  ["mysql", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
  ["postgresql", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"],
  ["supabase", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"],
  ["prisma", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"],
  ["sqlite", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"],
  ["wordpress", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"],
  ["woocommerce", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg"],
  ["shopify", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg"],
  ["docker", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"],
  ["aws", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"],
];

function getTechnologyLogo(technology: string) {
  const normalized = technology.toLowerCase();
  return technologyLogoRules.find(([name]) => normalized.includes(name))?.[1];
}

export function generateStaticParams() { return allProjects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const hasPublicLinks = Boolean(project.live || project.repo);
  return <main className="project-detail-page">
    <SiteHeader />
    <article className="project-detail page-shell">
      <Link href="/#projects" className="project-back">← All projects</Link>
      <header className="project-detail-hero">
        <div><span className="kicker">{project.eyebrow}</span><h1>{project.name}</h1><p>{project.summary}</p></div>
        <aside><span>My role</span><strong>{project.role}</strong><span>Status</span><strong>{project.status}</strong></aside>
      </header>
      <ParallaxBand compact projectName={project.name} />
      <section className="project-detail-block project-overview"><span>01 / Contribution</span><div><h2>What I worked on.</h2><p>{project.contribution}</p><p>{project.outcome}</p></div></section>
      <section className="project-detail-block"><span>02 / Core scope</span><div><h2>What the project includes.</h2><ul className="detail-feature-grid">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div></section>
      <section className="project-detail-block"><span>03 / Decisions</span><div><h2>How the work was approached.</h2><ol className="detail-decisions">{project.decisions.map((decision, i) => <li key={decision}><b>{String(i + 1).padStart(2, "0")}</b><p>{decision}</p></li>)}</ol></div></section>
      <section className="project-detail-block">
        <span>04 / Technology</span>
        <div>
          <h2>Technology used on this project.</h2>
          <p>The stack below reflects the tools and platform involved in my contribution—not a generic list of everything I know.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.stack.map((tech) => {
              const mark = tech.split(/[\s./-]+/).map((part) => part[0]).join("").slice(0, 3).toUpperCase();
              const logo = getTechnologyLogo(tech);
              return (
                <div key={tech} className="flex min-h-20 items-center gap-4 rounded-2xl border border-[#ded3c6] bg-[#fffaf3] px-4 py-4 shadow-[0_10px_26px_rgba(62,45,32,0.05)]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#e1d6c9] bg-white p-2">{logo ? <img src={logo} alt="" width="30" height="30" loading="lazy" className="h-8 w-8 object-contain" /> : <b className="text-[10px] tracking-[0.08em] text-[#a45b45]">{mark}</b>}</span>
                  <strong className="text-sm font-semibold leading-5 text-[#353a34]">{tech}</strong>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <footer className="mt-24 grid items-end gap-10 rounded-[32px] border border-[#d8cabb] bg-[#20251f] px-7 py-10 text-[#fffaf2] shadow-[0_26px_70px_rgba(38,29,22,0.16)] sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:px-14">
        <div className="max-w-[720px]">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e49a7f]">{hasPublicLinks ? "Project links" : "Current status"}</span>
          <h2 className="mt-4 text-[clamp(34px,4.4vw,58px)] font-semibold leading-[1.02] tracking-[-0.055em] text-white">{hasPublicLinks ? "See the product in action." : "A private product currently in active development."}</h2>
          <p className="mt-5 max-w-[620px] text-base leading-7 text-[#cfd6cb]">{hasPublicLinks ? "Open the live experience or review the source where public access is available." : "This case study documents the implemented scope without presenting unfinished work as a public release."}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#d06f50] px-7 text-sm font-bold text-white shadow-[0_12px_30px_rgba(208,111,80,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#bb5e42] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e49a7f]">View live project ↗</a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#20251f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Open GitHub ↗</a>}
        </div>
      </footer>
    </article>
    <SiteFooter />
  </main>;
}
