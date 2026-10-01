import { heroStats } from "./Hero.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid container">
        <div className="hero__copy">
          <p className="eyebrow">20 years delivering from Kabul · Afghanistan's enterprise technology partner</p>
          <h1>Enterprise Odoo, custom software, and <em>AI.</em></h1>
          <p className="section-copy">
            Enterprise technology engineered for organizations that need software to work.
            Odoo ERP, custom engineering, AI automation, people and cloud services.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#cta">Book a 30-min discovery call →</a>
            <a className="btn btn--light" href="#services">Explore services</a>
          </div>
          <div className="hero__stats">
            {heroStats.map(([value, label]) => (
              <div key={value}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-label="Abstract enterprise systems visual">
          <div className="orb orb--one">ERP</div>
          <div className="orb orb--two">AI</div>
          <div className="orb orb--three">DATA</div>
          <div className="hero__gridlines" />
        </div>
      </div>
    </section>
  );
}
