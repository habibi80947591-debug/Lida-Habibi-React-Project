import { useState } from "react";
import { faqs } from "./FAQ.js";
import "./FAQ.css";

export default function FAQ(){
  const [active,setActive]=useState(null);
  return <section className="faq" id="faq">
    <div className="container faq__grid">
      <div><p className="eyebrow">Questions</p><h2 className="section-title">Answers to what CIOs actually ask.</h2></div>
      <div className="faq__list">
        {faqs.map(([q,a],i)=><div className="faq__item" key={q}>
          <button onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i}><span>{q}</span><b>{active===i?"−":"+"}</b></button>
          {active===i && <p>{a}</p>}
        </div>)}
      </div>
    </div>
  </section>
}
