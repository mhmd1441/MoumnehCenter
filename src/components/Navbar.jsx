import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { scrollToEl } from "../utils/smoothScroll.js";

export default function Navbar({ sections }) {
  const [active, setActive] = useState("home"); const [open, setOpen] = useState(false);
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { threshold: 0.5 }); Object.values(sections).forEach((ref) => ref.current && observer.observe(ref.current)); return () => observer.disconnect(); }, [sections]);
  const go = (key) => { setOpen(false); scrollToEl(sections[key].current); };
  return <header className="nav"><div className="nav__inner"><button className="nav__brand" onClick={() => go("home")} aria-label="Moumneh Center home"><img src="/mc-logo.jpeg" alt="" /><span>Moumneh Center</span></button><button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span /><span /><span /></button><nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main navigation"><button className={active === "home" ? "active" : ""} onClick={() => go("home")}>Home</button><button className={active === "expertise" ? "active" : ""} onClick={() => go("expertise")}>Expertise</button><button className="nav__quote" onClick={() => go("quote")}>Request a quote</button></nav></div></header>;
}
