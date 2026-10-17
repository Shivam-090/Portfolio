import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from './extra/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function ClosingCTA() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const st = { scrollTrigger: { trigger: ref.current, start: 'top 75%' } };

      gsap.from('.cta-word', {
        y: 100,
        opacity: 0,
        stagger: 0.06,
        duration: 1.1,
        ease: 'power3.out',
        ...st,
      });

      gsap.from('.cta-sub', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 0.5,
        ease: 'power2.out',
        ...st,
      });

      gsap.from('.cta-btn', {
        y: 25,
        opacity: 0,
        duration: 0.6,
        delay: 0.7,
        ease: 'power2.out',
        ...st,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const line1 = 'Ready to build'.split(' ');
  const line2 = 'something real?'.split(' ');

  return (
    <section
      ref={ref}
      id="contact"
      className="py-32 md:py-48 px-6 md:px-10 max-w-7xl mx-auto text-center"
    >
      <h2
        className="font-display font-bold tracking-tight mb-6 mx-auto"
        style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
      >
        <span className="block overflow-hidden">
          {line1.map((w, i) => (
            <span key={i} className="cta-word inline-block mr-[0.25em]">{w}</span>
          ))}
        </span>
        <span className="block overflow-hidden">
          {line2.map((w, i) => (
            <span key={i} className="cta-word inline-block mr-[0.25em]">{w}</span>
          ))}
        </span>
      </h2>

      <p className="cta-sub text-fg-muted text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
        I&rsquo;m currently open to full-time roles, freelance projects,
        and interesting collaborations.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <MagneticButton
          href="mailto:shivamu0900@gmail.com"
          className="cta-btn text-sm font-medium text-bg bg-fg px-8 py-4 rounded-full hover:bg-fg/90 transition-colors duration-300"
          strength={0.4}
        >
          Get in Touch
        </MagneticButton>
        <MagneticButton
          href="/resume.pdf"
          className="cta-btn text-sm font-medium text-fg border border-border bg-bg-elevated/40 px-8 py-4 rounded-full hover:border-fg-muted transition-colors duration-300 flex items-center gap-2"
          strength={0.4}
        >
          <span>Download Resume</span>
          <span className="text-xs">↓</span>
        </MagneticButton>
      </div>
    </section>
  );
}
