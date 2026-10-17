import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const introText =
  "Hi, I'm Shivam — a full stack software engineer who loves turning complex engineering challenges into clean, scalable products. I build production-grade web applications across the MERN and Python/FastAPI stacks, with a strong focus on real-time systems, robust JWT & RBAC architectures, and optimized data layers. From LLM-driven platforms and local AI companions to high-throughput web apps — and when a project needs crisp frontend craft, custom motion, or end-to-end cloud deployment, that gets made here too.";

export default function IntroStrip() {
  const ref = useRef(null);
  const words = introText.split(' ');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReduced) {
        gsap.set('.intro-word', { opacity: 1 });
        return;
      }

      /* Progressive scroll-scrub word reveal */
      gsap.fromTo(
        '.intro-word',
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: 0.5,
          },
        }
      );

      /* Subtle entrance for the right design card */
      gsap.from('.intro-card', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ── Left Column: Progressive Scroll-Scrub Text ── */}
        <div className="lg:col-span-7 xl:col-span-8">
          <p className="intro-paragraph font-display text-base sm:text-lg md:text-xl lg:text-[1.32rem] font-medium leading-[1.7] tracking-tight">
            {words.map((word, i) => (
              <span
                key={i}
                className="intro-word inline-block mr-[0.28em] text-fg opacity-20 will-change-[opacity]"
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* ── Right Column: Developer Code & System Design Card ── */}
        <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
          <div className="intro-card w-full max-w-[320px] rounded-2xl bg-bg-elevated border border-border p-4 shadow-xl shadow-black/5 dark:shadow-black/30 rotate-2 sm:rotate-3 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 ease-out select-none">
            {/* Window header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[11px] text-fg-subtle">shivam.config.ts</span>
            </div>

            {/* Code snippet representation */}
            <div className="font-mono text-xs leading-relaxed space-y-1">
              <div>
                <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
                <span className="text-blue-500 dark:text-blue-400 font-semibold">engineer</span>{' '}
                <span className="text-fg-subtle">=</span> {'{'}
              </div>
              <div className="pl-4 text-fg-muted">
                <span>role:</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">&apos;Full Stack &amp; AI&apos;</span>,
              </div>
              <div className="pl-4 text-fg-muted">
                <span>stack:</span> [
                <span className="text-amber-600 dark:text-amber-400">&apos;MERN&apos;</span>,{' '}
                <span className="text-amber-600 dark:text-amber-400">&apos;FastAPI&apos;</span>],
              </div>
              <div className="pl-4 text-fg-muted">
                <span>systems:</span> [
                <span className="text-cyan-600 dark:text-cyan-400">&apos;WebSockets&apos;</span>,{' '}
                <span className="text-cyan-600 dark:text-cyan-400">&apos;LLMs&apos;</span>],
              </div>
              <div className="pl-4 text-fg-muted">
                <span>education:</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">&apos;AKTU CSE &apos;26&apos;</span>,
              </div>
              <div className="pl-4 text-fg-muted">
                <span>shipping:</span>{' '}
                <span className="text-purple-500 dark:text-purple-400">true</span>,
              </div>
              <div className="text-fg-subtle">{'};'}</div>
            </div>

            {/* Card footer / Live status */}
            <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-fg-subtle">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>available_to_hire</span>
              </span>
              <span>Faridabad, IN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
