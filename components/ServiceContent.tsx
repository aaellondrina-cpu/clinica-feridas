import Link from "next/link";
import type { Servico } from "@/lib/metadata";
import { normasDoServico, whatsappHref, img } from "@/lib/metadata";
import Reveal from "./Reveal";

// Corpo compartilhado de TODAS as páginas de serviço (condições e tratamentos).
export default function ServiceContent({ servico }: { servico: Servico }) {
  const normas = normasDoServico(servico);
  return (
    <article>
      {/* HERO DA PÁGINA */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, #${servico.cor} 0%, #${servico.cor}cc 50%, #003366 100%)` }}>
        <div className="container-base grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <div>
              <nav className="mb-4 text-sm text-white/70">
                <Link href="/" className="hover:text-white">Início</Link> <span aria-hidden>/</span> {servico.titulo}
              </nav>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl ring-1 ring-white/25" aria-hidden>{servico.icone}</div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">{servico.titulo}</h1>
              <p className="mt-3 text-lg text-white/85">{servico.subtitulo}</p>
              <a href={whatsappHref(`Olá! Gostaria de informações sobre o tratamento de ${servico.titulo}.`)} target="_blank" rel="noopener" className="btn bg-white text-neutro-escuro hover:bg-neutro-claro mt-6">
                💬 Falar com a equipe
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl ring-4 ring-white/20 shadow-2xl">
              <img src={img(640, 480, servico.imagemLabel, servico.cor)} alt={servico.titulo} width={640} height={480} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className="section">
        <div className="container-base max-w-3xl">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wide text-primary">O que é</span>
            <h2 className="h-section mt-2">Sobre o tratamento</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{servico.descricao}</p>
          </Reveal>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="section bg-neutro-claro">
        <div className="container-base max-w-4xl">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wide text-secondary">Como cuidamos</span>
            <h2 className="h-section mt-2">Metodologia</h2>
          </Reveal>
          <ol className="mt-8 space-y-4">
            {servico.metodologia.map((passo, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <li className="card flex items-start gap-4 p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white font-bold">{i + 1}</span>
                  <span className="pt-1.5 text-base leading-relaxed text-slate-700">{passo}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* BENEFÍCIOS (tratamentos) */}
      {servico.beneficios && servico.beneficios.length > 0 && (
        <section className="section">
          <div className="container-base max-w-4xl">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-wide text-secondary">Por que escolher</span>
              <h2 className="h-section mt-2">Benefícios</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {servico.beneficios.map((b, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="card flex items-start gap-3 p-5">
                    <span className="text-secondary text-xl" aria-hidden>✓</span>
                    <span className="text-base leading-relaxed text-slate-700">{b}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LEGISLAÇÃO */}
      <section className="section bg-neutro-claro">
        <div className="container-base max-w-4xl">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wide text-primary">Conformidade</span>
            <h2 className="h-section mt-2">Base legal e normativa</h2>
            <p className="mt-3 text-base text-slate-600">Atuamos em conformidade com as normas de segurança do paciente e de assistência de enfermagem.</p>
          </Reveal>
          <div className="mt-6 space-y-3">
            {normas.map((n) => (
              <div key={n.sigla} className="card flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
                <span className="shrink-0 rounded-md bg-primary-light px-3 py-1 text-sm font-bold text-primary">{n.sigla}</span>
                <span className="text-sm text-slate-600"><strong className="text-neutro-escuro">{n.nome}.</strong> {n.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-base">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Vamos cuidar da sua ferida juntos</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">Agende uma avaliação. Nossa equipe vai montar um plano de cuidado individualizado para você.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappHref(`Olá! Gostaria de agendar uma avaliação para ${servico.titulo}.`)} target="_blank" rel="noopener" className="btn-secondary">💬 Agendar pelo WhatsApp</a>
              <Link href="/contato/" className="btn bg-white text-primary hover:bg-neutro-claro">Ver formas de contato</Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
