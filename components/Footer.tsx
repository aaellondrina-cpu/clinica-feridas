import Link from "next/link";
import { SITE, SERVICOS, LEGISLACAO, whatsappHref } from "@/lib/metadata";

export default function Footer() {
  return (
    <footer className="mt-10 bg-neutro-escuro text-slate-300">
      <div className="container-base grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-extrabold">L</span>
            <span className="text-lg font-extrabold text-white">{SITE.nomeCurto}<span className="text-secondary">.</span></span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{SITE.slogan}. Cuidado humanizado e baseado em evidências.</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Serviços</h4>
          <ul className="space-y-2 text-sm">
            {SERVICOS.map((s) => (
              <li key={s.slug}><Link href={`/${s.slug}/`} className="hover:text-white">{s.titulo}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Institucional</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/sobre/" className="hover:text-white">Sobre a clínica</Link></li>
            <li><Link href="/contato/" className="hover:text-white">Contato</Link></li>
            <li><Link href="/privacidade/" className="hover:text-white">Política de Privacidade (LGPD)</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Contato</h4>
          <ul className="space-y-2 text-sm">
            {SITE.enderecos.map((e) => (<li key={e}>📍 {e}</li>))}
            <li><a href={`tel:+55${SITE.whatsapp.slice(2)}`} className="hover:text-white">{SITE.telefone}</a></li>
            <li><a href={whatsappHref()} target="_blank" rel="noopener" className="hover:text-white">WhatsApp</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      {/* Legislação / normas */}
      <div className="border-t border-white/10">
        <div className="container-base py-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Conformidade e normas</p>
          <div className="flex flex-wrap gap-2">
            {LEGISLACAO.map((n) => (
              <span key={n.sigla} title={n.nome} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400">
                {n.sigla}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-base flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.nome}. Todos os direitos reservados.</p>
          <p>{SITE.responsavel}</p>
        </div>
      </div>
    </footer>
  );
}
