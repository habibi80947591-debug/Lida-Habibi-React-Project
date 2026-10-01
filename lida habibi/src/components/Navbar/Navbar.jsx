import { useState } from "react";
import { navGroups } from "./Navbar.js";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(null);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href="#top" aria-label="NETLINKS home">
          NET<span>LINKS</span>
        </a>

        <nav className="nav__desktop">
          {navGroups.map((group, index) => (
            <div className="nav__group" key={group.label}>
              <button onClick={() => setOpen(open === index ? null : index)}>
                {group.label} <span>⌄</span>
              </button>
              {open === index && (
                <div className="nav__menu">
                  {group.items.map(([label, href]) => (
                    <a href={href} key={label} onClick={() => setOpen(null)}>
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a className="btn nav__cta" href="#cta">Get started →</a>

        <button className="nav__mobileBtn" onClick={() => setOpen(open === "mobile" ? null : "mobile")} aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open === "mobile" && (
        <div className="nav__mobile">
          {navGroups.flatMap(g => g.items).map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(null)}>{label}</a>
          ))}
          <a className="btn" href="#cta" onClick={() => setOpen(null)}>Get started →</a>
        </div>
      )}
    </header>
  );
}
