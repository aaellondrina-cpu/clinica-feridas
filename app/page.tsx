import Link from "next/link";
import { SERVICOS, SERVICOS_HOME, LEGISLACAO, whatsappHref } from "@/lib/metadata";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";

const tratamentos = SERVICOS.filter((s) => s.tipo === "tratamento");

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 3 SERVIÇOS PRINCIPAIS */}
      <section className="section">
        <div className="container-base">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wide text-primary">Nossas especialidades</span>
              <h2 className="h-section mt-2">Tratamos os principais tipos de feridas crônicas</h2>
              <p className="mt-4 text-lg text-slate-600">Cada ferida é única. Avaliamos a causa e construímos um plano de cuidado individualizado.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICOS_HOME.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard servico={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/descensos-cirurgicos/" className="btn-outline">Ver também feridas cirúrgicas →</Link>
          </div>
        </div>
      </section>

      {/* PREVENTIVO x CURATIVO */}
      <section className="section bg-neutro-claro">
        <div className="container-base">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wide text-secondary">Como podemos cuidar</span>
              <h2 className="h-section mt-2">Tratamento preventivo e curativo</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {tratamentos.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link href={`/${s.slug}/`} className="card group block h-full p-7 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl" style={{ backgroundColor: `#${s.cor}1A` }} aria-hidden>{s.icone}</span>
                  <h3 className="mt-4 text-2xl font-bold text-neutro-escuro">{s.titulo}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{s.descricao}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-semibold text-primary group-hover:gap-2 transition-all">Saiba mais <span aria-hidden>→</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIANÇA / NORMAS */}
      <section className="section">
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
          <div className="rounded-3xl bg-gradient-to-br from-secondary to-secondary-dark px-6 py-14 text-center text-white sm:px-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Sua ferida merece cuidado especializado</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">Fale com a nossa equipe e agende uma avaliação. Estamos aqui para ajudar na sua recuperação.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappHref()} target="_blank" rel="noopener" className="btn bg-white text-secondary-dark hover:bg-neutro-claro">💬 Falar no WhatsApp</a>
              <Link href="/contato/" className="btn border-2 border-white text-white hover:bg-white/10">Agendar avaliação</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
