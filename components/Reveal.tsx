import type { ReactNode } from "react";

// Entrada com fade-up via CSS (keyframe 'fade-up' no tailwind.config, fill-mode both).
// É seguro: SEMPRE termina visível — não depende de IntersectionObserver/JS, então o
// conteúdo nunca fica preso em opacity:0 (bug que escondia os cards abaixo do hero).
// O hover/interação com Framer Motion fica isolado nos componentes de card.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`animate-fade-up ${className || ""}`} style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
