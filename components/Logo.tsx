// Logo CICATRIX — "C" circular (aberto) com cicatriz em "Z" e suturas em verde.
// Marca em SVG (placeholder fiel à descrição). Troque pela arte final do proprietário
// substituindo este componente. variant="white" para fundos escuros (hero/footer).
export default function Logo({
  size = 40,
  variant = "color",
  className,
}: {
  size?: number;
  variant?: "color" | "white";
  className?: string;
}) {
  const ring = variant === "white" ? "#FFFFFF" : "#6B4430";
  const scar = variant === "white" ? "#FFFFFF" : "#2D190E";
  const tick = "#C59B6A";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="CICATRIX"
      fill="none"
    >
      {/* C aberto */}
      <path d="M73 23 A36 36 0 1 0 73 77" fill="none" stroke={ring} strokeWidth={9} strokeLinecap="round" />
      {/* cicatriz em Z */}
      <path d="M37 37 L61 37 L39 63 L63 63" fill="none" stroke={scar} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      {/* suturas (verde) */}
      <g stroke={tick} strokeWidth={3} strokeLinecap="round">
        <line x1="46" y1="44" x2="56" y2="50" />
        <line x1="44" y1="50" x2="54" y2="56" />
      </g>
    </svg>
  );
}
