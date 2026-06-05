import Link from "next/link";
import { SITE, whatsappHref, img } from "@/lib/metadata";
import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#003366]">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5" aria-hidden />
      <div className="absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-secondary/20" aria-hidden />

      <div className="container-base relative z-10 grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/25">
              <span aria-hidden>🤍</span> Cuidado humanizado e baseado em evidências
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tratamento especializado de <span className="text-destaque">feridas crônicas</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Pés diabéticos, úlceras venosas e arteriais, deiscências cirúrgicas. Avaliação cuidadosa,
              plano individualizado e acompanhamento até a cicatrização — com segurança e acolhimento.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-secondary" data-testid="hero-whatsapp">
                💬 Falar no WhatsApp
              </a>
              <Link href="/contato/" className="btn bg-white text-primary hover:bg-neutro-claro">
                Agendar avaliação
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/70">{SITE.telefone} · {SITE.cidade}/{SITE.estado}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl ring-4 ring-white/20 shadow-2xl">
              {/* Placeholder on-brand — troque por foto real (mão segurando o pé, cuidado compassivo) */}
              <img
                src={img(720, 560, "Cuidado Compassivo", "00AA66")}
                alt="Profissional de saúde cuidando do paciente"
                width={720}
                height={560}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
