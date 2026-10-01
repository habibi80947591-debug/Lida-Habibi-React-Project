import { aiFeatures } from "./AI.js";
import "./AI.css";

export default function AI(){
  return <section className="solution solution--ai" id="ai">
    <div className="container solution__grid solution__grid--reverse">
      <div className="solution__visual">
        <div className="ai-machine"><div className="ai-machine__core">AI</div><div className="ai-machine__ring ring1"/><div className="ai-machine__ring ring2"/><span className="node n1">DATA</span><span className="node n2">ERP</span><span className="node n3">RAG</span><span className="node n4">AUDIT</span></div>
      </div>
      <div className="solution__copy">
        <p className="eyebrow">02 / AI & Automation</p>
        <h2 className="section-title">Agents that don't just chat.<br/><em>They work.</em></h2>
        <p className="section-copy">Production AI agents designed for real business workflows: grounded, governed and observable.</p>
        <ul>{aiFeatures.map(x=><li key={x}>{x}</li>)}</ul>
        <a className="btn" href="#cta">See how it works →</a>
      </div>
    </div>
  </section>
}
