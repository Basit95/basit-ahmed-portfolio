tfunction WebsitePreview
  ype ClientProject = {
  if (project.slug === "qalam-craft-studio") return <div className="case-ui case-qalam"><header><b>QALAM / CRAFT</b><span>Objects made with intention</span><i>Cart 01</i></header><section><small>THE CRAFT EDIT</small><h4>Made slowly.<br/>Kept for years.</h4><div><span>New collection</span><span>Hand-finished</span><span>Studio favourites</span></div></section></div>;
  if (project.slug === "fuel-me") return <div className="case-ui case-fuel"><header><b>FUEL ME</b><span>Platform · Solutions · Resources</span><i>Sign in</i></header><section><small>INTELLIGENT FUEL PROCUREMENT</small><h4>Every gallon.<br/>Tracked and optimized.</h4><div><span><b>175M+</b> gallons</span><span><b>1,800+</b> vendors</span><span><b>99.8%</b> SLA</span></div></section></div>;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  url: string;
  image?: string;
  logo?: string;
  visual?: "docrite" | "albaraka" | "bondox" | "stanhope" | "design" | "renkap" | "cosmetic" | "gshk" | "report";
  accent: string;
  tags: string[];
  contribution: string;
};

export const clientProjects: ClientProject[] = [
  {
    slug: "docrite-pedirite",
    name: "Docrite · PediRite",
    shortName: "Docrite",
    category: "Healthcare operations system",
    description: "A healthcare workflow platform supporting clinic operations, patient records and coordinated care processes.",
    url: "http://pedirite-live.docrite.com/",
    visual: "docrite",
    accent: "rose",
    tags: ["Healthcare", "Frontend", "Workflow UI"],
    contribution: "Frontend development",
  },
  {
    slug: "mdconsults",
    name: "MDConsults",
    shortName: "MDConsults",
    category: "Telemedicine platform",
    description: "A role-based telemedicine platform connecting patients, healthcare providers, radiology, pharmacy and laboratory services.",
    url: "https://mdconsults.org/",
    image: "/work/mdconsults.jpg",
    logo: "/work/mdconsults-logo.png",
    accent: "medical",
    tags: ["Telemedicine", "Full stack", "Role workflows"],
    contribution: "Full-stack development",
  },
  {
    slug: "al-baraka-trade-portal",
    name: "Al Baraka Trade Portal",
    shortName: "Al Baraka",
    category: "Banking operations portal",
    description: "A secure trade portal interface designed around authenticated banking workflows and operational clarity.",
    url: "https://trportalnew.albaraka.com.pk/login",
    visual: "albaraka",
    accent: "gold",
    tags: ["Banking", "Frontend", "Secure portal"],
    contribution: "Frontend development",
  },
  {
    slug: "inspire-education-group",
    name: "Inspire Education Group",
    shortName: "IEG",
    category: "Education group platform",
    description: "A large WordPress content experience connecting colleges, higher education, specialist training and employer services.",
    url: "https://www.ieg.ac.uk/",
    image: "/work/ieg.jpg",
    accent: "indigo",
    tags: ["WordPress", "Education", "Content architecture"],
    contribution: "WordPress delivery within the i3MEDIA team",
  },
  {
    slug: "novus-environmental",
    name: "Novus Environmental",
    shortName: "Novus",
    category: "Environmental services",
    description: "A service-led WordPress website helping organisations discover specialist, compliant waste-management solutions.",
    url: "https://novus-environmental.co.uk/",
    image: "/work/novus.jpg",
    accent: "lime",
    tags: ["WordPress", "Service UX", "Lead generation"],
    contribution: "WordPress delivery within the i3MEDIA team",
  },
  {
    slug: "eden-shopping",
    name: "Eden Shopping",
    shortName: "Eden",
    category: "Retail and leisure destination",
    description: "A vibrant destination website for discovering retailers, dining, entertainment, events and visitor information.",
    url: "https://www.edenshopping.co.uk/",
    image: "/work/eden.jpg",
    accent: "coral",
    tags: ["WordPress", "Retail", "Content discovery"],
    contribution: "WordPress delivery within the i3MEDIA team",
  },
  {
    slug: "stamford-gas-training",
    name: "Stamford Gas Training",
    shortName: "Stamford",
    category: "Professional training",
    description: "A course-focused WordPress platform presenting gas and plumbing training, assessments and enrolment pathways.",
    url: "https://stamfordgastraining.co.uk/",
    image: "/work/stamford.jpg",
    accent: "teal",
    tags: ["WordPress", "Training", "Course discovery"],
    contribution: "WordPress delivery within the i3MEDIA team",
  },
  {
    slug: "bondox-hair",
    name: "Bondox Hair",
    shortName: "Bondox",
    category: "International Shopify store",
    description: "A content-rich hair-care storefront combining specialist product education, global shopping and conversion-focused merchandising.",
    url: "https://bondoxhair.com/",
    visual: "bondox",
    accent: "bondox",
    tags: ["Shopify", "Liquid", "Commerce UX"],
    contribution: "Shopify theme and storefront development",
  },
  {
    slug: "stanhope-search",
    name: "Stanhope Search",
    shortName: "Stanhope",
    category: "Executive search consultancy",
    description: "A discreet professional website for banking and financial-services recruitment, executive search and market intelligence.",
    url: "https://stanhopesearch.com/",
    visual: "stanhope",
    accent: "stanhope",
    tags: ["WordPress", "Recruitment", "Editorial UX"],
    contribution: "Custom WordPress engineering",
  },
  {
    slug: "design-consultant",
    name: "The Design Consultant",
    shortName: "Design Consultant",
    category: "Interior architecture portfolio",
    description: "An image-led portfolio for a Sydney practice, structured around residential, retail and unbuilt interior architecture.",
    url: "https://designconsultant.com.au/",
    visual: "design",
    accent: "design",
    tags: ["WordPress", "Portfolio", "Visual UX"],
    contribution: "Custom WordPress engineering",
  },
  {
    slug: "renkap",
    name: "RenKap",
    shortName: "RenKap",
    category: "Site survey marketplace",
    description: "A product-led WordPress website for requesting quotes, managing vetted surveyors and accessing survey reports online.",
    url: "https://renkap.com/",
    visual: "renkap",
    accent: "renkap",
    tags: ["WordPress", "Marketplace", "Product UX"],
    contribution: "Custom WordPress engineering",
  },
  {
    slug: "cosmetic-sculpting",
    name: "Cosmetic Sculpting",
    shortName: "Cosmetic Sculpting",
    category: "Non-surgical cosmetic clinic",
    description: "A treatment-rich clinic website helping people explore skin, body and cosmetic-injection services and move into booking.",
    url: "https://cosmeticsculpting.com.au/",
    visual: "cosmetic",
    accent: "cosmetic",
    tags: ["WordPress", "Healthcare", "Booking UX"],


clientProjects.splice(8, 0,
  {
    slug: "qalam-craft-studio", name: "Qalam Craft Studio", shortName: "Qalam Craft", category: "Craft-led Shopify store",
    description: "A warm Shopify storefront presenting handcrafted products through focused discovery, product detail and responsive shopping journeys.",
    url: "https://qalamcraft-studio.myshopify.com/", visual: "report", accent: "qalam",
    tags: ["Shopify", "Liquid", "Theme UX"], contribution: "Shopify storefront and theme development",
  },
  {
    slug: "fuel-me", name: "Fuel Me", shortName: "Fuel Me", category: "Enterprise Framer experience",
    description: "A polished Framer website explaining an AI-powered platform for fuel procurement, vendor coverage, operational control and analytics.",
    url: "https://www.fuel.me/", visual: "report", accent: "fuel",
    tags: ["Framer", "Enterprise", "Interaction design"], contribution: "Framer development and responsive interaction work",
  },
);
    contribution: "Custom WordPress engineering",
  },
  {
    slug: "group-gshk",
    name: "GSHK Solar",
    shortName: "GSHK",
    category: "Solar technology platform",
    description: "A corporate product website presenting solar panels, inverters, technical benefits, company news and downloads.",
    url: "https://www.groupgshk.com/",
    visual: "gshk",
    accent: "gshk",
    tags: ["WordPress", "Solar", "Product content"],
    contribution: "Custom WordPress engineering",
  },
  {
    slug: "report-concerns",
    name: "Report Concerns",
    shortName: "Report Concerns",
    category: "Confidential reporting service",
    description: "A calm, structured staging website for explaining sensitive reporting journeys, privacy and the steps people can take next.",
    url: "http://staging.reportconcerns.co.uk/",
    visual: "report",
    accent: "report",
    tags: ["WordPress", "Trust UX", "Staging"],
    contribution: "Custom WordPress engineering",
  },
];

