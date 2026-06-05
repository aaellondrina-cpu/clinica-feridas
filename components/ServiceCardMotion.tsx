"use client";

// Card de serviço PREMIUM:
// - entrada (fade-in escalonado) via CSS -> SEMPRE termina visível (não depende de JS,
//   evitando o bug de opacity:0 que escondia os cards).
// - hover (scale 1.02 + sombra) via Framer Motion.
// - glassmorphism com fundo alternado azul / verde.
import Link from "next/link";
import { motion } from "framer-motion";
import type { Servico } from "@/lib/metadata";

export default function ServiceCardMotion({ servico, index }: { servico: Servico; index: number }) {
  return (
    <div className="animate-fade-up h-full" style={{ animationDelay: `${Math.min(index * 0.08, 0.5)}s` }}>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Link
          href={`/${servico.slug}/`}
          className="glass group flex h-full flex-col gap-3 rounded-2xl border border-primary/20 bg-primary-light p-6 transition-shadow hover:shadow-xl"
          data-testid={`card-home-${servico.slug}`}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-2xl shadow-sm" aria-hidden>
            {servico.icone}
          </span>
          <h3 className="font-display text-xl font-bold text-neutro-escuro">{servico.titulo}</h3>
          <p className="text-base leading-relaxed text-slate-600">{servico.subtitulo}</p>
          <span className="mt-auto inline-flex items-center gap-1 font-semibold text-primary group-hover:gap-2 transition-all">
            Saiba mais <span aria-hidden>→</span>
          </span>
        </Link>
      </motion.div>
    </div>
  );
}
