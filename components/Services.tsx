import { SERVICES } from "../data/content";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-[0.25em] text-xs uppercase mb-4">Services</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            What I can <span className="text-gold-400">build</span> for you.
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <div className="group bg-ink-900 border border-white/5 rounded-2xl p-7 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/5 h-full">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform inline-block">
                  {s.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-white">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mt-3">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
