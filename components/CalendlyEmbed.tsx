"use client";

// Agendamento via Calendly — responsivo.
//
// Desktop (>= sm): calendário EMBUTIDO (initInlineWidget — init explícito é mais
//   confiável que o auto-scan por classe).
// Mobile (< sm): o widget inline do Calendly renderiza EM BRANCO em vários
//   celulares; então no mobile mostramos um BOTÃO grande que abre a agenda em
//   tela cheia (calendly.com), que funciona perfeitamente no telefone.
//
// A Liliana configura os dias/horas livres no app do Calendly; o cliente vê os
// horários vagos e reserva.
import { useEffect, useRef } from "react";

export default function CalendlyEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const fullUrl = `${url}?hide_gdpr_banner=1&primary_color=b85c24`;

  useEffect(() => {
    const src = "https://assets.calendly.com/assets/external/widget.js";

    function init() {
      const C = (window as any).Calendly;
      if (C && ref.current) {
        ref.current.innerHTML = "";
        C.initInlineWidget({ url: fullUrl, parentElement: ref.current });
      }
    }

    if ((window as any).Calendly) {
      init();
      return;
    }
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
    const timer = setInterval(() => {
      if ((window as any).Calendly) {
        clearInterval(timer);
        init();
      }
    }, 200);
    const stop = setTimeout(() => clearInterval(timer), 10000);
    return () => {
      clearInterval(timer);
      clearTimeout(stop);
    };
  }, [fullUrl]);

  return (
    <div>
      {/* MOBILE: botão grande que abre a agenda em tela cheia */}
      <div className="sm:hidden">
        <div className="rounded-2xl border border-primary/15 bg-primary-light/60 p-6 text-center shadow-sm">
          <p className="text-base font-semibold text-primary">Escolha o dia e o horário</p>
          <p className="mt-1 text-sm text-slate-600">
            Toque no botão para ver os horários livres e reservar a sua consulta.
          </p>
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-4 text-lg font-bold text-white shadow transition hover:bg-secondary-dark"
          >
            📅 Ver horários e agendar
          </a>
        </div>
      </div>

      {/* DESKTOP: calendário embutido + link de segurança */}
      <div className="hidden sm:block space-y-3">
        <div
          ref={ref}
          data-testid="calendly"
          className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm h-[760px]"
          style={{ minWidth: 320 }}
        />
        <p className="text-center text-sm text-slate-500">
          Não está vendo o calendário?{" "}
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener"
            className="font-semibold text-secondary underline underline-offset-2"
          >
            Clique aqui para abrir a agenda
          </a>
        </p>
      </div>
    </div>
  );
}
