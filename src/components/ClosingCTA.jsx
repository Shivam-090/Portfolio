import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  MessageCircle,
} from 'lucide-react';

export default function ClosingCTA() {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, itemKey) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedItem(itemKey);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 md:px-10 max-w-6xl mx-auto border-t border-border"
    >
      {/* ── Section Heading & Description ── */}
      <div className="mb-10 text-left max-w-3xl">
        <h2 className="font-display font-bold tracking-tight text-fg mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.15 }}>
          Ready to build something real?
          <span className="block text-fg-muted font-normal text-lg sm:text-2xl mt-1.5">
            Let&rsquo;s start a conversation.
          </span>
        </h2>

        <p className="text-fg-muted text-sm sm:text-base leading-relaxed max-w-2xl">
          I&rsquo;m currently open to full-time engineering roles, freelance contracts, and AI-powered web applications. Whether you have an architecture question, an ambitious MVP, or a high-velocity engineering team looking for a full stack developer — reach out directly through any channel below:
        </p>
      </div>

      {/* ── Main Contact Grid (Compact 2-Column) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Email Box */}
        <div className="p-4 sm:p-5 rounded-xl border border-border bg-bg-elevated/40 hover:border-fg-muted/40 transition-colors flex flex-col justify-between gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center text-fg shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-fg-subtle">
                  Email
                </p>
                <p className="text-base sm:text-lg font-semibold text-fg select-all break-all">
                  shivamu0900@gmail.com
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase text-fg-subtle border border-border px-1.5 py-0.5 rounded shrink-0">
              Primary
            </span>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-border/50">
            <a
              href="mailto:shivamu0900@gmail.com"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-bg bg-fg hover:bg-fg/90 transition-colors"
            >
              <span>Send Email</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => copyToClipboard('shivamu0900@gmail.com', 'email')}
              title="Copy Email"
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-bg hover:border-fg-muted text-fg transition-colors"
            >
              {copiedItem === 'email' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent text-[11px] font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-fg-muted" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Phone / WhatsApp Box */}
        <div className="p-4 sm:p-5 rounded-xl border border-border bg-bg-elevated/40 hover:border-fg-muted/40 transition-colors flex flex-col justify-between gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center text-fg shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-fg-subtle">
                  Phone &amp; WhatsApp
                </p>
                <p className="text-base sm:text-lg font-semibold text-fg select-all">
                  +91 7210282783
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono uppercase text-fg-subtle border border-border px-1.5 py-0.5 rounded shrink-0">
              Voice / Chat
            </span>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-border/50">
            <a
              href="tel:+917210282783"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-bg bg-fg hover:bg-fg/90 transition-colors"
            >
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/917210282783?text=Hi%20Shivam,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-bg hover:border-fg-muted text-fg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-accent" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => copyToClipboard('+917210282783', 'phone')}
              title="Copy Phone"
              className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-bg hover:border-fg-muted text-fg transition-colors"
            >
              {copiedItem === 'phone' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent text-[11px] font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-fg-muted" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Secondary Details: Location, Socials, Resume (Single Row) ── */}
      <div className="p-4 sm:p-5 rounded-xl border border-border bg-bg-elevated/40 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Location & availability */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <div className="w-9 h-9 rounded-lg bg-bg border border-border flex items-center justify-center text-fg shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-fg flex items-center gap-2">
              <span>Faridabad, Haryana, India</span>
              <span className="text-[10px] font-mono text-fg-subtle border border-border px-1.5 py-0.2 rounded">
                IST (UTC+5:30)
              </span>
            </p>
            <p className="text-[11px] text-fg-muted">
              Open to Remote worldwide &amp; On-site opportunities
            </p>
          </div>
        </div>

        {/* Links & Resume */}
        <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 w-full md:w-auto">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shivam-kumar-090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-bg hover:border-fg-muted text-xs font-medium text-fg-muted hover:text-fg transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#0077b5]" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
            </svg>
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Shivam-090"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-bg hover:border-fg-muted text-xs font-medium text-fg-muted hover:text-fg transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          {/* Resume PDF */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-bg bg-fg hover:bg-fg/90 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
