import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsList() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pl-word', {
        y: 60,
        opacity: 0,
        stagger: 0.06,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });

      gsap.from('.pl-row', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.pl-row', start: 'top 88%' },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto"
    >
      <h2
        className="font-display font-bold tracking-tight mb-16 overflow-hidden"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3.5rem)' }}
      >
        {'Selected Work'.split(' ').map((w, i) => (
          <span key={i} className="pl-word inline-block mr-[0.25em]">{w}</span>
        ))}
      </h2>

      <div>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-row group block border-t border-border py-8 md:py-10 -mx-6 px-6 md:-mx-10 md:px-10 transition-colors duration-300 hover:bg-bg-elevated/40"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-fg mb-1.5">
                  {project.name}
                </h3>
                <p className="text-fg-muted text-sm md:text-base max-w-xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-5 flex-shrink-0">
                <div className="hidden lg:flex flex-wrap gap-1.5 max-w-xs justify-end">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-[11px] text-fg-subtle border border-border rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-fg-muted text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  View →
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
