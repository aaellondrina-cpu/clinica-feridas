import { SITE, LEGISLACAO } from "@/lib/metadata";

// JSON-LD: Organization + MedicalBusiness (clínica de saúde). Renderizado no layout.
export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.nome,
        url: SITE.url,
        description: SITE.descricao,
        email: SITE.email,
        telephone: `+55${SITE.whatsapp.slice(2)}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.endereco,
          addressLocality: SITE.cidade,
          addressRegion: SITE.estado,
          addressCountry: "BR",
        },
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${SITE.url}/#medicalbusiness`,
        name: SITE.nome,
        url: SITE.url,
        description: SITE.descricao,
        medicalSpecialty: "Wound Care",
        priceRange: "$$",
        telephone: `+55${SITE.whatsapp.slice(2)}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.endereco,
          addressLocality: SITE.cidade,
          addressRegion: SITE.estado,
          addressCountry: "BR",
        },
        availableService: [
          "Tratamento de Pés Diabéticos",
          "Tratamento de Úlcera Venosa",
          "Tratamento de Úlcera Arterial",
          "Cuidado de Feridas Cirúrgicas",
          "Tratamento Preventivo de Feridas",
          "Tratamento Curativo de Feridas",
        ],
        knowsAbout: LEGISLACAO.map((n) => `${n.sigla} — ${n.nome}`),
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
