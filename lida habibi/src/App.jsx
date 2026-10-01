import { useEffect, useState } from "react";
import "./styles/global.css";
import netlinksLogo from "./assets/netlinks-logo.png";

const nav = {
  Solutions: ["Odoo ERP", "CRM Pipeline", "Sales management", "Point of sale", "Accounting", "Inventory", "Purchase management", "Human resources", "Project management"],
  Services: ["Odoo implementation", "Odoo customization", "Odoo integration", "Odoo migration", "Custom software", "Web & mobile", "AI & automation", "AI consulting", "Cloud & managed", "Digital transformation"],
  Industries: ["Manufacturing", "Retail & eCommerce", "Professional Services", "Public Sector", "Nonprofits", "Trades & Field Services"],
  Company: ["About NETLINKS", "Why NETLINKS", "Advisory Board", "Methodology", "Customers"],
  Resources: ["Features", "Pricing", "FAQ", "Blog", "Contact"],
};

const services = [
  { n: "01", tag: "ERP", title: "Odoo ERP services", text: "Implementation, customization, integration and migration for organizations that need one connected operating system.", pills: ["50+ deployments", "Migration", "Custom modules"] },
  { n: "02", tag: "BUILD", title: "Custom software", text: "Enterprise web, mobile and backend systems designed around the way your organization actually works.", pills: ["Web & mobile", "Platforms", "Modern stacks"] },
  { n: "03", tag: "INTELLIGENCE", title: "AI & automation", text: "Production AI agents and workflow automation grounded in your data, governed by your rules.", pills: ["RAG", "AI agents", "Human-in-loop"] },
  { n: "04", tag: "PEOPLE", title: "IT staff augmentation", text: "Senior engineers, architects and DevOps specialists embedded with your team.", pills: ["Senior teams", "Direct hire", "Delivery"] },
  { n: "05", tag: "STRATEGY", title: "Digital transformation", text: "Executive roadmaps, enterprise architecture and practical program delivery—not strategy for its own sake.", pills: ["Architecture", "Roadmaps", "Delivery"] },
  { n: "06", tag: "CLOUD", title: "Cloud & managed services", text: "Managed Odoo hosting, cloud infrastructure and 24/7 operations across modern cloud environments.", pills: ["AWS", "Azure", "GCP"] },
];

const industries = [
  ["01", "Manufacturing", "ERP, MRP, production planning, quality control and shop-floor visibility."],
  ["02", "Retail & eCommerce", "POS, omnichannel inventory, loyalty and commerce integrations."],
  ["03", "Professional Services", "Project accounting, resource planning, timesheets and utilization."],
  ["04", "Public Sector", "Enterprise systems for HR, payroll, grants, procurement and auditability."],
  ["05", "Nonprofits", "Donor CRM, grants lifecycle, restricted-fund accounting and reporting."],
  ["06", "Field Services", "Dispatch, mobile workforce, service contracts and preventive maintenance."],
];

const faqs = [
  ["What does NETLINKS do?", "NETLINKS delivers Odoo ERP, custom software engineering, AI automation, IT staff augmentation, digital transformation and cloud services."],
  ["How experienced is NETLINKS with Odoo?", "The current site describes 50+ Odoo implementations and experience across manufacturing, retail, professional services, public sector, nonprofits and field services."],
  ["What industries does NETLINKS serve?", "Manufacturing, retail and e-commerce, professional services, public sector, nonprofits, and trades and field services."],
  ["How does an engagement start?", "The current site describes a 30–60 minute scoping call followed, when appropriate, by structured discovery and a solution design."],
];

function Arrow() { return <span className="arrow">↗</span>; }

