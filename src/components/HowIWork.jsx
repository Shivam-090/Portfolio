import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Code2, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    phase: 'Discovery & Scope',
    title: 'Understand',
    icon: Target,
    description:
      'Deeply understanding requirements, user pain points, and technical constraints before building. Aligning on measurable success.',
    tags: ['Requirements', 'User Workflows', 'Architecture Plan'],
  },
  {
    number: '02',
    phase: 'Execution & Craft',
    title: 'Build',
    icon: Code2,
    description:
      'Clean, production-grade code across MERN & FastAPI stacks — maintaining high velocity without cutting architectural corners.',
    tags: ['Modular Code', 'Real-time APIs', 'Robust Auth & Data'],
  },
  {
    number: '03',
    phase: 'Delivery & Scale',
    title: 'Ship',
    icon: Rocket,
    description:
      'Rigorous edge-case testing, UI polish, and automated CI/CD deployment — delivering a finished, reliable product that actually ships.',
    tags: ['CI/CD & Cloud', 'Performance Audit', 'Production Ready'],
  },
];

export default function HowIWork() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from('.hiw-header', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });

      // Animate cards reliably with trigger on section container
      gsap.fromTo(
        '.hiw-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="how-i-work"
      className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto border-t border-border"
    >
      {/* ── Section Header ── */}
      <div className="hiw-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-fg-subtle mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Process &amp; Methodology</span>
          </div>
          <h2
            className="font-display font-bold tracking-tight text-fg"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            How I Work
          </h2>
        </div>
        <p className="text-sm text-fg-muted max-w-sm md:text-right">
          A disciplined, battle-tested engineering cycle from raw concept to rock-solid production.
        </p>
      </div>

      {/* ── 3-Card Process Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="hiw-card flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-border bg-bg-elevated/40 hover:border-fg-muted/40 transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono tracking-widest text-fg-subtle border border-border px-2 py-0.5 rounded">
                    {step.number} / {step.phase}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-bg border border-border flex items-center justify-center text-fg group-hover:border-fg/40 transition-colors">
                    <Icon className="w-5 h-5 text-fg-muted group-hover:text-fg transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-fg mb-3 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-fg-muted text-sm sm:text-base leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Bottom Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-border/80 bg-bg text-fg-subtle group-hover:text-fg-muted transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