function WebsitePreview({ project }: { project: ClientProject }) {
  if (project.visual === "bondox") return <div className="case-ui case-bondox"><header><b>BONDOX</b><span>Hair science · Shop</span><i>Bag 02</i></header><section><small>PROFESSIONAL HAIR CARE</small><h4>Smooth. Strong.<br/>Salon-ready.</h4><div><span>Blonde Bondox<em>$39.99</em></span><span>Organic Keratin<em>$24.99</em></span><span>Hair Bottox<em>$59.99</em></span></div></section></div>;
  if (project.visual === "stanhope") return <div className="case-ui case-stanhope"><header><b>STANHOPE / SEARCH</b><span>London · Bahrain · Switzerland</span></header><section><small>BOUTIQUE CONSULTANCY</small><h4>Executive search<br/>for international banking.</h4><footer><span>Executive Search</span><span>Market Intelligence</span><span>Track Record</span></footer></section></div>;
  if (project.visual === "design") return <div className="case-ui case-design"><header><b>THE DESIGN CONSULTANT</b><span>Projects · Studio</span></header><section><div className="design-main">RESIDENTIAL <b>01</b></div><div>RETAIL <b>02</b></div><div>UNBUILT <b>03</b></div></section></div>;
  if (project.visual === "renkap") return <div className="case-ui case-renkap"><header><b>RenKap</b><span>Survey marketplace</span><i>Get 3 quotes</i></header><section><small>PROJECT / SR-2048</small><h4>Your surveys, organised.</h4><div className="quote-row"><span><b>3</b> quotes ready</span><span><b>12</b> survey types</span><span><b>1</b> report hub</span></div><footer><i/><i/><i/><i/></footer></section></div>;
  if (project.visual === "cosmetic") return <div className="case-ui case-cosmetic"><header><b>COSMETIC<br/>SCULPTING</b><span>What we treat</span><i>Book now</i></header><section><small>NON-SURGICAL EXPERTS</small><h4>Find the right treatment<br/>for your concern.</h4><div><span>Skin</span><span>Body</span><span>Cosmetic injections</span></div></section></div>;
  if (project.visual === "gshk") return <div className="case-ui case-gshk"><header><b>GSHK / SOLAR</b><span>Products · Technology</span></header><section><small>NEXT-GENERATION ENERGY</small><h4>High-performing.<br/>Reliable. Sustainable.</h4><div><span><b>705W</b> panel</span><span><b>30</b> year warranty</span><span><b>4</b> product lines</span></div></section></div>;
  return <div className="case-ui case-report"><header><b>REPORT CONCERNS</b><span>Private · Clear · Supported</span></header><section><small>GUIDED REPORTING</small><h4>Raise a concern<br/>with confidence.</h4><div><span><b>01</b> Understand the process</span><span><b>02</b> Prepare your report</span><span><b>03</b> Know what happens next</span></div></section></div>;
}

