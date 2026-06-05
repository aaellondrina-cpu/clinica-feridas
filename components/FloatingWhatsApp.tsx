import { whatsappHref } from "@/lib/metadata";

// CTA WhatsApp fixo/flutuante (essencial no mobile). Aparece em todas as páginas.
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      data-testid="whatsapp-flutuante"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg ring-4 ring-[#25D366]/25 transition-transform hover:scale-105 lg:bottom-6 lg:right-6"
    >
      💬
    </a>
  );
}
