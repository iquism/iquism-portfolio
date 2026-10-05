"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-950/90 backdrop-blur-md border-b border-gold-500/15 shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <img src="/profile.jpg" alt="iquism" className="w-9 h-9 rounded-full object-cover border border-gold-500/40" />

          <span className="font-display font-bold text-lg tracking-wide text-white">
            iquism
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 hover:text-gold-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold bg-gold-500 hover:bg-gold-400 text-ink-950 px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-gold-500/25"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-300 p-2"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-md border-b border-gold-500/15 px-5 py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-gold-400 py-2.5 border-b border-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 text-center font-semibold bg-gold-500 hover:bg-gold-400 text-ink-950 px-5 py-3 rounded-full transition-colors"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
