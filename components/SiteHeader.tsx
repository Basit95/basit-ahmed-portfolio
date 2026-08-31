"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type MouseEvent } from "react";

const navigation = [
  { id: "about", label: "About", number: "01" },
  { id: "projects", label: "Projects", number: "02" },
  { id: "services", label: "Services", number: "03" },
  { id: "experience", label: "Experience", number: "04" },
  { id: "contact", label: "Contact", number: "05" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    document.documentElement.classList.toggle("menu-open", open);
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    if (open) requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const goToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    setOpen(false);
    if (window.location.pathname !== "/") return;
    const section = document.getElementById(id);
    if (!section) return;
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  const mobileMenu = mounted ? createPortal(
    <aside className={`mobile-menu-layer${open ? " open" : ""}`} aria-hidden={!open} aria-label="Mobile navigation">
      <div className="mobile-drawer-top">
        <Link href="/" className="mobile-drawer-brand" onClick={() => setOpen(false)}><span>BA</span><strong>Basit Ahmed<small>Web Developer</small></strong></Link>
        <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)} aria-label="Close navigation"><i/><i/></button>
      </div>
      <nav aria-label="Mobile navigation links">
        {navigation.map((item) => <a href={`/#${item.id}`} onClick={(event) => goToSection(event, item.id)} key={item.id}><span>{item.number}</span><strong>{item.label}</strong><i>↗</i></a>)}
      </nav>
      <footer><p>Available for remote projects and product roles worldwide.</p><span>Karachi, Pakistan · Working worldwide</span></footer>
    </aside>,
    document.body,
  ) : null;

  return <>
    <header className="site-header page-shell">
      <Link href="/" className="logo" aria-label="Basit Ahmed home">
        <span className="brand-mark" aria-hidden="true"><b>BA</b><i /></span>
        <strong>Basit Ahmed<small>Product-minded web engineer</small></strong>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <a href={`/#${item.id}`} onClick={(event) => goToSection(event, item.id)} key={item.id}>{item.label}</a>)}
      </nav>
      <button className="menu-button" type="button" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(true)}><i /><i /><span>Menu</span></button>
    </header>
    {mobileMenu}
  </>;
}
