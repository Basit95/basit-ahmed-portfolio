import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import AnimatedMetrics from "../components/AnimatedMetrics";
import ProjectMockup, { type ProjectVariant } from "../components/ProjectMockup";
import ClientProjects from "../components/ClientProjects";
import SiteFooter from "../components/SiteFooter";
import GitHubProjects from "../components/GitHubProjects";
import ParallaxBand from "../components/ParallaxBand";

const services = [
  { index: "01", title: "Product & frontend engineering", text: "Scalable React, Next.js and Angular interfaces for SaaS products, dashboards and internal tools.", tags: ["React", "Next.js", "TypeScript"] },
  { index: "02", title: "WordPress, Shopify & commerce", text: "Custom WordPress themes and plugins, reusable editor components, and polished Shopify storefronts built around real buying journeys.", tags: ["WordPress", "Shopify", "WooCommerce"] },
  { index: "03", title: "Full-stack web applications", text: "Reliable Laravel and API-connected applications built around real business operations.", tags: ["Laravel", "REST APIs", "MySQL"] },
  { index: "04", title: "Performance & product rescue", text: "Focused debugging, Core Web Vitals improvements and production support for systems already in motion.", tags: ["Performance", "Cloudflare", "Support"] },
];

const reasons = [
  { index: "01", title: "I take ownership", text: "I can move from an unclear brief to a working interface, ask the right questions and keep delivery moving without needing constant direction." },
  { index: "02", title: "I understand the whole product", text: "My work goes beyond screens. I think about content, APIs, business rules, performance and what the person using the product needs to do next." },
  { index: "03", title: "I work inside real systems", text: "I am comfortable improving existing code, connecting to established backends and solving production issues where a clean rebuild is not an option." },
  { index: "04", title: "I communicate while I build", text: "You see steady progress, understand the decisions being made and know what is ready, what is blocked and what happens next." },
];

const wordpressCapabilities = [
  { index: "01", title: "Custom themes", text: "Responsive WordPress themes built around the design, content model and editing needs of the project." },
  { index: "02", title: "Custom plugins", text: "Project-specific PHP functionality developed when off-the-shelf plugins are not the right fit." },
  { index: "03", title: "Editor components", text: "Reusable widgets and blocks for SiteOrigin, Gutenberg and Elementor that give editors flexibility without breaking the design." },
  { index: "04", title: "Production delivery", text: "WooCommerce, integrations, responsive fixes, performance work and ongoing improvements across live client websites." },
];

const frontendCapabilities = [
  { index: "01", title: "Product interfaces", text: "Responsive React, Next.js and Angular experiences shaped around the real task a user needs to complete." },
  { index: "02", title: "Design systems", text: "Reusable components, clear states and consistent interaction patterns that help large products grow without becoming visually fragmented." },
  { index: "03", title: "Complex workflows", text: "Dashboards, forms, role-aware navigation, data-heavy screens and API-connected journeys built for everyday operational use." },
  { index: "04", title: "Performance & quality", text: "Core Web Vitals, accessibility, responsive behaviour, production debugging and maintainable frontend architecture." },
];

const backendCapabilities = [
  { index: "01", title: "Application APIs", text: "Laravel REST APIs and server-side logic designed around clear resources, validation and dependable frontend integration." },
  { index: "02", title: "Data & permissions", text: "PostgreSQL and MySQL data models, authentication, role-based access control and permission-aware business workflows." },
  { index: "03", title: "Files, jobs & integrations", text: "Document workflows, object storage, background queues and third-party services connected to real product requirements." },
  { index: "04", title: "Production foundations", text: "Docker-ready environments, caching, error handling and code structures that can be tested, maintained and extended." },
];

