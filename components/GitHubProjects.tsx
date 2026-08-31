import Link from "next/link";
import { githubProjects } from "../data/projects";

export default function GitHubProjects() {
  return <div className="github-project-grid">
    {githubProjects.map((project, index) => <Link href={`/projects/${project.slug}`} className="github-project-card" key={project.slug}>
      <header><span>GH / {String(index + 1).padStart(2, "0")}</span><i>{project.status}</i></header>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <div>{project.stack.slice(0, 4).map((tech) => <em key={tech}>{tech}</em>)}</div>
      <footer><span>{project.status === "Work in progress" ? "View repository status" : "View project details"}</span><b>↗</b></footer>
    </Link>)}
  </div>;
}
