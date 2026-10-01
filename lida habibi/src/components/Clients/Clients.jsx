import { clients } from "./Clients.js";
import "./Clients.css";

export default function Clients(){
  return <section className="clients" id="clients">
    <div className="container">
      <p className="eyebrow">Trusted by global enterprises and institutions</p>
      <div className="clients__grid">
        {clients.map(client => <div className="client" key={client}>{client}</div>)}
      </div>
    </div>
  </section>
}
