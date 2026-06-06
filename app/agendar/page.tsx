import { SITE, buildMetadata, whatsappHref, CALENDLY_URL } from "@/lib/metadata";
import AgendamentoForm from "@/components/AgendamentoForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Agendar Consulta",
  description: `Agende sua consulta na ${SITE.nome} — tratamento de feridas crônicas em Adamantina e Osvaldo Cruz/SP. Veja os horários disponíveis e reserve online.`,
  path: "/agendar/",
  imageLabel: "Agendar Consulta",
});

const passos = CALENDLY_URL
  ? [
      "Escolha um dia com horário livre no calendário abaixo.",
      "Selecione o horário e confirme seus dados.",
      "Pronto! Você recebe a confirmação e um lembrete.",
    ]
  : [
      "Você preenche sua preferência (serviço, unidade, data e período).",
      "Enviamos o pedido pelo WhatsApp já preenchido.",
      "A equipe confirma o melhor horário com você.",
    ];

export default function AgendarPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-marrom via-primary to-primary-dark">
        <div className="container-base py-14 sm:py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Agendamento</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">Agende sua consulta</h1>
            <p className="mt-3 max-w-2xl text-lg text-white/85">
              {CALENDLY_URL
                ? "Veja os dias e horários disponíveis e reserve o seu — rápido e online."
                : "Escolha o tipo de atendimento, a unidade e a sua data preferida. A equipe confirma o horário com você."}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-base">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-wide text-primary">Como funciona</span>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {passos.map((t, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-base font-bold text-white">{i + 1}</span>
                    <span className="text-sm text-slate-600">{t}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Prefere falar agora?{" "}
                <a href={whatsappHref()} target="_blank" rel="noopener" className="font-semibold text-secondary">Fale no WhatsApp</a>{" "}
                ou ligue <a href={`tel:+55${SITE.whatsapp.slice(2)}`} className="font-semibold text-secondary">{SITE.telefone}</a>.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl">
            {CALENDLY_URL ? <CalendlyEmbed url={CALENDLY_URL} /> : <AgendamentoForm />}
          </div>
        </div>
      </section>
    </>
  );
}
