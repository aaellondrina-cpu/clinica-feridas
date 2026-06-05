import Link from "next/link";
import { SITE, LEGISLACAO, buildMetadata, whatsappHref, img } from "@/lib/metadata";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Sobre",
  description: `Conheça a ${SITE.nome}: missão, equipe e compromisso com a segurança do paciente no tratamento de feridas crônicas.`,
  path: "/sobre/",
  imageLabel: "Sobre a Clínica",
});

const valores = [
  { icone: "🤝", titulo: "Cuidado humanizado", desc: "Cada paciente é acolhido com escuta, respeito e atenção à sua história." },
  { icone: "🔬", titulo: "Baseado em evidências", desc: "Protocolos atualizados e curativos avançados, com técnica e segurança." },
  { icone: "📋", titulo: "Acompanhamento contínuo", desc: "Reavaliação periódica até a cicatrização e prevenção de recidivas." },
];

export default function SobrePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="container-base py-16 sm:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Sobre nós</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">Especialistas em feridas crônicas, dedicados à sua recuperação</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">{SITE.descricao}</p>
          </Reveal>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="section">
        <div className="container-base grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-sm font-bold uppercase tracking-wide text-primary">Nossa missão</span>
              <h2 className="h-section mt-2">Devolver qualidade de vida com cuidado especializado</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Tratamos feridas que exigem atenção contínua — pés diabéticos, úlceras venosas e arteriais e feridas cirúrgicas —
                unindo técnica, tecnologia em curativos e, acima de tudo, um cuidado que enxerga a pessoa por inteiro.
              </p>
              <Link href="/contato/" className="btn-primary mt-6">Agendar avaliação</Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-100">
              <img src={img(640, 480, "Equipe de Enfermagem", "00AA66")} alt="Equipe da clínica" width={640} height={480} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALORES */}
      <section className="section bg-neutro-claro">
        <div className="container-base">
          <Reveal><h2 className="h-section text-center">Nossos valores</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {valores.map((v, i) => (
              <Reveal key={v.titulo} delay={i * 0.08}>
                <div className="card h-full p-7 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light text-3xl" aria-hidden>{v.icone}</div>
                  <h3 className="mt-4 text-xl font-bold text-neutro-escuro">{v.titulo}</h3>
                  <p className="mt-2 text-base text-slate-600">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENCIAIS / NORMAS */}
      <section className="section">
        <div className="container-base max-w-4xl">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wide text-primary">Credenciais</span>
            <h2 className="h-section mt-2">Compromisso com normas e segurança do paciente</h2>
            <p className="mt-3 text-base text-slate-600">Responsável técnica: {SITE.responsavel}.</p>
          </Reveal>
          <div className="mt-6 space-y-3">
            {LEGISLACAO.map((n) => (
              <div key={n.sigla} className="card flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
                <span className="shrink-0 rounded-md bg-primary-light px-3 py-1 text-sm font-bold text-primary">{n.sigla}</span>
                <span className="text-sm text-slate-600"><strong className="text-neutro-escuro">{n.nome}.</strong> {n.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-secondary">💬 Falar com a equipe</a>
          </div>
        </div>
      </section>
    </>
  );
}
