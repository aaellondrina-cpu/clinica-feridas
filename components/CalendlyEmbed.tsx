"use client";

// Calendário de agendamento (Calendly) embutido — a Liliana configura os dias/horas
// livres no app do Calendly e o cliente vê os horários vagos e reserva aqui (estilo hotel).
// Liga/desliga pelo CALENDLY_URL em lib/metadata.ts.
import { useEffect } from "react";

export default function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const src = "https://assets.calendly.com/assets/external/widget.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      className="calendly-inline-widget overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-sm"
      data-url={`${url}?hide_gdpr_banner=1&primary_color=b85c24`}
      style={{ minWidth: 320, height: 720 }}
      data-testid="calendly"
    />
  );
}
