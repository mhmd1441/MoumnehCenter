import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP ScrollTrigger fade/slide-in. Pass `stagger` (a CSS selector, e.g.
 * ".card") to animate matching children one-by-one instead of the whole block.
 */
export default function useReveal(ref, { stagger, y = 24 } = {}) {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const targets = stagger ? el.querySelectorAll(stagger) : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: stagger ? 0.15 : 0,
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [ref, stagger, y]);
}
