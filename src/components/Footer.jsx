const currentYear = new Date().getFullYear();

const navLinks = [
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about' },
  { label: 'Contact',    href: '#contact' },
];

const socialLinks = [
  { label: 'Resume (PDF)', href: '/resume.pdf' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-kumar-090' },
  { label: 'GitHub',   href: 'https://github.com/Shivam-090' },
  { label: 'Email',    href: 'mailto:shivamu0900@gmail.com' },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border px-6 md:px-10 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-20 mb-16">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl tracking-tight mb-3 flex items-center gap-2">
              <span>SHIVAM</span>
              <span className="text-xs font-mono uppercase tracking-widest text-fg-subtle border border-border px-1.5 py-0.5 rounded">FROST</span>
            </p>
            <p className="text-fg-muted text-sm leading-relaxed mb-4">
              Full Stack Developer &amp; AI Product Builder
            </p>
            <p className="text-fg-subtle text-xs flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
              Open to opportunities · Faridabad, Haryana, India
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-fg-subtle text-xs uppercase tracking-[0.2em] mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-fg-muted text-sm hover:text-fg transition-colors duration-300 w-fit"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-fg-subtle text-xs uppercase tracking-[0.2em] mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-fg-muted text-sm hover:text-fg transition-colors duration-300 w-fit"
                >
                  {l.label}
                </a>
              ))}
              <p className="text-fg-muted text-sm mt-1">+91 7210282783</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-fg-subtle text-xs">
            © {currentYear} Shivam. All rights reserved.
          </p>
          <p className="text-fg-subtle text-xs">
            Designed &amp; built by hand.
          </p>
        </div>
      </div>
    </footer>
  );
}
