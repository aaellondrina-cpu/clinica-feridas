import { SITE, buildMetadata, whatsappHref } from "@/lib/metadata";
import AgendamentoForm from "@/components/AgendamentoForm";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Agendar Consulta",
  description: `Agende sua consulta na ${SITE.nome} — tratamento de feridas crônicas em Adamantina e Osvaldo Cruz/SP. Escolha serviço, unidade e data; a equipe confirma o horário.`,
  path: "/agendar/",
  imageLabel: "Agendar Consulta",
});

export default function AgendarPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-marrom via-primary to-primary-dark">
        <div className="container-base py-14 sm:py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Agendamento</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">Agende sua consulta</h1>
            <p className="mt-3 max-w-2xl text-lg text-white/85">
              Escolha o tipo de atendimento, a unidade e a sua data preferida. A equipe confirma o horário com você.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-base grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="h-section">Como funciona</h2>
              <ol className="mt-6 space-y-4">
                {[
                  "Você preenche sua preferência (serviço, unidade, data e período).",
                  "Enviamos o pedido pelo WhatsApp já preenchido.",
                  "A equipe confirma o melhor horário com você.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">{i + 1}</span>
                    <span className="pt-1 text-base text-slate-600">{t}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 rounded-2xl bg-primary-light p-5">
                <p className="text-sm text-neutro-escuro">
                  Prefere falar agora?{" "}
                  <a href={whatsappHref()} target="_blank" rel="noopener" className="font-semibold text-secondary">Fale direto no WhatsApp</a>{" "}
                  ou ligue <a href={`tel:+55${SITE.whatsapp.slice(2)}`} className="font-semibold text-secondary">{SITE.telefone}</a>.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="h-section mb-5">Solicitar agendamento</h2>
              <AgendamentoForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
