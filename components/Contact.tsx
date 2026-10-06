"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) e.message = "Tell me a little more (min 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/iquiism@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New project inquiry from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setErrors({ message: "Couldn't send — please email me directly at iquiism@gmail.com." });
    } finally {
      setSending(false);
    }
  };

  const inputCls = (bad?: string) =>
    `w-full bg-ink-950 border rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 outline-none transition-colors focus:border-gold-500/60 ${
      bad ? "border-red-500/60" : "border-white/10"
    }`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ink-900 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 relative">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-[0.25em] text-xs uppercase mb-4">Contact</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            Let&apos;s build something <span className="text-gold-400">great</span> together.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl">
            Tell me about your project — I usually reply within 24 hours.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-10">
          <Reveal delay={100} className="lg:col-span-3">
            <div className="bg-ink-950 border border-white/5 rounded-2xl p-7 sm:p-9">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Thanks, {form.name.split(" ")[0]}!
                  </h3>
                  <p className="text-zinc-400 mt-3 max-w-sm mx-auto">
                    Your message has been received. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-zinc-300 mb-2">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Ahmed"
                      className={inputCls(errors.name)}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-zinc-300 mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={inputCls(errors.email)}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-zinc-300 mb-2">Project Details</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="I need a website for my business..."
                      className={`${inputCls(errors.message)} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full font-semibold bg-gold-500 hover:bg-gold-400 text-ink-950 px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-gold-500/25 disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href="https://github.com/iquism"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-ink-950 border border-white/5 rounded-2xl p-5 hover:border-gold-500/30 transition-colors group"
              >
                <span className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold-500/15 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-white font-medium text-sm">GitHub</span>
                  <span className="block text-zinc-500 text-sm">github.com/iquism</span>
                </span>
              </a>

              <a
                href="https://www.fiverr.com/iquism"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-ink-950 border border-white/5 rounded-2xl p-5 hover:border-gold-500/30 transition-colors group"
              >
                <span className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold-500/15 transition-colors">
                  <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.5 13.5h-2.6l-1.2-3.4h-3.4l-1.2 3.4H5.5l4.1-10h2.8l4.1 10zm-6.4-5.1l-.9 2.6h3.6l-.9-2.6h-1.8z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-white font-medium text-sm">Fiverr</span>
                  <span className="block text-zinc-500 text-sm">fiverr.com/iquism</span>
                </span>
              </a>

              <a
                href="mailto:iquiism@gmail.com"
                className="flex items-center gap-4 bg-ink-950 border border-white/5 rounded-2xl p-5 hover:border-gold-500/30 transition-colors group"
              >
                <span className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gold-500/15 transition-colors">
                  <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-white font-medium text-sm">Email</span>
                  <span className="block text-zinc-500 text-sm">iquiism@gmail.com</span>
                </span>
              </a>

              <div className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-5">
                <p className="text-gold-300 text-sm font-medium">Currently available for new projects</p>
                <p className="text-zinc-500 text-sm mt-1">Let&apos;s discuss your idea — no obligation.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