export default function App() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [faq, setFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    }), { threshold: .12 });
    els.forEach(el => io.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const go = (id) => { setMobile(false); setOpen(null); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="site" id="top">
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container nav">
          <button className="brand" onClick={() => go("top")} aria-label="NETLINKS home">
            <img src={netlinksLogo} alt="netlinks" />
          </button>
          <nav className="desktop-nav">
            {Object.entries(nav).map(([label, items]) => (
              <div className="nav-item" key={label}>
                <button onClick={() => setOpen(open === label ? null : label)}>
                  {label}<span className="chev">⌄</span>
                </button>
                {open === label && (
                  <div className="mega">
                    <div className="mega-head"><span>{label}</span><small>Explore</small></div>
                    {items.map(item => <button key={item} onClick={() => go(label === "Industries" ? "industries" : label === "Services" ? "services" : "contact")}>{item}<Arrow /></button>)}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <button className="nav-cta" onClick={() => go("contact")}>Get started <Arrow /></button>
          <button className={`hamburger ${mobile ? "active" : ""}`} onClick={() => setMobile(!mobile)} aria-label="Open menu"><span/><span/><span/></button>
        </div>
        {mobile && <div className="mobile-nav">
          {Object.entries(nav).map(([label, items]) => <div className="mobile-group" key={label}>
            <button onClick={() => setOpen(open === label ? null : label)}>{label}<span>+</span></button>
            {open === label && items.map(item => <button className="mobile-sub" key={item} onClick={() => go(label === "Industries" ? "industries" : label === "Services" ? "services" : "contact")}>{item}</button>)}
          </div>)}
          <button className="mobile-cta" onClick={() => go("contact")}>Get started <Arrow /></button>
        </div>}
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="pulse" /> 20 years delivering from Kabul · Afghanistan's enterprise technology partner</div>
              <h1>Enterprise Odoo,<br />custom software,<br />and AI,<br /><em>engineered in<br />Afghanistan.</em></h1>
              <p>Afghanistan-based since 2005. We built the 500,000-employee Odoo HR and payroll system for the national government, and Jobs.af, the country's largest job-hunting platform. Senior teams in Kabul delivering for clients across Afghanistan, the GCC, India, and the US.</p>
              <div className="hero-actions">
                <button className="primary" onClick={() => go("contact")}>Book a 30-min discovery call <Arrow /></button>
                <button className="text-btn" onClick={() => go("services")}>Explore services</button>
              </div>
              <div className="hero-proof">
                <div><strong>500K<span>+</span></strong><small>Employees · national-government Odoo HR rollout</small></div>
                <div><strong>20 <span>yrs</span></strong><small>Delivering enterprise software from Kabul</small></div>
                <div><strong>Jobs.af</strong><small>Afghanistan's largest job platform, built by NETLINKS</small></div>
              </div>
            </div>
            <div className="hero-art real-art reveal">
              <div className="art-glow" />
              <img className="official-hero" src="https://netlinks.af/illustrations/home-hero-1280.webp" alt="Unified enterprise systems on Odoo" />
              <div className="image-badge badge-a"><span>01</span><b>ERP</b><small>One connected platform</small></div>
              <div className="image-badge badge-b"><span>02</span><b>500K+</b><small>employees in one rollout</small></div>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="container">
            <div className="section-kicker">Trusted by organizations that expect systems to work</div>
            <div className="logo-marquee" aria-label="Trusted by global enterprises and institutions">
              <div className="logo-track">
                {[
                  ["SIEMENS","https://netlinks.af/logos/clients/siemens.webp"],["e&","https://netlinks.af/logos/clients/etisalat.webp"],["MTN","https://netlinks.af/logos/clients/mtn.webp"],["WORLD BANK","https://netlinks.af/logos/clients/world-bank.webp"],["IFC","https://netlinks.af/logos/clients/ifc.webp"],["UNDP","https://netlinks.af/logos/clients/undp.webp"],["WHO","https://netlinks.af/logos/clients/who.webp"],["UNESCO","https://netlinks.af/logos/clients/unesco.webp"],["UN WOMEN","https://netlinks.af/logos/clients/un-women.webp"],["USAID","https://netlinks.af/logos/clients/usaid.webp"],["GIZ","https://netlinks.af/logos/clients/giz.webp"],["TETRA TECH","https://netlinks.af/logos/clients/tetra-tech.webp"],["CHEMONICS","https://netlinks.af/logos/clients/chemonics.webp"],["AKDN","https://netlinks.af/logos/clients/akdn.webp"]
                ].concat([
                  ["SIEMENS","https://netlinks.af/logos/clients/siemens.webp"],["e&","https://netlinks.af/logos/clients/etisalat.webp"],["MTN","https://netlinks.af/logos/clients/mtn.webp"],["WORLD BANK","https://netlinks.af/logos/clients/world-bank.webp"],["IFC","https://netlinks.af/logos/clients/ifc.webp"],["UNDP","https://netlinks.af/logos/clients/undp.webp"],["WHO","https://netlinks.af/logos/clients/who.webp"],["UNESCO","https://netlinks.af/logos/clients/unesco.webp"],["UN WOMEN","https://netlinks.af/logos/clients/un-women.webp"],["USAID","https://netlinks.af/logos/clients/usaid.webp"],["GIZ","https://netlinks.af/logos/clients/giz.webp"],["TETRA TECH","https://netlinks.af/logos/clients/tetra-tech.webp"],["CHEMONICS","https://netlinks.af/logos/clients/chemonics.webp"],["AKDN","https://netlinks.af/logos/clients/akdn.webp"]
                ]).map(([name,src], i) => <div className="client-logo" key={`${name}-${i}`}><img src={src} alt={name} /></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-head reveal">
              <div><span className="label">WHAT WE DO</span><h2>Six services.<br /><em>One accountable partner.</em></h2></div>
              <p>One Afghanistan-based technology partner for ERP, custom engineering, AI, people, strategy and cloud—so nothing falls between the seams.</p>
            </div>
            <div className="service-grid">
              {services.map((s, i) => <article className="service-card reveal" style={{"--delay": `${i * 55}ms`}} key={s.n}>
                <div className="service-top"><span>{s.n} / {s.tag}</span><Arrow /></div>
                <h3>{s.title}</h3><p>{s.text}</p>
                <div className="pills">{s.pills.map(p => <span key={p}>{p}</span>)}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="feature dark">
          <div className="container feature-grid">
            <div className="feature-copy reveal">
              <span className="label">01 / ODOO ERP</span>
              <h2>One platform.<br /><em>Every department.</em></h2>
              <p>Finance, operations, sales, HR and manufacturing connected in one platform, with the engineering depth to customize what your business actually needs.</p>
              <ul><li>50+ Odoo deployments</li><li>Migration from SAP, NetSuite, Dynamics and QuickBooks</li><li>Upgrade-safe custom modules</li><li>Enterprise deployments for complex organizations</li></ul>
              <button className="dark-btn" onClick={() => go("contact")}>Explore Odoo services <Arrow /></button>
            </div>
            <div className="official-feature-art reveal">
              <img src="https://netlinks.af/illustrations/home-feature-odoo-1280.webp" alt="Odoo unified platform illustration" />
              <div className="art-caption"><span>ODOO</span><b>Unified operations</b><small>Finance · Sales · HR · Inventory</small></div>
            </div>
          </div>
        </section>

        <section className="ai-feature section">
          <div className="container ai-grid">
            <div className="ai-visual official-ai reveal"><img src="https://netlinks.af/illustrations/home-feature-ai-1280.webp" alt="AI agents and automation inside an enterprise workflow" /></div>
            <div className="ai-copy reveal"><span className="label">02 / AI & AUTOMATION</span><h2>Agents that don't<br /><em>just chat.</em> They work.</h2><p>Production AI grounded in your data, governed by your rules and observable end to end.</p><div className="mini-list"><div><b>01</b><span>Retrieval-grounded agents with audit trails</span></div><div><b>02</b><span>AI-powered ERP workflow automation</span></div><div><b>03</b><span>Human-in-the-loop controls for critical work</span></div></div></div>
          </div>
        </section>

        <section className="engineering-feature section">
          <div className="container engineering-grid">
            <div className="engineering-copy reveal"><span className="label">03 / CUSTOM ENGINEERING</span><h2>When nothing off-the-shelf<br /><em>quite fits.</em></h2><p>Senior product teams, designers, PMs and engineers embedded with yours. Prototype in weeks, ship in months, and maintain what we build.</p><div className="engineering-points"><span>TypeScript</span><span>Python</span><span>PHP</span><span>Postgres</span><span>Kubernetes</span><span>Serverless</span></div><button className="primary" onClick={() => go("contact")}>Engineering philosophy <Arrow /></button></div>
            <div className="engineering-art reveal"><img src="https://netlinks.af/illustrations/home-feature-engineering-1280.webp" alt="Custom software engineering workspace" /></div>
          </div>
        </section>

        <section className="industries section" id="industries">
          <div className="container">
            <div className="section-head reveal"><div><span className="label">INDUSTRIES</span><h2>Pattern recognition<br /><em>across verticals.</em></h2></div><p>Two decades of implementations means proven templates, compliance defaults and practical playbooks are already part of the conversation.</p></div>
            <div className="industry-grid">{industries.map((x,i)=><button className="industry-card reveal" key={x[0]} onClick={() => go("contact")}><span>{x[0]}</span><div><h3>{x[1]} <Arrow /></h3><p>{x[2]}</p></div></button>)}</div>
          </div>
        </section>

        <section className="quote">
          <div className="container quote-inner reveal"><div className="quote-mark">“</div><blockquote>We didn't watch Afghanistan's tech sector emerge,<br /><em>we helped build it.</em></blockquote><div className="quote-by">FARSHID GHYASI · FOUNDER, NETLINKS</div></div>
        </section>

        <section className="faq section">
          <div className="container faq-grid">
            <div className="reveal"><span className="label">QUESTIONS</span><h2>Answers to what<br /><em>CIOs actually ask.</em></h2><p>Clear answers before the first meeting.</p></div>
            <div className="faq-list reveal">{faqs.map((f,i)=><div className={`faq-item ${faq === i ? "open" : ""}`} key={f[0]}><button onClick={() => setFaq(faq === i ? null : i)}><span>0{i+1}</span><b>{f[0]}</b><i>{faq === i ? "−" : "+"}</i></button>{faq === i && <p>{f[1]}</p>}</div>)}</div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-inner reveal">
            <div><span className="label">START A CONVERSATION</span><h2>Talk to a senior<br /><em>architect.</em></h2><p>Bring the problem. Leave with a clear next step.</p></div>
            <div className="contact-action"><button className="primary light" onClick={() => window.open("https://netlinks.af/", "_blank")}>Book a 30-min discovery call <Arrow /></button><small>30–60 minute scoping call · No obligation</small></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top"><div className="footer-brand"><img src={netlinksLogo} alt="netlinks" /><small>ENGINEERED IN AFGHANISTAN</small></div><div className="footer-cols"><div><b>Services</b><a onClick={() => go("services")}>Odoo ERP</a><a onClick={() => go("services")}>Custom software</a><a onClick={() => go("services")}>AI & automation</a><a onClick={() => go("services")}>Cloud</a></div><div><b>Company</b><a onClick={() => go("top")}>About</a><a onClick={() => go("industries")}>Industries</a><a onClick={() => go("contact")}>Contact</a></div><div><b>Connect</b><a href="https://www.linkedin.com/company/netlinksaf/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://netlinks.af/" target="_blank" rel="noreferrer">netlinks.af</a></div></div></div>
        <div className="container footer-bottom"><span>© 2026 NETLINKS. All rights reserved.</span><span>Enterprise technology · Kabul · Afghanistan</span></div>
      </footer>
    </div>
  );
}
