import Link from "next/link";

export default function SiteFooter() {
  return <footer className="footer page-shell"><div><Link href="/" className="footer-logo"><span className="footer-mark">BA</span> Basit Ahmed</Link><p>I design and build dependable web products for companies and product teams.</p></div><div><span>Navigate</span><a href="/#projects">Projects</a><a href="/#services">Services</a><a href="/#experience">Experience</a><a href="/#contact">Contact</a></div><div><span>Connect</span><a href="https://github.com/Basit95" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/basit-ahmed-857151156" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:basit.ahmed906@gmail.com">Email</a></div><div><span>Collaboration</span><p className="footer-presence"><i/> Available for remote work worldwide</p><small>© 2026 Basit Ahmed</small></div></footer>;
}
