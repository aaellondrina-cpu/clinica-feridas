import Link from "next/link";
import type { Servico } from "@/lib/metadata";

export default function ServiceCard({ servico }: { servico: Servico }) {
  return (
    <Link
      href={`/${servico.slug}/`}
      className="card group flex flex-col gap-3 p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary-light"
      data-testid={`card-servico-${servico.slug}`}
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl"
        style={{ backgroundColor: `#${servico.cor}1A` }}
        aria-hidden
      >
        {servico.icone}
      </span>
      <h3 className="text-xl font-bold text-neutro-escuro">{servico.titulo}</h3>
      <p className="text-base text-slate-600 leading-relaxed">{servico.subtitulo}</p>
      <span className="mt-auto inline-flex items-center gap-1 text-base font-semibold text-primary group-hover:gap-2 transition-all">
        Saiba mais <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
