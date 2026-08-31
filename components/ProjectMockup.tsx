export type ProjectVariant = "flowhcm" | "storepulse" | "commerceflow" | "resumeiq";

const bars = [42, 58, 49, 72, 63, 84, 69, 91, 78, 96];

function Browser({ label }: { label: string }) {
  return (
    <div className="project-browser">
      <div><i /><i /><i /></div>
      <span>{label}</span>
      <b>•••</b>
    </div>
  );
}

function StorePulseMockup() {
  return (
    <div className="project-window mock-storepulse">
      <Browser label="app.storepulse.ai" />
      <div className="analytics-shell">
        <aside><strong>SP</strong><i className="active" /><i /><i /><i /><span /></aside>
        <div className="analytics-main">
          <header><div><small>LIVE COMMERCE PULSE</small><h4>Good morning, Basit</h4></div><button>+ Insight</button></header>
          <div className="analytics-stats">
            <article><span>Revenue</span><strong>$48.2k</strong><small>↗ 12.4%</small></article>
            <article><span>Customers</span><strong>1,284</strong><small>↗ 8.2%</small></article>
            <article><span>Conversion</span><strong>4.8%</strong><small>↗ 1.6%</small></article>
          </div>
          <div className="analytics-data">
            <div className="analytics-chart"><header><b>Revenue trend</b><span>30 days</span></header><div>{bars.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div></div>
            <div className="analytics-ring"><span /><div className="analytics-ring-label"><strong>74%</strong><small>Growth score</small></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommerceFlowMockup() {
  return (
    <div className="project-window mock-commerceflow">
      <Browser label="commerceflow.store" />
      <div className="store-shell">
        <header><strong>COMMERCE<span>FLOW</span></strong><nav>New in&nbsp;&nbsp; Shop&nbsp;&nbsp; Collections</nav><div><i>⌕</i><i>♡</i><i>2</i></div></header>
        <div className="store-body">
          <aside><small>SHOP / COLLECTION</small><h4>Designed for<br />daily life.</h4><p>Thoughtful products, clear choices and a frictionless path to checkout.</p><div><span>All products</span><span>Living</span><span>Workspace</span><span>Travel</span></div></aside>
          <div className="product-grid">
            <article><div className="product-art art-lamp"><span>NEW</span><i /></div><strong>Arc desk light</strong><small>$128</small></article>
            <article><div className="product-art art-chair"><span>BESTSELLER</span><i /></div><strong>Form lounge chair</strong><small>$340</small></article>
            <article><div className="product-art art-vase"><i /></div><strong>Contour vessel</strong><small>$76</small></article>
          </div>
        </div>
        <div className="cart-toast"><span>✓</span><div><small>Added to your cart</small><strong>Form lounge chair</strong></div><b>View cart →</b></div>
      </div>
    </div>
  );
}

function ResumeIQMockup() {
  return (
    <div className="project-window mock-resumeiq">
      <Browser label="workspace.resumeiq.app" />
      <div className="resume-shell">
        <header><strong>Resume<span>IQ</span></strong><nav>Dashboard&nbsp;&nbsp; Analyses&nbsp;&nbsp; Job matches</nav><button>New analysis</button></header>
        <div className="resume-body">
          <div className="resume-document">
            <div className="resume-name"><span>BA</span><div><strong>Basit Ahmed</strong><small>Senior Web Developer</small></div></div>
            <div className="resume-rule" />
            <section><b>EXPERIENCE</b><strong>Product & frontend engineering</strong><p /><p className="short" /></section>
            <section><b>SELECTED WORK</b><strong>Scalable SaaS interfaces</strong><p /><p /><p className="short" /></section>
            <div className="resume-skills"><i>React</i><i>Next.js</i><i>TypeScript</i><i>Laravel</i></div>
          </div>
          <aside className="ats-panel">
            <small>ATS ANALYSIS</small><div className="ats-score"><span /><strong>86</strong><em>/100</em></div><h4>Strong match</h4><p>Your resume is well aligned with this role.</p>
            <div className="ats-progress"><span><b>Impact</b><i><em style={{ width: "88%" }} /></i></span><span><b>Keywords</b><i><em style={{ width: "82%" }} /></i></span><span><b>Readability</b><i><em style={{ width: "92%" }} /></i></span></div>
            <div className="matched-tags"><i>React</i><i>TypeScript</i><i>APIs</i><i>CI/CD</i></div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function FlowHCMMockup() {
  return (
    <div className="project-window mock-flowhcm">
      <Browser label="local.flowhcm.workspace" />
      <div className="hcm-shell">
        <aside><strong>FH</strong><small>WORKSPACE</small><nav><span className="active">Overview</span><span>Employees</span><span>Attendance</span><span>Organization</span><span className="pending">Leave <i>Soon</i></span><span className="pending">Payroll <i>Soon</i></span></nav><footer>BA</footer></aside>
        <div className="hcm-main">
          <header><div><small>ORGANISATION OVERVIEW</small><h4>People operations</h4></div><button>+ Add employee</button></header>
          <div className="hcm-stats"><article><span>Employees</span><b>248</b><small>Active records</small></article><article><span>Branches</span><b>06</b><small>Across the company</small></article><article><span>Documents</span><b>94%</b><small>Verified</small></article></div>
          <div className="hcm-workspace"><section><header><b>Recent employees</b><span>View all</span></header>{["Ayesha Khan","Hamza Ali","Sara Ahmed"].map((name,index)=><div key={name}><i>{name.split(" ").map(part=>part[0]).join("")}</i><strong>{name}</strong><span>{["Product","Operations","Finance"][index]}</span><em>Active</em></div>)}</section><aside><small>ACCESS CONTROL</small><strong>Roles & permissions</strong><span><i>Admin</i><b>42 permissions</b></span><span><i>HR Manager</i><b>31 permissions</b></span><span><i>Employee</i><b>08 permissions</b></span></aside></div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectMockup({ variant }: { variant: ProjectVariant }) {
  if (variant === "flowhcm") return <FlowHCMMockup />;
  if (variant === "commerceflow") return <CommerceFlowMockup />;
  if (variant === "resumeiq") return <ResumeIQMockup />;
  return <StorePulseMockup />;
}
