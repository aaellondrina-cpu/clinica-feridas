import Link from "next/link";
import { SERVICOS, LEGISLACAO, whatsappHref } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import ServiceCardMotion from "@/components/ServiceCardMotion";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* BANDA DE CONFIANÇA — após o hero */}
      <section className="border-y border-primary/15 bg-neutro-claro">
        <div className="container-base grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
          {[
            { icone: "🤝", t: "Atendimento humanizado", d: "Cuidado próximo e individualizado" },
            { icone: "🏥", t: "Duas unidades", d: "Adamantina e Osvaldo Cruz/SP" },
            { icone: "✅", t: "Segurança do paciente", d: "Conforme as normas de saúde" },
          ].map((b) => (
            <div key={b.t} className="flex items-center justify-center gap-3 sm:justify-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm" aria-hidden>{b.icone}</span>
              <span>
                <span className="block font-display text-base font-bold text-neutro-escuro">{b.t}</span>
                <span className="block text-sm text-slate-600">{b.d}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS — os 6 cards (glass, visíveis por padrão, hover Framer, fundo alternado) */}
      <section className="section bg-gradient-to-b from-primary-light/50 via-white to-primary-light/40" id="servicos">
        <div className="container-base">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wide text-primary">Nossos serviços</span>
              <h2 className="h-section mt-2">Tratamos os principais tipos de feridas crônicas</h2>
              <p className="mt-4 text-lg text-slate-600">Cada ferida é única. Avaliamos a causa e construímos um plano de cuidado individualizado.</p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICOS.map((s, i) => (
              <ServiceCardMotion key={s.slug} servico={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANÇA / NORMAS */}
      <section className="section bg-neutro-claro">
        <div className="container-base">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wide text-primary">Segurança e qualidade</span>
              <h2 className="h-section mt-2">Cuidado em conformidade com as normas de saúde</h2>
              <p className="mt-4 text-lg text-slate-600">Seguimos os protocolos de segurança do paciente e a sistematização da assistência de enfermagem.</p>
            </div>
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {LEGISLACAO.map((n) => (
              <span key={n.sigla} title={n.nome} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">{n.sigla}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section">
        <div className="container-base">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-14 text-center text-white sm:px-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Sua ferida merece cuidado especializado</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">Fale com a nossa equipe e agende uma avaliação. Estamos aqui para ajudar na sua recuperação.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-secondary">💬 Falar no WhatsApp</a>
              <Link href="/agendar/" className="btn border-2 border-white text-white hover:bg-white/10">📅 Agendar consulta</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