const projects = [
  { slug: "flowhcm", name: "FlowHCM", type: "CLIENT HRMS · IN DEVELOPMENT", summary: "An original HR management system for organisation structure, employees, documents, accounts and permission-controlled operations.", stack: "Next.js · TypeScript · Laravel · PostgreSQL", result: "Active local build", tone: "flow", variant: "flowhcm" as ProjectVariant },
  { slug: "storepulse-ai", name: "StorePulse AI", type: "AI ECOMMERCE SAAS", summary: "An analytics command center that turns store data into decisions, content and revenue opportunities.", stack: "Next.js · Supabase · Gemini AI · Recharts", result: "Full-stack product", repo: "https://github.com/Basit95/storepulse-ai", tone: "blue", variant: "storepulse" as ProjectVariant },
  { slug: "commerce-flow", name: "CommerceFlow", type: "PREMIUM COMMERCE EXPERIENCE", summary: "A responsive storefront journey spanning discovery, search, wishlist, cart, checkout and admin insights.", stack: "Next.js · TypeScript · Tailwind CSS", result: "End-to-end UX", repo: "https://github.com/Basit95/commerce-flow", tone: "green", variant: "commerceflow" as ProjectVariant },
  { slug: "resume-iq", name: "ResumeIQ", type: "FULL-STACK SAAS", summary: "A resume intelligence platform with ATS analysis, job matching, usage quotas and printable reports.", stack: "Next.js · Prisma · SQLite · Recharts", result: "Secure SaaS workflow", repo: "https://github.com/Basit95/resume-iq", tone: "violet", variant: "resumeiq" as ProjectVariant },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d={diagonal ? "M5 15 15 5M7 5h8v8" : "M4 10h12M11 5l5 5-5 5"} /></svg>;
}

