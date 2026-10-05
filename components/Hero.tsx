import { STATS } from "../data/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-abstract.webp"
          alt=""
          className="w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-ink-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0b_75%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-16 w-full">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-[0.25em] text-xs sm:text-sm uppercase mb-5">
            Hi, I&apos;m iquism
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white max-w-3xl">
            Web Developer
            <span className="block mt-3 text-2xl sm:text-3xl lg:text-4xl font-medium text-zinc-300">
              I build fast, beautiful websites for businesses.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
            Modern, mobile-responsive websites with Next.js and React — designed to
            impress your visitors and grow your business.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="font-semibold bg-gold-500 hover:bg-gold-400 text-ink-950 px-8 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="font-semibold border border-gold-500/50 text-gold-300 hover:bg-gold-500/10 px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="border-l-2 border-gold-500/50 pl-4"
              >
                <p className="font-display font-bold text-2xl sm:text-3xl text-white">{s.value}</p>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-gold-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
