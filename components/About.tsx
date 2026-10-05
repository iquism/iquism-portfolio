import { SKILLS } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <p className="text-gold-400 font-medium tracking-[0.25em] text-xs uppercase mb-4">About Me</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white max-w-2xl leading-tight">
            A developer who cares about <span className="text-gold-400">how your business looks</span> online.
          </h2>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14">
          <Reveal delay={100}>
            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">iquism</span>, a freelance
                web developer from Pakistan. I build modern business websites with{" "}
                <span className="text-gold-300">Next.js, React and Tailwind CSS</span> —
                fast, mobile-responsive, and designed to make a strong first impression.
              </p>
              <p>
                Every project I ship is built with real content, clean code and SEO-ready
                pages — no templates, no placeholders. My goal is simple: a website
                you&apos;re proud to share with your customers.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <img src="/profile.jpg" alt="iquism" className="w-14 h-14 rounded-full object-cover border border-gold-500/40" />

                <div>
                  <p className="text-white font-medium">iquism</p>
                  <p className="text-sm text-zinc-500">Freelance Web Developer</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-ink-900 border border-white/5 rounded-2xl p-7 sm:p-8">
              <h3 className="font-display font-semibold text-lg text-white mb-5">
                Skills & Tools
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:border-gold-500/50 hover:text-gold-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