function ProjectVisual({ variant, tone }: { variant: ProjectVariant; tone: string }) {
  return (
    <div className={`project-visual ${tone}`} aria-hidden="true">
      <ProjectMockup variant={variant} />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero page-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow reveal-up"><span className="status-dot" /> Available for worldwide collaboration</div>
          <h1 className="reveal-up delay-1">I build web products that <span>perform.</span></h1>
          <p className="hero-lead reveal-up delay-2">I design and build SaaS products, eCommerce experiences and business systems for teams that need reliable execution from interface to launch.</p>
          <div className="hero-actions reveal-up delay-3"><a href="#projects" className="button button-primary">View work <Arrow diagonal /></a></div>
          <div className="hero-meta reveal-up delay-3"><div><span>BASED IN</span><strong>Karachi, Pakistan</strong></div><div><span>AVAILABLE FOR</span><strong>Worldwide collaboration</strong></div><div><span>SPECIALIZED IN</span><strong>Web · SaaS · Commerce</strong></div></div>
        </div>
        <div className="hero-stage reveal-scale delay-2" aria-label="A selection of product interface previews">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="floating-chip chip-one"><span>⚡</span> Fast by design</div><div className="floating-chip chip-two"><span>↗</span> Built to scale</div>
          <div className="hero-window liquid-target">
            <div className="window-top"><i /><i /><i /><span>product.workspace</span></div>
            <div className="window-body"><aside><b>BA</b><span className="active" /><span /><span /><span /><em /></aside><div className="window-content">
              <header><div><small>COMMAND CENTER</small><strong>Business pulse</strong></div><button>Live</button></header>
              <div className="window-metrics"><article><span>Revenue</span><b>$84,320</b><small>↗ 18.2%</small></article><article><span>Orders</span><b>1,429</b><small>↗ 9.4%</small></article></div>
              <div className="window-chart"><div className="chart-label"><span>Growth overview</span><b>Last 30 days</b></div><svg viewBox="0 0 400 155" preserveAspectRatio="none"><defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b86448" stopOpacity=".28"/><stop offset="1" stopColor="#b86448" stopOpacity="0"/></linearGradient></defs><path className="area" d="M0 132 C45 125 52 94 91 104 S150 72 189 85 S245 35 280 52 S345 11 400 21 L400 155 L0 155Z"/><path className="line" d="M0 132 C45 125 52 94 91 104 S150 72 189 85 S245 35 280 52 S345 11 400 21"/></svg></div>
            </div></div>
          </div>
        </div>
      </section>
      <AnimatedMetrics />
      <section className="technology-rail" aria-label="Technologies and capabilities"><div className="rail-label page-shell"><span>Engineering across</span><i/></div><div className="rail-track"><div>{["Next.js","React","TypeScript","Angular","WordPress","Shopify","Liquid","WooCommerce","Laravel","PHP","Supabase","REST APIs","Performance","Next.js","React","TypeScript","Angular","WordPress","Shopify","Liquid","WooCommerce","Laravel","PHP","Supabase","REST APIs","Performance"].map((tech,i)=><span key={`${tech}-${i}`}><i/> {tech}</span>)}</div></div></section>
      <section className="about-section section page-shell" id="about" aria-labelledby="about-heading">
        <div className="about-unified">
          <figure className="about-portrait-card">
            <img src="/basit-ahmed-portrait-v2.png" alt="Basit Ahmed, web developer" />
            <figcaption><span>Basit Ahmed</span><strong>Web Developer · Product Engineer</strong></figcaption>
            <i aria-hidden="true" />
          </figure>
          <article className="about-copy">
            <span className="kicker">01 / About me</span>
            <h2 id="about-heading">A web developer who understands the full product.</h2>
            <p>I am Basit Ahmed, a web developer from Karachi with more than six years of professional experience. I started by building custom WordPress and PHP websites, then expanded into frontend and full-stack product development with React, Next.js, Angular, TypeScript and Laravel.</p>
            <p>My work includes more than 70 business websites, WooCommerce and Shopify stores, SaaS dashboards, healthcare platforms, banking interfaces, recruitment websites and internal business systems. I have worked with clients and teams across Pakistan, the UK, the US and Europe, contributing to both new products and established production systems.</p>
            <p>On the frontend, I translate designs and complex workflows into responsive, accessible interfaces connected to real APIs and business rules. Behind the interface, I work with PHP, Laravel, MySQL, PostgreSQL, authentication, permissions and third-party integrations. My WordPress experience goes beyond page builders and includes custom themes, plugins, Gutenberg blocks and reusable widgets for Elementor and SiteOrigin.</p>
            <p>I am comfortable taking ownership when requirements are still evolving: understanding the problem, planning the interface, writing maintainable code, resolving production issues and improving performance. I have also built browser-based automation that reduced a manual workflow by 40%. The result I aim for is simple: a dependable product that works well for its users and is practical for the team maintaining it.</p>
            <div className="about-expertise" aria-label="Core areas of experience">
              <span>Frontend products</span><span>Full-stack applications</span><span>WordPress engineering</span><span>eCommerce delivery</span>
            </div>
            <div className="about-facts"><div><strong>6+</strong><span>Years of experience</span></div><div><strong>70+</strong><span>Websites delivered</span></div><div><strong>Worldwide</strong><span>Remote collaboration</span></div></div>
          </article>
        </div>
      </section>
      <section className="services section page-shell" id="services">
        <div className="section-heading"><div><span className="kicker">02 / Services</span><h2>From idea to a product<br />people want to use.</h2></div><p>I can take ownership of the frontend, build the supporting application logic and help you improve a product that is already in production.</p></div>
        <div className="service-list">{services.map((service)=><a href="mailto:basit.ahmed906@gmail.com?subject=Service%20enquiry" className="service-row" key={service.index}><span className="service-number">{service.index}</span><div><h3>{service.title}</h3><p>{service.text}</p></div><div className="service-tags">{service.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className="round-arrow"><Arrow diagonal /></span></a>)}</div>
      </section>
      <section className="hire-reasons section page-shell" aria-labelledby="hire-heading">
        <div className="section-heading hire-heading"><div><span className="kicker">03 / What you get</span><h2 id="hire-heading">A developer who can handle<br/>the difficult middle.</h2></div><p>Good code matters, but so does judgment. I help turn changing requirements, existing systems and delivery pressure into a product people can actually use.</p></div>
        <div className="hire-grid">
          <article className="hire-lead"><span>FROM BRIEF TO RELEASE</span><h3>I connect product thinking with hands-on delivery.</h3><p>You do not need separate conversations for every layer of the work. I can understand the business problem, shape the interface, connect the required logic and stay involved through launch.</p><div className="delivery-path"><span>Understand</span><i>→</i><span>Shape</span><i>→</i><span>Build</span><i>→</i><span>Ship</span></div></article>
          {reasons.map((reason)=><article className="hire-card" key={reason.index}><span>{reason.index}</span><h3>{reason.title}</h3><p>{reason.text}</p><i>↗</i></article>)}
        </div>
      </section>
      <section className="commercial-work section" id="projects"><div className="page-shell"><div className="section-heading commercial-heading"><div><span className="kicker">04 / Live client systems</span><h2>Different industries.<br />Real product decisions.</h2></div><p>From healthcare and banking to Shopify commerce, recruitment, architecture and renewable energy, every case study explains the problem, my contribution and how the experience was built.</p></div><ClientProjects compact /></div></section>
      <div className="page-shell"><ParallaxBand /></div>
      <section className="work-section section" id="featured-projects"><div className="page-shell">
        <div className="section-heading work-heading"><div><span className="kicker">05 / Featured work</span><h2>Proof, not promises.</h2></div><a href="https://github.com/Basit95" target="_blank" rel="noreferrer" className="text-link">GitHub profile <Arrow /></a></div>
        <div className="project-list">{projects.map((project,index)=><article className="project-card" key={project.name}><div className="project-copy"><span className="project-index">{String(index+1).padStart(2,"0")}</span><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.summary}</p><div className="project-details"><span>{project.stack}</span><strong>{project.result}</strong></div><div className="project-links"><Link href={`/projects/${project.slug}`} className="button button-dark">Complete case study <Arrow diagonal /></Link>{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} source on GitHub`} className="icon-link">GH</a>}</div></div><ProjectVisual variant={project.variant} tone={project.tone}/></article>)}</div>
        <div className="github-project-heading"><span className="kicker">GitHub repositories</span><h2>Code, products and<br/>work in progress.</h2><p>These are my five public code repositories. Three contain complete products, while two dashboard ideas are still empty and clearly marked as work in progress.</p></div>
        <GitHubProjects />
      </div></section>
      <section className="industries section page-shell" id="experience"><div className="section-heading compact"><div><span className="kicker">06 / Experience</span><h2>Experience across products and industries.</h2></div><p>My work spans software products and real client platforms where the content, users and business priorities are very different.</p></div><div className="industry-grid">{["SaaS products","eCommerce","Healthcare","Banking & finance","Education","Recruitment","Beauty & wellness","Business platforms"].map((item,i)=><div className="industry-card" key={item}><span>{String(i+1).padStart(2,"0")}</span><strong>{item}</strong><i /></div>)}</div></section>
      <section className="engineering-depth frontend-depth section" aria-labelledby="frontend-heading"><div className="page-shell"><div className="section-heading engineering-heading"><div><span className="kicker">07 / Frontend engineering</span><h2 id="frontend-heading">Interfaces that stay clear<br/>when products become complex.</h2></div><p>I build the layer people actually use, but I do not treat it as decoration. The frontend has to carry business rules, data, permissions and everyday user decisions without becoming confusing.</p></div><div className="engineering-layout"><div className="engineering-console frontend-console" aria-hidden="true"><header><i/><i/><i/><span>product/interface</span></header><div><small>FRONTEND ARCHITECTURE</small><strong>From product flow to production UI</strong><div className="component-map"><span>App shell</span><span>Design system</span><span>Feature modules</span><span>API state</span><span>Responsive UI</span><span>Tests & performance</span></div><footer><span>React · Next.js · Angular</span><span>TypeScript · GSAP</span></footer></div></div><div className="engineering-capability-list">{frontendCapabilities.map((item)=><article className="engineering-capability" key={item.index}><span>{item.index}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><i>↗</i></article>)}</div></div></div></section>
      <section className="engineering-depth backend-depth section" aria-labelledby="backend-heading"><div className="page-shell"><div className="section-heading engineering-heading inverse"><div><span className="kicker">08 / Backend engineering</span><h2 id="backend-heading">Business logic that makes<br/>the interface dependable.</h2></div><p>I build the application layer behind the screen: APIs, data models, authentication, permissions and integrations that turn a visual workflow into a working product.</p></div><div className="engineering-layout reverse"><div className="engineering-console backend-console" aria-hidden="true"><header><i/><i/><i/><span>api/product-core</span></header><div><small>REQUEST / RESPONSE</small><strong>Reliable application foundations</strong><ul><li><b>POST</b><span>/api/auth/session</span><em>200</em></li><li><b>GET</b><span>/api/employees?branch=karachi</span><em>200</em></li><li><b>PATCH</b><span>/api/roles/permissions</span><em>204</em></li><li><b>QUEUE</b><span>documents.process</span><em>ready</em></li></ul><footer><span>Laravel · PostgreSQL</span><span>Sanctum · Redis</span></footer></div></div><div className="engineering-capability-list">{backendCapabilities.map((item)=><article className="engineering-capability" key={item.index}><span>{item.index}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><i>↗</i></article>)}</div></div></div></section>
      <section className="wordpress-depth wordpress-light section" aria-labelledby="wordpress-heading"><div className="page-shell"><div className="section-heading wordpress-heading"><div><span className="kicker">09 / WordPress engineering</span><h2 id="wordpress-heading">More than assembling<br/>pages with a builder.</h2></div><p>I have delivered more than 70 websites and worked below the editor layer when a project needed its own theme, functionality or reusable content tools.</p></div><div className="wordpress-layout"><div className="wp-console" aria-hidden="true"><header><i/><i/><i/><span>wordpress/project</span></header><div><small>ENGINEERING WORKSPACE</small><strong>Custom WordPress delivery</strong><ul><li><b>theme/</b><span>components · templates · responsive UI</span></li><li><b>plugins/</b><span>hooks · business logic · integrations</span></li><li><b>widgets/</b><span>SiteOrigin · Gutenberg · Elementor</span></li><li><b>release/</b><span>performance · testing · production fixes</span></li></ul><footer><span>70+ websites</span><span>WordPress + PHP</span></footer></div></div><div className="wp-capability-list">{wordpressCapabilities.map((item)=><article className="wp-capability" key={item.index}><span>{item.index}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><i>↗</i></article>)}</div></div></div></section>
      <section className="process process-light section"><div className="page-shell"><div className="section-heading"><div><span className="kicker">10 / How I work</span><h2>A clear process from<br />first call to launch.</h2></div><p>You will know what I am working on, why each decision was made and what happens next.</p></div><div className="process-grid">{[["01","Discover","We discuss the users, business goal, current problems and technical constraints."],["02","Plan","I define the scope, interface direction, technical approach and delivery milestones."],["03","Build","You see regular progress while I develop, test and refine the product."],["04","Launch","I complete final checks, improve performance and provide a clear handover."]].map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="final-cta page-shell" id="contact"><div className="final-cta-copy"><span className="kicker">The right developer for complex web work</span><h2>One developer.<br/><em>Full-product thinking.</em></h2><p>I bring frontend craft, backend understanding and years of production experience to the same build—so fewer details get lost between design, development and launch.</p></div><aside className="final-cta-aside"><span>What you can expect</span><ul><li>Clear ownership from brief to release</li><li>Thoughtful interfaces built around real users</li><li>Practical solutions for existing systems</li><li>Reliable collaboration across time zones</li></ul><p>Based in Pakistan, working remotely with product teams and businesses worldwide.</p></aside></section>
      <SiteFooter/>
    </main>
  );
}
