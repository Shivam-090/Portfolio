import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../data/experience';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-heading',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        '.exp-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.75,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto border-t border-border relative"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
         
          <h2
            className="exp-heading font-display font-bold tracking-tight text-fg"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Work Experience
          </h2>
        </div>
        <p className="text-sm text-fg-muted max-w-sm md:text-right">
          Track record of shipping production code, optimizing performance, and accelerating engineering velocity.
        </p>
      </div>

      {/* ── Vertical Timeline ── */}
      <div className="exp-timeline relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-accent before:via-border before:to-border/30">
        {experience.map((exp, index) => {
          const isLatest = index === 0;
          return (
            <div key={exp.id} className="exp-card relative group">
              {/* Timeline Node Dot */}
              <div
                className={`absolute -left-[27px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 bg-bg transition-colors duration-300 flex items-center justify-center ${
                  isLatest
                    ? 'border-accent shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                    : 'border-border group-hover:border-accent/60'
                }`}
              >
                {isLatest && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />}
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-bg-elevated/40 hover:bg-bg-elevated/80 hover:border-accent/40 transition-all duration-300 shadow-2xs hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 pb-4 border-b border-border/60">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-fg tracking-tight">
                        {exp.role}
                      </h3>
                      {isLatest && (
                        <span className="text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/40 bg-accent/10 px-2.5 py-0.5 rounded-full font-medium">
                          Recent
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-fg-muted">
                      <span className="font-semibold text-fg/90 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-accent" />
                        <span>{exp.company}</span>
                      </span>
                      {exp.location && (
                        <>
                          <span className="text-fg-subtle select-none">·</span>
                          <span className="text-fg-subtle flex items-center gap-1 text-xs">
                            <MapPin className="w-3 h-3 text-fg-subtle" />
                            <span>{exp.location}</span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Period badge */}
                  <div className="inline-flex items-center gap-1.5 self-start md:self-center px-3 py-1 rounded-full text-xs font-mono border border-border bg-bg text-fg-subtle shrink-0">
                    <Calendar className="w-3 h-3 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-fg-muted text-sm sm:text-base leading-relaxed flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent/80 shrink-0 mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
