"use client";

// Seletor de agendamento (site estático, sem backend): o paciente escolhe
// serviço/unidade/data/período e o pedido é enviado pelo WhatsApp já preenchido,
// pra equipe CONFIRMAR o horário. Separado do botão de conversa direta.
import { useState } from "react";
import { SITE, SERVICOS, whatsappHref } from "@/lib/metadata";

const PERIODOS = ["Manhã (08h–12h)", "Tarde (13h–18h)", "Tanto faz"];

export default function AgendamentoForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState(SERVICOS[0].titulo);
  const [unidade, setUnidade] = useState(SITE.unidades[0].cidade);
  const [data, setData] = useState("");
  const [periodo, setPeriodo] = useState(PERIODOS[0]);

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const dataFmt = data ? data.split("-").reverse().join("/") : "(a combinar)";
    const texto =
      `Olá! Quero AGENDAR uma consulta na CICATRIX.\n\n` +
      `• Nome: ${nome || "(não informado)"}\n` +
      `• Telefone: ${telefone || "(não informado)"}\n` +
      `• Serviço: ${servico}\n` +
      `• Unidade: ${unidade}\n` +
      `• Data preferida: ${dataFmt}\n` +
      `• Período: ${periodo}\n\n` +
      `Podem confirmar o horário, por favor?`;
    window.open(whatsappHref(texto), "_blank", "noopener");
  }

  const inputCls = "w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-base outline-none focus:border-primary";

  return (
    <form onSubmit={enviar} className="card flex flex-col gap-4 p-6" data-testid="form-agendamento">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ag-nome" className="mb-1 block text-sm font-semibold text-neutro-escuro">Nome</label>
          <input id="ag-nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" className={inputCls} />
        </div>
        <div>
          <label htmlFor="ag-tel" className="mb-1 block text-sm font-semibold text-neutro-escuro">Telefone / WhatsApp</label>
          <input id="ag-tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} inputMode="tel" placeholder="(00) 00000-0000" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="ag-servico" className="mb-1 block text-sm font-semibold text-neutro-escuro">Tipo de atendimento</label>
        <select id="ag-servico" value={servico} onChange={(e) => setServico(e.target.value)} className={inputCls}>
          {SERVICOS.map((s) => (<option key={s.slug} value={s.titulo}>{s.titulo}</option>))}
        </select>
      </div>

      <div>
        <label htmlFor="ag-unidade" className="mb-1 block text-sm font-semibold text-neutro-escuro">Unidade</label>
        <select id="ag-unidade" value={unidade} onChange={(e) => setUnidade(e.target.value)} className={inputCls}>
          {SITE.unidades.map((u) => (<option key={u.cidade} value={u.cidade}>{u.cidade}</option>))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ag-data" className="mb-1 block text-sm font-semibold text-neutro-escuro">Data preferida</label>
          <input id="ag-data" type="date" value={data} onChange={(e) => setData(e.target.value)} className={inputCls} />
        </div>
        <div>
          <label htmlFor="ag-periodo" className="mb-1 block text-sm font-semibold text-neutro-escuro">Período</label>
          <select id="ag-periodo" value={periodo} onChange={(e) => setPeriodo(e.target.value)} className={inputCls}>
            {PERIODOS.map((p) => (<option key={p} value={p}>{p}</option>))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn-secondary w-full" data-testid="btn-enviar-agendamento">📅 Enviar pedido de agendamento</button>
      <p className="text-center text-sm text-slate-500">Você envia a preferência e a equipe <strong>confirma o horário</strong> pelo WhatsApp.</p>
    </form>
  );
}
