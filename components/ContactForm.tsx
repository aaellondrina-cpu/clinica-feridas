"use client";

import { useState } from "react";
import { SITE, whatsappHref } from "@/lib/metadata";

// Site estático (export) — sem backend. O formulário compõe a mensagem e abre o
// WhatsApp. Para receber por e-mail, troque por um serviço (Formspree, etc.).
export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome || "(não informado)"}.\nTelefone: ${telefone || "(não informado)"}.\n${mensagem || "Gostaria de agendar uma avaliação."}`;
    window.open(whatsappHref(texto), "_blank", "noopener");
  }

  return (
    <form onSubmit={enviar} className="card flex flex-col gap-4 p-6" data-testid="contact-form">
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm font-semibold text-neutro-escuro">Nome</label>
        <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-primary" />
      </div>
      <div>
        <label htmlFor="tel" className="mb-1 block text-sm font-semibold text-neutro-escuro">Telefone / WhatsApp</label>
        <input id="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} inputMode="tel" placeholder="(00) 00000-0000" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-primary" />
      </div>
      <div>
        <label htmlFor="msg" className="mb-1 block text-sm font-semibold text-neutro-escuro">Mensagem</label>
        <textarea id="msg" value={mensagem} onChange={(e) => setMensagem(e.target.value)} rows={4} placeholder="Como podemos ajudar?" className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base outline-none focus:border-primary" />
      </div>
      <button type="submit" className="btn-primary w-full" data-testid="btn-enviar">💬 Enviar pelo WhatsApp</button>
      <p className="text-center text-sm text-slate-500">ou ligue: <a href={`tel:+55${SITE.whatsapp.slice(2)}`} className="font-semibold text-primary">{SITE.telefone}</a></p>
    </form>
  );
}
