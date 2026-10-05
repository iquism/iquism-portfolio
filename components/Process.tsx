import { PROCESS_STEPS } from "../data/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-ink-900">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-[0.25em] text-xs uppercase mb-4">How It Works</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            Simple process, <span className="text-gold-400">no surprises</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 120}>
              <div className="relative bg-ink-950 border border-white/5 rounded-2xl p-7 hover:border-gold-500/30 transition-colors h-full">
                <p className="font-display font-bold text-5xl text-gold-500/20">{s.step}</p>
                <h3 className="font-display font-semibold text-lg text-white mt-3">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mt-2">{s.description}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3.5 w-7 text-gold-500/40">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
