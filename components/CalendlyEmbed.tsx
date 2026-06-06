"use client";

// Calendário de agendamento (Calendly) embutido — a Liliana configura os dias/horas
// livres no app do Calendly e o cliente vê os horários vagos e reserva aqui.
//
// Por que init explícito (initInlineWidget) em vez do auto-scan por classe?
// O auto-scan do widget.js às vezes cria o iframe mas ele renderiza EM BRANCO no
// celular. Inicializando manualmente no useEffect (depois que window.Calendly existe)
// o embed renderiza de forma confiável em mobile. Além disso há um link de fallback
// que SEMPRE abre a agenda em tela cheia, caso o iframe falhe em qualquer aparelho.
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

    // Aguarda o widget.js carregar e então inicializa.
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
    <div className="space-y-3">
      <div
        ref={ref}
        data-testid="calendly"
        className="overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm h-[1050px] sm:h-[760px]"
        style={{ minWidth: 280 }}
      />
      <p className="text-center text-sm text-slate-500">
        Não está vendo o calendário?{" "}
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener"
          className="font-semibold text-secondary underline underline-offset-2"
        >
          Toque aqui para abrir a agenda
        </a>
      </p>
    </div>
  );
}
