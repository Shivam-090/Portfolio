import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ArrowDown, Download, Mail } from 'lucide-react';

export default function Hero({ loaded }) {
  const section = useRef(null);

  /* ── GSAP Entrance Animation ── */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-title-line',
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        0.05
      )
        .fromTo(
          '.hero-desc',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.3
        )
        .fromTo(
          '.hero-tag',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.04, duration: 0.5 },
          0.45
        )
        .fromTo(
          '.hero-cta',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.5 },
          0.6
        )
        .fromTo(
          '.hero-portrait-card',
          { scale: 0.96, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.85, ease: 'power2.out' },
          0.2
        );
    }, section);

    return () => ctx.revert();
  }, [loaded]);

  const tags = [
    { label: 'Full Stack', href: '#projects' },
    { label: 'MERN Stack', href: '#skills' },
    { label: 'FastAPI & Python', href: '#skills' },
    { label: 'AI & LLMs', href: '#projects' },
    { label: 'Real-Time Systems', href: '#skills' },
    { label: 'Resume (PDF) ↗', href: '/resume.pdf', isResume: true },
  ];

  return (
    <section
      ref={section}
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center pt-24 pb-16 md:py-28 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Ambient background blue glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        {/* ── Left Column: Editorial Minimal Typography ── */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          {/* Main Giant Name with Alias */}
          <h1
            className="font-display font-extrabold tracking-tight leading-[0.92] mb-6 text-fg"
            style={{ fontSize: 'clamp(3.5rem, 7.5vw, 6.75rem)' }}
          >
            <span className="hero-title-line block overflow-hidden">
              Shivam
            </span>
            <span className="hero-title-line block overflow-hidden text-fg-muted font-normal text-2xl md:text-3xl lg:text-4xl tracking-tight mt-2 flex items-center gap-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-fg-subtle border border-border px-2 py-0.5 rounded bg-bg-elevated/40">AKA</span>
              <span className="font-semibold text-fg">Frost</span>
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <div className="hero-desc text-fg-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl space-y-2">
            <p className="font-semibold text-fg/90">
              Full Stack Developer &amp; AI Product Builder.
            </p>
            <p className="text-fg-muted text-sm sm:text-base">
              Architecting production-ready applications across MERN &amp; Python/FastAPI stacks, real-time WebSocket systems, and local/cloud LLMs. Building products that actually ship.
            </p>
          </div>

          {/* Minimalist Rectangular Tag Pills */}
          <div className="flex flex-wrap gap-2 max-w-xl mb-9">
            {tags.map((tag) => (
              <a
                key={tag.label}
                href={tag.href}
                target={tag.isResume ? '_blank' : undefined}
                rel={tag.isResume ? 'noopener noreferrer' : undefined}
                className={`hero-tag px-3.5 py-1.5 text-xs font-mono border transition-all duration-200 select-none rounded-md ${
                  tag.isResume
                    ? 'border-accent/40 text-accent bg-accent/10 hover:bg-accent hover:text-white'
                    : 'border-border/80 text-fg-muted bg-bg-elevated/40 hover:border-accent/60 hover:text-accent hover:bg-bg-elevated'
                }`}
              >
                {tag.label}
              </a>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="hero-cta inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-accent hover:opacity-90 transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-fg border border-border bg-bg-elevated/50 hover:border-accent/60 hover:text-accent hover:bg-bg-elevated transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5 text-fg-subtle" />
              <span>Resume (PDF)</span>
            </a>

            <a
              href="#contact"
              className="hero-cta inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-fg-muted hover:text-fg border border-border/70 hover:border-accent/50 transition-all duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Quick stats micro-strip */}
          <div className="flex items-center gap-6 pt-8 text-xs font-mono text-fg-subtle border-t border-border/60 mt-8 max-w-lg">
            <div>
              <span className="font-semibold text-fg">6+</span> Production Apps
            </div>
            <span>·</span>
            <div>
              <span className="font-semibold text-fg">Full Stack</span> MERN &amp; FastAPI
            </div>
            <span>·</span>
            <div>
              <span className="font-semibold text-fg">AI</span> Local LLMs &amp; RAG
            </div>
          </div>
        </div>

        {/* ── Right Column: Framed Portrait Photograph with Blue Backlight & Clean Rounded Framing ── */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-1 lg:order-2">
          <div className="hero-portrait-card relative w-full max-w-sm sm:max-w-md">
            {/* Ambient blue back-glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-accent/25 via-blue-500/10 to-indigo-500/20 rounded-[2.2rem] blur-2xl opacity-60 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-bg-elevated shadow-2xl aspect-[4/5] max-h-[560px] group">
              {/* Light theme portrait */}
              <img
                src="/IMG_20240516_170845.png"
                alt="Shivam (Frost) — Full Stack Developer"
                fetchPriority="high"
                loading="eager"
                className="hero-portrait-light w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Black / Dark theme portrait with dark background */}
              <img
                src="/IMG_21240516_170845.png"
                alt="Shivam (Frost) — Full Stack Developer"
                fetchPriority="high"
                loading="eager"
                className="hero-portrait-dark w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Bottom gradient vignette for smooth integration */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg via-bg/40 to-transparent pointer-events-none" />

              {/* Top location badge */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full border border-border/80 bg-bg/85 backdrop-blur-md text-[11px] font-mono text-fg shadow-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>Faridabad, IN · IST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
