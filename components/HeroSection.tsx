import Link from "next/link";
import { SITE, whatsappHref } from "@/lib/metadata";
import Reveal from "./Reveal";
import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#8A6F5C] to-marrom">
      {/* profundidade sutil — clean, sem poluição */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-white/5 blur-3xl" aria-hidden />

      <div className="container-base relative z-10 grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25">
              <span aria-hidden>🤍</span> Cuidado humanizado e baseado em evidências
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Especialista em <span className="text-secondary">feridas crônicas</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              CICATRIX — Clínica de Tratamento de Feridas. Pés diabéticos, úlceras venosas e arteriais,
              deiscências cirúrgicas. Avaliação cuidadosa e acompanhamento até a cicatrização.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-secondary" data-testid="hero-whatsapp">💬 Falar no WhatsApp</a>
              <Link href="/contato/" className="btn bg-white text-primary hover:bg-neutro-claro">Agendar avaliação</Link>
            </div>
            <p className="mt-4 text-sm text-white/70">{SITE.telefone} · Adamantina e Osvaldo Cruz/SP</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex justify-center">
            {/* Painel glass com a marca (logo 80px) */}
            <div className="glass w-full max-w-sm rounded-3xl border-white/25 bg-white/10 p-10 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white/90 shadow-lg">
                <Logo size={80} />
              </div>
              <p className="mt-5 font-display text-3xl font-bold text-white">CICATRIX</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-secondary">Tratamento de Feridas</p>
              <p className="mt-4 text-sm text-white/80">{SITE.responsavel}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
