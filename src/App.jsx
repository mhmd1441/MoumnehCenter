import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import { initSmoothScroll, scrollToEl } from "./utils/smoothScroll.js";
import "./styles/app.css";

export default function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const sections = { home: heroRef, expertise: aboutRef, quote: contactRef };
  useEffect(() => { initSmoothScroll(); }, []);
  return <><Navbar sections={sections} /><main><section id="home" ref={heroRef}><Hero onQuote={() => scrollToEl(contactRef.current)} /></section><section id="expertise" ref={aboutRef}><About /></section><section id="quote" ref={contactRef}><Contact /></section></main><Footer /></>;
}
