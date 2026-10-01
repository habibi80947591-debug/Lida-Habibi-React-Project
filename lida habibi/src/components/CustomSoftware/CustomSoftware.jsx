import { engineeringPillars } from "./CustomSoftware.js";
import "./CustomSoftware.css";

export default function CustomSoftware(){
  return <section className="custom" id="custom">
    <div className="container">
      <div className="custom__intro">
        <div><p className="eyebrow">03 / Custom engineering</p><h2 className="section-title">When nothing off-the-shelf <em>quite fits.</em></h2></div>
        <p className="section-copy">A senior product team, designers, PMs and engineers embedded with yours. Prototype in weeks, ship in months and maintain what we build.</p>
      </div>
      <div className="custom__grid">
        {engineeringPillars.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
      </div>
      <a className="btn" href="#cta">Engineering philosophy →</a>
    </div>
  </section>
}
