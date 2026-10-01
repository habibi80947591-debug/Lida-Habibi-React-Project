import { services } from "./Services.js";
import "./Services.css";

export default function Services(){
  return <section className="services" id="services">
    <div className="container">
      <div className="services__head">
        <div><p className="eyebrow">What we do</p><h2 className="section-title">Six services.<br/>One accountable partner.</h2></div>
        <p className="section-copy">One Afghanistan-based vendor for ERP, custom software, AI, staff augmentation and cloud, so nothing falls between the seams.</p>
      </div>
      <div className="services__grid">
        {services.map(s=><article className="service-card" key={s.id}>
          <div className="service-card__top"><span>{s.id}</span><small>{s.tag}</small></div>
          <h3>{s.title}</h3><p>{s.description}</p>
          <a href={s.href}>Explore <span>↗</span></a>
        </article>)}
      </div>
    </div>
  </section>
}
