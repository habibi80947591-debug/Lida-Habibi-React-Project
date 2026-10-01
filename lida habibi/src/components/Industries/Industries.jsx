import { industries } from "./Industries.js";
import "./Industries.css";

export default function Industries(){
  return <section className="industries" id="industries">
    <div className="container">
      <p className="eyebrow">Industries</p>
      <h2 className="section-title">Pattern recognition<br/>across verticals.</h2>
      <p className="section-copy industries__copy">Industry templates, compliance defaults and playbooks can accelerate enterprise delivery.</p>
      <div className="industries__grid">
        {industries.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#cta">Explore ↗</a></article>)}
      </div>
    </div>
  </section>
}
