import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Keyboard shortcut and scroll-lock for lightbox
  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proj-header-elem', {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
      });

      gsap.from('.proj-row', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.proj-list-container', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto border-t border-border relative"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2
            className="proj-header-elem font-display font-bold tracking-tight text-fg"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
          >
            Projects
          </h2>
        </div>
        <p className="proj-header-elem text-fg-muted text-sm md:text-base max-w-md leading-relaxed">
          Production systems, AI platforms, and full-stack applications architected and shipped end-to-end.
        </p>
      </div>

      {/* ── All Projects List (Horizontal Rows matching reference design) ── */}
      <div className="proj-list-container">
        {projects.map((project, index) => {
          const isExpanded = expandedId === project.id;
          const isHovered = hoveredId === project.id;
          const showImages = isHovered || isExpanded;
          const fullDesc = project.featuredDescription || project.description;
          const projectImages = project.images || [];

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="proj-row border-t border-border py-10 md:py-14 transition-colors duration-300 hover:bg-bg-elevated/20 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 rounded-xl group relative"
            >
              {/* Row Header: Title on Left, Jump To Project on Right */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs font-mono text-fg-subtle uppercase tracking-wider">
                    0{index + 1}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-fg tracking-tight group-hover:text-fg/80 transition-colors">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="text-[11px] font-mono uppercase tracking-widest text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                  {projectImages.length > 0 && (
                    <span className="text-[11px] font-mono text-fg-subtle border border-border/70 bg-bg-elevated/40 px-2 py-0.5 rounded inline-flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                      <ImageIcon className="w-3 h-3" />
                      <span>{projectImages.length} {projectImages.length > 1 ? 'Screens' : 'Screen'}</span>
                    </span>
                  )}
                </div>

                {project.isPrivate ? (
                  <span
                    title="Proprietary / Client codebase (Private Repository)"
                    className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-mono px-3.5 py-2 border border-border/80 bg-bg-elevated/40 text-fg-subtle rounded shrink-0 shadow-sm cursor-default select-none"
                  >
                    <span>Private Repo</span>
                    <span className="text-[11px] opacity-75">🔒</span>
                  </span>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start sm:self-auto text-xs font-mono px-4 py-2 border border-border bg-bg-elevated/50 text-fg-muted hover:text-bg hover:bg-fg hover:border-fg transition-all duration-200 rounded shrink-0 shadow-sm"
                  >
                    <span>Jump To Project</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                )}
              </div>

              {/* Description (Initially showing only half / clamped) */}
              <div className="max-w-3xl mb-5">
                <p
                  className={`text-fg-muted text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                    isExpanded ? '' : 'line-clamp-2'
                  }`}
                >
                  {fullDesc}
                </p>
                <button
                  type="button"
                  onClick={() => toggleExpand(project.id)}
                  className="mt-2 text-xs font-mono text-fg-subtle hover:text-fg inline-flex items-center gap-1.5 transition-colors cursor-pointer select-none underline underline-offset-4"
                >
                  <span>{isExpanded ? 'Hide full details' : 'See full details & modules'}</span>
                  <span>{isExpanded ? '↑' : '↓'}</span>
                </button>
              </div>

              {/* All the technology used to make the project */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-fg-subtle mr-1">
                  Stack:
                </span>
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="text-xs font-mono text-fg-muted border border-border bg-bg-elevated/50 px-2.5 py-1 rounded"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* ── Images Below Project (Appears on Hover or when Seeing Full Details) ── */}
              {projectImages.length > 0 && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    showImages
                      ? 'max-h-[900px] opacity-100 mt-6 pt-4'
                      : 'max-h-0 opacity-0 mt-0 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-3 text-xs font-mono text-fg-subtle">
                    <span className="uppercase tracking-widest flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Project Interface Previews</span>
                    </span>
                    <span className="text-[11px]">
                      Click image to enlarge
                    </span>
                  </div>

                  <div
                    className={`grid gap-4 ${
                      projectImages.length === 1
                        ? 'grid-cols-1 max-w-3xl'
                        : projectImages.length === 2
                        ? 'grid-cols-1 sm:grid-cols-2 max-w-4xl'
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    }`}
                  >
                    {projectImages.map((imgUrl, imgIdx) => (
                      <div
                        key={imgIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxImage(imgUrl);
                        }}
                        className="group/card rounded-xl overflow-hidden border border-border bg-bg-elevated/40 shadow-sm hover:shadow-xl hover:border-fg-muted/50 transition-all duration-300 cursor-zoom-in"
                      >
                        {/* Browser window header */}
                        <div className="px-3.5 py-2 border-b border-border/60 bg-bg/70 flex items-center justify-between text-[11px] font-mono text-fg-subtle">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-border" />
                            <span className="w-2 h-2 rounded-full bg-border" />
                            <span className="w-2 h-2 rounded-full bg-border" />
                          </div>
                          <span className="text-[10px] tracking-wider truncate max-w-[140px]">
                            Screen 0{imgIdx + 1}
                          </span>
                          <ZoomIn className="w-3.5 h-3.5 opacity-60 group-hover/card:opacity-100 transition-opacity" />
                        </div>

                        {/* Screenshot with hover zoom */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-bg/50">
                          <img
                            src={imgUrl}
                            alt={`${project.name} Screenshot 0${imgIdx + 1}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Key Architectural Highlights (When Expanded) ── */}
              {isExpanded && project.highlights && project.highlights.length > 0 && (
                <div className="mt-8 pt-6 border-t border-border/60 animate-fadeIn">
                  <p className="text-xs font-mono uppercase tracking-widest text-fg-subtle mb-4">
                    Key Architectural Highlights
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-border/80 bg-bg-elevated/30 backdrop-blur-sm flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[11px] font-mono text-fg-subtle">
                              0{idx + 1} // Module
                            </span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-border bg-bg text-fg-muted">
                              {item.badge}
                            </span>
                          </div>
                          <h4 className="font-display font-semibold text-sm sm:text-base text-fg mb-1.5">
                            {item.title}
                          </h4>
                          <p className="text-fg-muted text-xs sm:text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-mono text-fg-subtle truncate">
                          {item.codeSnippet}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {/* Bottom divider line */}
        <div className="border-t border-border" />
      </div>

      {/* ── Fullscreen Lightbox Modal ── */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md animate-fadeIn cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center cursor-default"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Close screenshot preview"
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox image */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black max-h-[85vh]">
              <img
                src={lightboxImage}
                alt="Enlarged project screenshot"
                className="w-auto h-auto max-h-[85vh] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
