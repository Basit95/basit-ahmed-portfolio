import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageFrame({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <main><SiteHeader/><section className="inner-hero page-shell"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></section>{children}<div className="inner-footer"><SiteFooter/></div></main>
}
