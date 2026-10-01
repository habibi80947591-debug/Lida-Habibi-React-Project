import { footerLinks } from "./Footer.js";
import "./Footer.css";

export default function Footer(){
  return <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div><a className="footer__logo" href="#top">NET<span>LINKS</span></a><p>Enterprise Odoo, custom software and AI.</p></div>
        {Object.entries(footerLinks).map(([group,items])=><div key={group}><small>{group}</small>{items.map(([label,href])=><a href={href} key={label}>{label}</a>)}</div>)}
      </div>
      <div className="footer__bottom"><span>© {new Date().getFullYear()} NETLINKS. Practice build.</span><a href="#top">Back to top ↑</a></div>
    </div>
  </footer>
}
