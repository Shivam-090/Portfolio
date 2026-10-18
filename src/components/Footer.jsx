import { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  MapPin,
} from 'lucide-react';

const currentYear = new Date().getFullYear();

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Footer() {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedItem(key);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  return (
    <footer
      role="contentinfo"
      className="border-t border-border px-6 md:px-10 py-16 md:py-20 bg-bg transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl">
        {/* ── Footer Information Columns ── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Column 1: Brand & Bio */}
          <div>
            <p className="font-display font-bold text-2xl tracking-tight mb-3 flex items-center gap-2">
              <span>SHIVAM</span>
              <span className="text-xs font-mono uppercase tracking-widest text-fg-subtle border border-border px-1.5 py-0.5 rounded">FROST</span>
            </p>
            <p className="text-fg-muted text-sm leading-relaxed mb-4">
              Full Stack Developer &amp; AI Product Builder. Crafting scalable architectures and high-craft interfaces.
            </p>
            <div className="space-y-1 text-xs text-fg-subtle">
              <p className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Open to Opportunities</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-fg-subtle" />
                <span>Faridabad, Haryana, India · Remote &amp; On-site</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="text-fg-subtle text-xs uppercase tracking-[0.2em] mb-4 font-mono">
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

          {/* Column 3: Direct Contact Details */}
          <div>
            <p className="text-fg-subtle text-xs uppercase tracking-[0.2em] mb-4 font-mono">
              Contact &amp; Connect
            </p>
            <div className="flex flex-col gap-3.5 text-sm">
              {/* Email with copy */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-border bg-bg-elevated/40">
                <a
                  href="mailto:shivamu0900@gmail.com"
                  className="text-fg font-medium hover:text-fg-muted transition-colors text-xs sm:text-sm break-all flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-fg-subtle shrink-0" />
                  <span>shivamu0900@gmail.com</span>
                </a>
                <button
                  onClick={() => copyToClipboard('shivamu0900@gmail.com', 'email')}
                  title="Copy email address"
                  className="text-xs px-2 py-1 rounded border border-border bg-bg text-fg-muted hover:text-fg transition-colors shrink-0 flex items-center gap-1"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-accent" />
                      <span className="text-[10px] text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone with copy & call */}
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl border border-border bg-bg-elevated/40">
                <a
                  href="tel:+917210282783"
                  className="text-fg font-medium hover:text-fg-muted transition-colors text-xs sm:text-sm flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-fg-subtle shrink-0" />
                  <span>+91 7210282783</span>
                </a>
                <div className="flex items-center gap-1">
                  <a
                    href="https://wa.me/917210282783?text=Hi%20Shivam,%20I%20saw%20your%20portfolio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Chat on WhatsApp"
                    className="text-xs px-2 py-1 rounded border border-border bg-bg text-fg-muted hover:text-fg transition-colors flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3 text-accent" />
                    <span className="text-[10px]">Chat</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard('+917210282783', 'phone')}
                    title="Copy phone number"
                    className="text-xs px-2 py-1 rounded border border-border bg-bg text-fg-muted hover:text-fg transition-colors flex items-center gap-1"
                  >
                    {copiedItem === 'phone' ? (
                      <Check className="w-3 h-3 text-accent" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/shivam-kumar-090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#0077b5]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <span className="text-fg-subtle">·</span>

                <a
                  href="https://github.com/Shivam-090"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <span className="text-fg-subtle">·</span>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-fg-muted hover:text-fg transition-colors"
                >
                  <Download className="w-3 h-3" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-fg-subtle text-xs">
            © {currentYear} Shivam. All rights reserved.
          </p>
          <p className="text-fg-subtle text-xs">
            Designed &amp; built by hand · Faridabad, Haryana, India
          </p>
        </div>
      </div>
    </footer>
  );
}
