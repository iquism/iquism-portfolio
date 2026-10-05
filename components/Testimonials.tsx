import { TESTIMONIALS } from "../data/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-[0.25em] text-xs uppercase mb-4">Testimonials</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            What clients <span className="text-gold-400">say</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="bg-ink-900 border border-white/5 rounded-2xl p-7 hover:border-gold-500/25 transition-colors h-full flex flex-col">
                <div className="flex gap-1 mb-4" aria-label="5 star rating">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.29 3.96a1 1 0 00.95.69h4.16c.97 0 1.37 1.24.59 1.81l-3.37 2.45a1 1 0 00-.36 1.12l1.28 3.95c.3.93-.75 1.7-1.54 1.13l-3.36-2.44a1 1 0 00-1.18 0l-3.36 2.44c-.78.57-1.84-.2-1.54-1.13l1.29-3.95a1 1 0 00-.37-1.12L2.06 9.39c-.78-.57-.38-1.81.6-1.81h4.15a1 1 0 00.95-.69l1.29-3.96z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-zinc-300 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-white/5">
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs mt-1">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
