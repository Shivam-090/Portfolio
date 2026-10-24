import { useState, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import {
  X,
  ZoomIn,
  Image as ImageIcon,
  ExternalLink,
  Lock,
  Layers,
  Sparkles,
  Cpu,
  Radio,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: 'all', label: 'All Projects', count: 6 },
  { id: 'ai', label: 'AI & LLMs', count: 3, icon: Sparkles },
  { id: 'fullstack', label: 'Full Stack & MERN', count: 5, icon: Layers },
  { id: 'realtime', label: 'Real-Time Systems', count: 3, icon: Radio },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    if (selectedCategory === 'ai') {
      return projects.filter(
        (p) =>
          p.id === 'prepai' || p.id === 'wellnest' || p.id === 'ai-blog'
      );
    }
    if (selectedCategory === 'fullstack') {
      return projects.filter(
        (p) =>
          p.id === 'nexigos' ||
          p.id === 'wellnest' ||
          p.id === 'skillswap' ||
          p.id === 'live-chat' ||
          p.id === 'ai-blog'
      );
    }
    if (selectedCategory === 'realtime') {
      return projects.filter(
        (p) =>
          p.id === 'prepai' || p.id === 'skillswap' || p.id === 'live-chat'
      );
    }
    return projects;
  }, [selectedCategory]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-36 px-6 md:px-10 max-w-7xl mx-auto border-t border-border relative"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2
            className="proj-header-elem font-display font-bold tracking-tight text-fg"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
          >
            Projects
          </h2>
        </div>
        <p className="proj-header-elem text-fg-muted text-sm md:text-base max-w-md leading-relaxed">
          Production systems, AI platforms, and full-stack applications architected and shipped end-to-end with real user workflows.
        </p>
      </div>

      {/* ── Category Filter Tabs (UI-UX Pro Max Pattern in Blue Accent) ── */}
      <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-border/80 pb-5">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer select-none ${
                isSelected
                  ? 'text-white bg-accent font-semibold shadow-xs'
                  : 'text-fg-muted hover:text-fg bg-bg-elevated/50 hover:bg-bg-elevated border border-border/80'
              }`}
            >
              {Icon && <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-fg-subtle'}`} />}
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-bg border border-border text-fg-subtle'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── All Projects List (Visual Cards with Instant Mockup Previews) ── */}
      <motion.div layout className="space-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;
            const fullDesc = project.featuredDescription || project.description;
            const projectImages = project.images || [];

            return (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`rounded-2xl border transition-all duration-300 p-6 sm:p-8 lg:p-10 ${
                  project.featured
                    ? 'border-accent/40 bg-gradient-to-b from-bg-elevated/90 to-bg-elevated/40 shadow-xl'
                    : 'border-border bg-bg-elevated/40 hover:border-accent/40 hover:bg-bg-elevated/70 shadow-sm'
                }`}
              >
                {/* Top Row: Index, Name, Featured Badge, Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/60">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono text-fg-subtle px-2 py-0.5 rounded border border-border bg-bg/50">
                      0{index + 1}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-fg tracking-tight">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <span className="text-[11px] font-mono uppercase tracking-widest text-accent border border-accent/40 bg-accent/10 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 font-semibold">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured Flagship</span>
                      </span>
                    )}
                    {projectImages.length > 0 && (
                      <span className="text-[11px] font-mono text-fg-subtle border border-border/80 bg-bg px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-fg-subtle" />
                        <span>{projectImages.length} {projectImages.length > 1 ? 'Screens' : 'Screen'}</span>
                      </span>
                    )}
                  </div>

                  {/* Jump To Project or Private Badge */}
                  <div className="flex items-center gap-2">
                    {project.isPrivate ? (
                      <span
                        title="Proprietary / Client codebase (Private Repository)"
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 border border-border/80 bg-bg text-fg-subtle rounded-lg shadow-2xs select-none"
                      >
                        <Lock className="w-3 h-3 text-fg-subtle" />
                        <span>Private Client Code</span>
                      </span>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border border-border bg-bg text-fg hover:text-white hover:bg-accent hover:border-accent transition-all duration-200 shadow-2xs group/btn cursor-pointer"
                      >
                        <span>View Source (GitHub)</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Body: Two-column grid (Left: Description & Specs, Right: Visual Screenshot Preview) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Narrative & Tech */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <p
                        className={`text-fg-muted text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                          isExpanded ? '' : 'line-clamp-3'
                        }`}
                      >
                        {fullDesc}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggleExpand(project.id)}
                        className="mt-3 text-xs font-mono text-accent hover:text-accent/80 inline-flex items-center gap-1.5 transition-colors cursor-pointer select-none underline underline-offset-4"
                      >
                        <span>{isExpanded ? 'Collapse Architecture Specs' : 'Expand Full Architectural Specs'}</span>
                        <span>{isExpanded ? '↑' : '↓'}</span>
                      </button>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="mt-6 pt-5 border-t border-border/60">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-fg-subtle mb-2.5">
                        Technologies &amp; Architecture:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((techItem) => (
                          <span
                            key={techItem}
                            className="text-xs font-mono text-fg-muted border border-border/80 bg-bg/70 px-2.5 py-1 rounded-md hover:border-accent/60 hover:text-accent transition-colors select-none"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup Window Frame */}
                  {projectImages.length > 0 && (
                    <div className="lg:col-span-5">
                      <div
                        onClick={() => setLightboxImage(projectImages[0])}
                        className="group/mockup rounded-xl overflow-hidden border border-border/80 bg-bg shadow-lg hover:shadow-2xl hover:border-accent/60 transition-all duration-300 cursor-zoom-in relative"
                      >
                        {/* macOS style browser window header */}
                        <div className="px-3.5 py-2.5 border-b border-border/80 bg-bg-elevated flex items-center justify-between text-[11px] font-mono text-fg-subtle">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500/70" />
                          </div>
                          <span className="text-[10px] tracking-wider truncate max-w-[150px] text-fg-subtle font-mono">
                            {project.name.toLowerCase().replace(/\s+/g, '-')}.local
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] text-fg-subtle group-hover/mockup:text-accent transition-colors">
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </span>
                        </div>

                        {/* Primary Image Preview with subtle zoom */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-bg/60">
                          <img
                            src={projectImages[0]}
                            alt={`${project.name} Interface Screenshot`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/mockup:scale-105"
                          />
                          {/* Image count pill overlay if multiple images */}
                          {projectImages.length > 1 && (
                            <div className="absolute bottom-2.5 right-2.5 px-2 py-1 rounded-md bg-black/75 backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1 shadow-md">
                              <ImageIcon className="w-3 h-3" />
                              <span>+{projectImages.length - 1} more</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Small secondary thumbnails bar if more than 1 image */}
                      {projectImages.length > 1 && (
                        <div className="grid grid-cols-3 gap-2 mt-2.5">
                          {projectImages.map((imgUrl, thumbIdx) => (
                            <div
                              key={thumbIdx}
                              onClick={() => setLightboxImage(imgUrl)}
                              className="rounded-lg overflow-hidden border border-border/70 aspect-[16/10] cursor-zoom-in hover:border-accent/80 transition-all opacity-80 hover:opacity-100 hover:scale-[1.02]"
                            >
                              <img
                                src={imgUrl}
                                alt={`Thumbnail 0${thumbIdx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* ── Architectural Highlights (Expanded Details) ── */}
                {isExpanded && project.highlights && project.highlights.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 pt-6 border-t border-border/70"
                  >
                    <p className="text-xs font-mono uppercase tracking-widest text-accent mb-4 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-accent" />
                      <span>Deep Architectural Highlights &amp; Microservices</span>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {project.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-xl border border-border/80 bg-bg/60 backdrop-blur-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <span className="text-[11px] font-mono text-fg-subtle">
                                0{idx + 1} // System
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-border bg-bg-elevated text-fg-muted font-medium">
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
                          <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-mono text-accent truncate">
                            {item.codeSnippet}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ── Fullscreen Lightbox Modal ── */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn cursor-zoom-out"
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
