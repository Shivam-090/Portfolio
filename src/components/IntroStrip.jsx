import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroStrip() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-char', {
        y: 60,
        opacity: 0,
        stagger: 0.018,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 82%' },
      });

      gsap.from('.intro-body', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.intro-body', start: 'top 87%' },
      });

      gsap.from('.intro-link', {
        x: -20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.intro-link', start: 'top 92%' },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const tagline = 'ShippingRealProducts.';

  return (
    <section
      ref={ref}
      className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto border-t border-border"
    >
      {/* Per-character reveal tagline */}
      <h2
        className="font-display font-black tracking-tighter leading-none mb-12 overflow-hidden"
        style={{ fontSize: 'clamp(2rem, 5.5vw, 5.5rem)' }}
      >
        {tagline.split('').map((ch, i) => (
          <span key={i} className="intro-char inline-block">
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </h2>

      <div className="grid md:grid-cols-2 gap-10 md:gap-20">
        <p className="intro-body text-fg-muted text-base md:text-lg leading-relaxed max-w-xl">
          I&rsquo;m a full-stack developer who cares about shipping&nbsp;&mdash;
          not just building. Every project I touch goes from concept to a working,
          deployed product with clean code, proper auth, real data, and actual users
          in mind. No half-built demos. No tutorial clones.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="#projects"
            className="intro-link group inline-flex items-center gap-2 text-fg text-sm font-medium w-fit"
          >
            View Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#how-i-work"
            className="intro-link group inline-flex items-center gap-2 text-fg text-sm font-medium w-fit"
          >
            Why Hire Me
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="intro-link group inline-flex items-center gap-2 text-fg-muted hover:text-fg text-sm font-medium w-fit transition-colors"
          >
            View Resume (PDF)
            <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
