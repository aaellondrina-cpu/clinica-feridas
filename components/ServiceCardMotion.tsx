"use client";

// Card de serviço com HOVER animado (Framer Motion). VISÍVEL por padrão — a animação
// é só de hover, nunca esconde o conteúdo. Fundo alterna azul claro / verde claro.
import Link from "next/link";
import { motion } from "framer-motion";
import type { Servico } from "@/lib/metadata";

export default function ServiceCardMotion({ servico, index }: { servico: Servico; index: number }) {
  const azul = index % 2 === 0;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        href={`/${servico.slug}/`}
        className={`group flex h-full flex-col gap-3 rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-lg ${
          azul ? "bg-primary-light border-primary/15" : "bg-secondary-light border-secondary/15"
        }`}
        data-testid={`card-home-${servico.slug}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-2xl shadow-sm" aria-hidden>
          {servico.icone}
        </span>
        <h3 className="text-xl font-bold text-neutro-escuro">{servico.titulo}</h3>
        <p className="text-base leading-relaxed text-slate-600">{servico.subtitulo}</p>
        <span className={`mt-auto inline-flex items-center gap-1 font-semibold ${azul ? "text-primary" : "text-secondary-dark"} group-hover:gap-2 transition-all`}>
          Saiba mais <span aria-hidden>→</span>
        </span>
      </Link>
    </motion.div>
  );
}
