import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

/* ── Modern Showcase Card (Clean 2D with smooth hover) ── */
function FeatureCard({ item, index }) {
  return (
    <div
      className="fp-frame flex-shrink-0 w-80 md:w-[26rem] p-6 rounded-2xl border border-border bg-bg-elevated/70 backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:border-fg-muted/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 group"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-[11px] font-mono tracking-wider text-fg-subtle uppercase">
            0{index + 1} // Module
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full border border-border/80 bg-bg text-fg-muted font-mono">
            {item.badge}
          </span>
        </div>
        <h4 className="font-display font-semibold text-lg text-fg mb-2 group-hover:text-accent transition-colors duration-300">
          {item.title}
        </h4>
        <p className="text-fg-muted text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-fg-subtle">
        <span>{item.codeSnippet}</span>
        <span className="group-hover:translate-x-1 transition-transform duration-300 text-fg-muted">→</span>
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────── */
export default function FeaturedProject() {
  const section = useRef(null);
  const project = projects.find((p) => p.featured);

  useLayoutEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      const st = { scrollTrigger: { trigger: section.current, start: 'top 75%' } };

      gsap.from('.fp-label', { y: 20, opacity: 0, duration: 0.6, ...st });
      gsap.from('.fp-title', { y: 50, opacity: 0, duration: 0.9, delay: 0.1, ease: 'power3.out', ...st });
      gsap.from('.fp-desc',  { y: 30, opacity: 0, duration: 0.7, delay: 0.2, ...st });
      gsap.from('.fp-tag',   { y: 15, opacity: 0, stagger: 0.04, duration: 0.5, delay: 0.3, ...st });
      gsap.from('.fp-link',  { y: 15, opacity: 0, duration: 0.5, delay: 0.4, ...st });
      gsap.from('.fp-frame', {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, delay: 0.3, ease: 'power2.out',
        scrollTrigger: { trigger: '.fp-frame', start: 'top 92%' },
      });
    }, section);

    return () => ctx.revert();
  }, [project]);

  if (!project) return null;

  return (
    <section ref={section} className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="fp-label text-fg-subtle text-xs uppercase tracking-[0.2em] mb-4">
            Featured Case Study
          </p>
          <h2
            className="fp-title font-display font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
          >
            {project.name}
          </h2>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="fp-link group inline-flex items-center gap-2 text-sm font-medium text-fg px-5 py-2.5 rounded-full border border-border hover:border-fg-muted transition-colors w-fit"
        >
          View on GitHub
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>

      <p className="fp-desc text-fg-muted text-base md:text-lg max-w-3xl leading-relaxed mb-8">
        {project.featuredDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-12">
        {project.tech.map((t) => (
          <span key={t} className="fp-tag text-xs text-fg-muted border border-border bg-bg-elevated/40 rounded-full px-3 py-1.5 font-mono">
            {t}
          </span>
        ))}
      </div>

      {/* Feature Architecture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(project.highlights || []).map((item, i) => (
          <FeatureCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
