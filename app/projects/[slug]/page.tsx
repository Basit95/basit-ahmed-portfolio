import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { allProjects, getProject } from "../../../data/projects";

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
      <section className="project-detail-block project-overview"><span>01 / Contribution</span><div><h2>What I worked on.</h2><p>{project.contribution}</p><p>{project.outcome}</p></div></section>
      <section className="project-detail-block"><span>02 / Core scope</span><div><h2>What the project includes.</h2><ul className="detail-feature-grid">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div></section>
      <section className="project-detail-block"><span>03 / Decisions</span><div><h2>How the work was approached.</h2><ol className="detail-decisions">{project.decisions.map((decision, i) => <li key={decision}><b>{String(i + 1).padStart(2, "0")}</b><p>{decision}</p></li>)}</ol></div></section>
      <section className="project-detail-block"><span>04 / Technology</span><div><h2>Tools and domain.</h2><div className="detail-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div></section>
      <footer className="project-detail-actions">
        <div><span>{hasPublicLinks ? "Project links" : "Current status"}</span><h2>{hasPublicLinks ? "Explore the product and source." : "Private build, still in active development."}</h2></div>
        <div>{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="button button-ghost">View live project ↗</a>}{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="button button-dark">Open GitHub ↗</a>}{!hasPublicLinks && <p className="private-project-note">There is no public deployment or GitHub repository yet. This case study reflects the implemented local scope and clearly separates it from planned modules.</p>}</div>
      </footer>
    </article>
    <SiteFooter />
  </main>;
}
