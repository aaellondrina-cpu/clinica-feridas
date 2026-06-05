import { SITE, buildMetadata, whatsappHref } from "@/lib/metadata";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata = buildMetadata({
  title: "Contato",
  description: `Fale com a ${SITE.nome}: WhatsApp, telefone e formulário. Agende sua avaliação para tratamento de feridas crônicas.`,
  path: "/contato/",
  imageLabel: "Contato",
});

export default function ContatoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark">
        <div className="container-base py-14 sm:py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">Contato</p>
            <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">Vamos conversar sobre o seu cuidado</h1>
            <p className="mt-3 max-w-2xl text-lg text-white/85">Responda algumas informações e fale com a nossa equipe pelo WhatsApp, ou ligue diretamente.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-base grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col gap-5">
              <h2 className="h-section">Fale com a gente</h2>
              <a href={whatsappHref()} target="_blank" rel="noopener" className="card flex items-center gap-4 p-5 hover:border-secondary">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-2xl" aria-hidden>💬</span>
                <span><strong className="block text-neutro-escuro">WhatsApp</strong><span className="text-slate-600">Atendimento rápido</span></span>
              </a>
              <a href={`tel:+55${SITE.whatsapp.slice(2)}`} className="card flex items-center gap-4 p-5 hover:border-primary">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-2xl" aria-hidden>📞</span>
                <span><strong className="block text-neutro-escuro">Telefone</strong><span className="text-slate-600">{SITE.telefone}</span></span>
              </a>
              <a href={`mailto:${SITE.email}`} className="card flex items-center gap-4 p-5 hover:border-primary">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-2xl" aria-hidden>✉️</span>
                <span><strong className="block text-neutro-escuro">E-mail</strong><span className="text-slate-600">{SITE.email}</span></span>
              </a>
              {SITE.unidades.map((u) => (
                <div key={u.cidade} className="card flex items-start gap-4 p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutro-claro text-2xl" aria-hidden>📍</span>
                  <span>
                    <strong className="block text-neutro-escuro">Unidade {u.cidade}</strong>
                    <span className="block text-slate-600">{u.endereco}</span>
                    <a href={`tel:+55${SITE.whatsapp.slice(2)}`} className="text-sm font-semibold text-primary">📞 {u.telefone}</a>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="h-section mb-5">Envie uma mensagem</h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
