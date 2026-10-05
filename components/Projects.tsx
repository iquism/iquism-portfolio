import { PROJECTS } from "../data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-ink-900">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-[0.25em] text-xs uppercase mb-4">Selected Work</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            Projects I&apos;m <span className="text-gold-400">proud</span> of.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl">
            Real, live websites — click through and explore them yourself.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group bg-ink-850 border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold-500/10 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={p.image}
                    alt={`${p.title} website preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink-950/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">{p.tagline}</p>
                  <h3 className="font-display font-bold text-xl text-white mt-2">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-3 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 font-semibold text-sm bg-white/5 hover:bg-gold-500 border border-white/10 hover:border-gold-500 text-white hover:text-ink-950 px-5 py-3 rounded-full transition-all"
                  >
                    View Live Site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
