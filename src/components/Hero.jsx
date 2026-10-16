import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Hero({ loaded }) {
  const section = useRef(null);

  /* ── GSAP Entrance Animation ── */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-title-line',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        0.05
      )
        .fromTo(
          '.hero-desc',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          0.35
        )
        .fromTo(
          '.hero-tag',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.04, duration: 0.5 },
          0.5
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
      className="relative min-h-[calc(100vh-5rem)] flex items-center pt-24 pb-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ── Left Column: Editorial Minimal Typography ── */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          {/* Main Giant Name with Alias */}
          <h1
            className="font-display font-extrabold tracking-tight leading-[0.92] mb-6 text-fg"
            style={{ fontSize: 'clamp(3.5rem, 7.5vw, 7.25rem)' }}
          >
            <span className="hero-title-line block overflow-hidden">
              Shivam
            </span>
            <span className="hero-title-line block overflow-hidden text-fg-muted font-normal text-2xl md:text-3xl lg:text-4xl tracking-tight mt-2 flex items-center gap-2.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-fg-subtle border border-border px-2 py-0.5 rounded">AKA</span>
              <span className="font-semibold text-fg">Frost</span>
            </span>
          </h1>

          {/* Subtitle / Tagline — two concise editorial lines */}
          <div className="hero-desc text-fg-muted text-base md:text-lg leading-snug mb-9 max-w-md space-y-1">
            <p className="font-medium text-fg/90">
              Full Stack Developer &amp; AI Product Builder.
            </p>
            <p className="text-fg-muted">
              Building products that actually ship.
            </p>
          </div>

          {/* Minimalist Rectangular Tag Pills */}
          <div className="flex flex-wrap gap-2.5 max-w-lg mb-10">
            {tags.map((tag) => (
              <a
                key={tag.label}
                href={tag.href}
                target={tag.isResume ? '_blank' : undefined}
                rel={tag.isResume ? 'noopener noreferrer' : undefined}
                className={`hero-tag px-3.5 py-1.5 text-xs font-medium border transition-colors select-none ${
                  tag.isResume
                    ? 'border-fg/40 text-fg bg-fg/5 hover:bg-fg hover:text-bg'
                    : 'border-border text-fg-muted bg-bg-elevated/40 hover:border-fg-muted hover:text-fg'
                }`}
              >
                {tag.label}
              </a>
            ))}
          </div>

          {/* Quick minimal navigation jumps */}
          <div className="flex items-center gap-6 pt-2 text-xs font-mono tracking-wider text-fg-subtle uppercase">
            <a
              href="#projects"
              className="hover:text-fg transition-colors flex items-center gap-1.5 group"
            >
              <span>Selected Work</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span>·</span>
            <a
              href="#about"
              className="hover:text-fg transition-colors flex items-center gap-1.5 group"
            >
              <span>About / CV</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <span>·</span>
            <a
              href="#contact"
              className="hover:text-fg transition-colors flex items-center gap-1.5 group"
            >
              <span>Contact</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* ── Right Column: Portrait Photograph (Clean, static, no background color/shadow, no hover) ── */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[620px] overflow-hidden">
            <img
              src="/IMG_20240516_170845.png"
              alt="Shivam (Frost)"
              fetchPriority="high"
              loading="eager"
              className="w-full h-full object-cover object-[center_18%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
