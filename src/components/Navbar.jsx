import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/85 backdrop-blur-xl border-b border-border shadow-sm shadow-black/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Wordmark */}
        <a href="#" className="font-display font-bold text-xl tracking-tight text-fg hover:opacity-70 transition-opacity flex items-center gap-2">
          <span>SHIVAM</span>
          <span className="text-[11px] font-mono tracking-widest text-fg-subtle border border-border px-1.5 py-0.5 rounded uppercase">FROST</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm text-fg-muted hover:text-fg transition-colors duration-300">
              {l.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-fg border border-border px-4 py-2 rounded-full hover:border-fg-muted transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>Resume</span>
            <span className="text-xs">↗</span>
          </a>

          <a href="#contact" className="text-sm font-medium text-bg bg-fg px-5 py-2 rounded-full hover:bg-fg/90 transition-colors duration-300">
            Contact
          </a>

          {/* Theme Toggle Button */}
          <div className="pl-2 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-fg transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`block w-6 h-px bg-fg transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-bg/95 backdrop-blur-2xl md:hidden flex flex-col items-start justify-center px-10 gap-7"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-3xl font-display font-bold text-fg"
              >
                {l.label}
              </motion.a>
            ))}
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="text-sm font-medium text-fg border border-border px-6 py-3 rounded-full flex items-center gap-1.5"
              >
                <span>Resume (PDF)</span>
                <span>↗</span>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.08 }}
                className="text-sm font-medium text-bg bg-fg px-6 py-3 rounded-full"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
