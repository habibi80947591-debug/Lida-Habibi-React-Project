import { testimonial } from "./Testimonial.js";
import "./Testimonial.css";

export default function Testimonial(){
  return <section className="testimonial" id="about">
    <div className="container">
      <p className="eyebrow">Founder note</p>
      <blockquote>“{testimonial.quote}”</blockquote>
      <div className="testimonial__person"><strong>{testimonial.author}</strong><span>{testimonial.role}</span></div>
    </div>
  </section>
}
