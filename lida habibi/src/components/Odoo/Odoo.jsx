import { odooFeatures } from "./Odoo.js";
import "./Odoo.css";

export default function Odoo(){
  return <section className="solution solution--odoo" id="odoo">
    <div className="container solution__grid">
      <div className="solution__copy">
        <p className="eyebrow">01 / Odoo ERP</p>
        <h2 className="section-title">One platform.<br/>Every department.<br/><em>Actually integrated.</em></h2>
        <p className="section-copy">Certified Odoo partner delivering implementation, customization, integration and migration across finance, operations, sales, HR and manufacturing.</p>
        <ul>{odooFeatures.map(x=><li key={x}>{x}</li>)}</ul>
        <a className="btn" href="#cta">Explore Odoo services →</a>
      </div>
      <div className="solution__visual">
        <div className="dashboard">
          <div className="dashboard__bar"><span>ODOO / ENTERPRISE</span><b>● ● ●</b></div>
          <div className="dashboard__body"><div className="dash-card">FINANCE<br/><strong>$ 4.8M</strong></div><div className="dash-card">HR<br/><strong>1,024</strong></div><div className="dash-card">OPERATIONS<br/><strong>98.2%</strong></div><div className="dash-wide">Unified enterprise workflow</div></div>
        </div>
      </div>
    </div>
  </section>
}
