import { ctaText } from "./CTA.js";
import "./CTA.css";

export default function CTA(){
  return <section className="cta" id="cta">
    <div className="container cta__box">
      <p className="eyebrow">{ctaText.eyebrow}</p>
      <h2>{ctaText.title}</h2>
      <p>{ctaText.copy}</p>
      <a className="btn" href="mailto:hello@example.com">Book a 30-min discovery call →</a>
    </div>
  </section>
}
