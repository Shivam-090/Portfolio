import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education, certifications } from '../data/experience';
import { GraduationCap, Award, Calendar, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu-heading', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 82%' },
      });

      gsap.from('.edu-card', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.edu-cards-container', start: 'top 87%' },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="education"
      className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto border-t border-border relative"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2
            className="edu-heading font-display font-bold tracking-tight text-fg"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Education &amp; Credentials
          </h2>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-fg-muted hover:text-accent border border-border bg-bg-elevated/40 hover:bg-bg-elevated hover:border-accent/50 transition-all duration-200 select-none w-fit"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Official Resume (PDF)</span>
        </a>
      </div>

      {/* Degrees Grid */}
      <div className="edu-cards-container grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {education.map((edu, idx) => (
          <div
            key={edu.id}
            className={`edu-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
              idx === 0
                ? 'border-accent/40 bg-gradient-to-b from-bg-elevated/90 to-bg-elevated/40 shadow-sm hover:border-accent/60'
                : 'border-border/80 bg-bg-elevated/40 hover:border-accent/40 hover:bg-bg-elevated/70'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="w-10 h-10 rounded-xl bg-bg border border-border flex items-center justify-center text-accent">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-fg-subtle border border-border px-2.5 py-1 rounded-full bg-bg">
                  {edu.period}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-fg mb-1.5 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-fg-muted text-sm mb-4">
                {edu.institution}
              </p>
            </div>

            {edu.detail && (
              <div className="pt-4 border-t border-border/60">
                <span className="text-xs font-mono font-medium text-accent bg-accent/10 border border-accent/30 px-2.5 py-1 rounded-md inline-block">
                  {edu.detail}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certifications Sub-section */}
      <div className="pt-6 border-t border-border/60">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-display font-semibold text-xl text-fg flex items-center gap-3">
            <Award className="w-5 h-5 text-accent" />
            <span>Professional Certifications</span>
          </h3>
          <span className="text-xs font-mono text-fg-subtle">Electronic Arts (EA) via Forage</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl border border-border/80 bg-bg-elevated/40 backdrop-blur-sm hover:border-accent/40 hover:bg-bg-elevated/70 transition-all duration-300 flex items-start justify-between gap-4"
            >
              <div>
                <p className="text-fg-subtle text-xs font-mono mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  <span>{cert.period}</span>
                </p>
                <h4 className="text-base font-semibold text-fg mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-fg-muted font-mono">
                  {cert.institution}
                </p>
              </div>

              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-accent border border-accent/30 bg-accent/10 shrink-0">
                Verified
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
