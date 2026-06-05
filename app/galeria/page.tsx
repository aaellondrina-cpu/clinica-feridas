import Link from "next/link";
import { buildMetadata, whatsappHref, img } from "@/lib/metadata";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Galeria de Resultados",
  description: "Evolução do tratamento de feridas crônicas — antes, durante e depois. Resultados reais com cuidado especializado.",
  path: "/galeria/",
  imageLabel: "Galeria de Resultados",
});

const estagios = [
  {
    fase: "Antes",
    titulo: "Avaliação inicial",
    desc: "Registro da ferida no momento da primeira avaliação, com classificação do tipo de lesão e definição do plano de cuidado.",
    cor: "8B7355",
  },
  {
    fase: "Depois",
    titulo: "Em tratamento",
    desc: "Evolução ao longo do acompanhamento, com curativos avançados, controle de exsudato e preparo do leito da ferida.",
    cor: "0052CC",
  },
  {
    fase: "Final",
    titulo: "Cicatrizado",
    desc: "Resultado ao final do protocolo: ferida cicatrizada, com orientação de prevenção para evitar recidivas.",
    cor: "00A86B",
  },
];

export default function GaleriaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="container-base py-16 sm:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Galeria</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">Resultados que falam por si</h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Acompanhe a evolução de um tratamento de ferida crônica — da avaliação inicial até a cicatrização.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-base">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wide text-primary">Antes · Depois · Final</span>
              <h2 className="h-section mt-2">A jornada da cicatrização</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {estagios.map((e, i) => (
              <Reveal key={e.fase} delay={i * 0.1}>
                <div className="card h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={img(600, 450, e.fase, e.cor)}
                      alt={`${e.fase} — ${e.titulo}`}
                      width={600}
                      height={450}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                    <span
                      className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow"
                      style={{ backgroundColor: `#${e.cor}` }}
                    >
                      {e.fase}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutro-escuro">{e.titulo}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Aviso ético / LGPD */}
          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-slate-500">
              Imagens ilustrativas (placeholder). Fotos reais de pacientes são publicadas apenas com{" "}
              <strong>consentimento livre e esclarecido</strong>, em conformidade com a LGPD (Lei nº 13.709/2018) e o sigilo profissional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutro-claro">
        <div className="container-base">
          <div className="rounded-3xl bg-gradient-to-br from-secondary to-secondary-dark px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Quer um resultado assim para a sua ferida?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/90">Agende uma avaliação e comece o seu tratamento com acompanhamento especializado.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={whatsappHref("Olá! Vi a galeria de resultados e gostaria de agendar uma avaliação.")} target="_blank" rel="noopener" className="btn bg-white text-secondary-dark hover:bg-neutro-claro">💬 Agendar pelo WhatsApp</a>
              <Link href="/contato/" className="btn border-2 border-white text-white hover:bg-white/10">Ver formas de contato</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
