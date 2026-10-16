import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Requirements, users, what success looks like.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Clean, production-grade code across MERN/FastAPI — moving fast without cutting corners.',
  },
  {
    number: '03',
    title: 'Ship',
    description:
      'Testing, polish, deployment — a finished product, not an endless feedback loop.',
  },
];

export default function HowIWork() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hiw-word', {
        y: 60,
        opacity: 0,
        stagger: 0.06,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });

      gsap.from('.hiw-step', {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.hiw-step', start: 'top 87%' },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="how-i-work"
      className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto border-t border-border"
    >
      <h2
        className="font-display font-bold tracking-tight mb-20 overflow-hidden"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.5rem)' }}
      >
        {'How I Work'.split(' ').map((w, i) => (
          <span key={i} className="hiw-word inline-block mr-[0.25em]">{w}</span>
        ))}
      </h2>

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {steps.map((step) => (
          <div key={step.number} className="hiw-step">
            <p className="text-fg-subtle text-xs tracking-[0.25em] uppercase mb-5">
              {step.number}
            </p>
            <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">
              {step.title}
            </h3>
            <p className="text-fg-muted text-sm md:text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
