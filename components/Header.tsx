"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE, SERVICOS, whatsappHref } from "@/lib/metadata";

const LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/contato/", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container-base flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="logo">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-extrabold">L</span>
          <span className="text-lg font-extrabold tracking-tight text-neutro-escuro">
            {SITE.nomeCurto}<span className="text-secondary">.</span>
          </span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-neutro-claro">Início</Link>
          <div className="relative" onMouseEnter={() => setServOpen(true)} onMouseLeave={() => setServOpen(false)}>
            <button className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-neutro-claro" data-testid="nav-servicos">
              Serviços ▾
            </button>
            {servOpen && (
              <div className="absolute left-0 top-full w-64 rounded-xl border border-slate-100 bg-white p-2 shadow-lg">
                {SERVICOS.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}/`} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-primary-light">
                    <span aria-hidden>{s.icone}</span> {s.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/sobre/" className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-neutro-claro">Sobre</Link>
          <Link href="/contato/" className="rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-neutro-claro">Contato</Link>
          <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-secondary ml-2 !min-h-[44px] !px-5 !text-sm">💬 WhatsApp</a>
        </nav>

        {/* HAMBURGER MOBILE */}
        <button
          className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl text-neutro-escuro lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          data-testid="hamburger"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-base flex flex-col py-2">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="flex min-h-[48px] items-center px-2 text-base font-medium text-slate-700">
                {l.label}
              </Link>
            ))}
            <p className="px-2 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Serviços</p>
            {SERVICOS.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/`} onClick={() => setMenuOpen(false)} className="flex min-h-[48px] items-center gap-2 px-2 text-base text-slate-700">
                <span aria-hidden>{s.icone}</span> {s.titulo}
              </Link>
            ))}
            <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-secondary my-3">💬 Falar no WhatsApp</a>
          </div>
        </nav>
      )}
    </header>
  );
}