function ProductPreview({ project }: { project: ClientProject }) {
  if (project.visual === "docrite") {
    return <div className="client-ui-preview ui-docrite" aria-hidden="true"><div className="ui-preview-bar"><strong>docrite</strong><span>PediRite workspace</span><i>BA</i></div><div className="ui-preview-body"><aside><b>DR</b><i/><i/><i/><i/></aside><div><small>CARE WORKSPACE</small><h4>Patient overview</h4><section><article><span>Today&apos;s visits</span><b>18</b><em>On schedule</em></article><article><span>Care tasks</span><b>06</b><em>2 priority</em></article></section><footer><span/><span/><span/><span/><span/></footer></div></div></div>;
  }
  if (project.visual === "albaraka") {
    return <div className="client-ui-preview ui-albaraka" aria-hidden="true"><div className="bank-brand"><span>AB</span><div><strong>Al Baraka</strong><small>Trade Portal</small></div></div><div className="bank-login"><small>SECURE CORPORATE ACCESS</small><h4>Welcome back</h4><label>Company ID<span>••••••••</span></label><label>User ID<span>basit.a</span></label><button>Continue securely <i>→</i></button><footer><b>256-bit</b> secure session</footer></div></div>;
  }
  if (project.visual) return <WebsitePreview project={project} />;
  return <><img src={project.image} alt={`${project.name} project`} />{project.logo && <img className="client-project-logo" src={project.logo} alt="" />}</>;
}

export default function ClientProjects({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`client-project-grid${compact ? " compact" : ""}`}>
      {clientProjects.map((project, index) => (
        <article className={`client-project-card accent-${project.accent} liquid-target`} key={project.name}>
          <a href={`/projects/${project.slug}`} className="client-project-media" aria-label={`Open ${project.name} case study`}>
            <ProductPreview project={project} />
            <span className="client-browser-bar"><i /><i /><i /><b>{new URL(project.url).hostname.replace("www.", "")}</b></span>
            <span className="client-project-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="client-project-open">View complete case study <b>↗</b></span>
          </a>
          <div className="client-project-copy">
            <span>{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div>{project.tags.map((tag) => <em key={tag}>{tag}</em>)}</div>
            <footer><small>{project.contribution}</small><a href={`/projects/${project.slug}`} aria-label={`Read ${project.shortName} case study`}>↗</a></footer>
          </div>
        </article>
      ))}
    </div>
  );
}
