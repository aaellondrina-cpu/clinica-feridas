import type { Metadata } from "next";

// ============================================================
// CICATRIX — Clínica de Tratamento de Feridas
// Configuração do site (troque os dados de contato se mudar)
// ============================================================
export const SITE = {
  nome: "CICATRIX",
  nomeCurto: "CICATRIX",
  subtitulo: "Clínica de Tratamento de Feridas",
  slogan: "Especialista em Feridas Crônicas",
  descricao:
    "CICATRIX — Clínica de Tratamento de Feridas em Adamantina e Osvaldo Cruz/SP. Especialista em feridas crônicas: pés diabéticos, úlceras venosas e arteriais, deiscências cirúrgicas. Cuidado humanizado e baseado em evidências. Responsável: Liliana Cristina Tino — COREN-SP 74372.",
  url: "https://clinica-feridas.vercel.app",
  whatsapp: "5518997585015",
  telefone: "(18) 99758-5015",
  email: "liliana-cristina@hotmail.com",
  endereco: "Av. Rio Branco, 61 — Adamantina/SP",
  enderecos: [
    "Av. Rio Branco, 61 — Adamantina/SP",
    "Rua FEB, 194 — Osvaldo Cruz/SP",
  ],
  // Duas unidades — mesmo telefone/WhatsApp
  unidades: [
    { cidade: "Adamantina/SP", endereco: "Av. Rio Branco, 61", telefone: "(18) 99758-5015" },
    { cidade: "Osvaldo Cruz/SP", endereco: "Rua FEB, 194", telefone: "(18) 99758-5015" },
  ],
  cidade: "Adamantina",
  estado: "SP",
  responsavel: "Liliana Cristina Tino — Enfermeira · COREN-SP 74372",
  responsavelNome: "Liliana Cristina Tino",
  coren: "COREN-SP 74372",
};

export function whatsappHref(mensagem?: string): string {
  const texto = mensagem || "Olá! Gostaria de informações sobre o tratamento de feridas na CICATRIX.";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(texto)}`;
}

// Imagem placeholder on-brand via SVG inline (data URI) — renderiza offline, NUNCA
// quebra (não depende de serviço externo). Troque por fotos reais quando tiver.
export function img(w: number, h: number, label: string, hex = "A0826D"): string {
  const fontSize = Math.max(16, Math.round(Math.min(w, h) / 9));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#${hex}"/><stop offset="1" stop-color="#8A6F5C"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" font-family="Georgia, serif" font-size="${fontSize}" font-weight="700" fill="#ffffff" fill-opacity="0.9" text-anchor="middle" dominant-baseline="central">${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// ============================================================
// Legislação / normas
// ============================================================
export interface NormaItem {
  sigla: string;
  nome: string;
  desc: string;
}

export const LEGISLACAO: NormaItem[] = [
  { sigla: "Portaria 529/2013 (MS)", nome: "Programa Nacional de Segurança do Paciente", desc: "Estabelece protocolos de segurança do paciente nos serviços de saúde." },
  { sigla: "RDC 36/2013 (ANVISA)", nome: "Segurança do Paciente em Serviços de Saúde", desc: "Institui ações para a segurança do paciente e melhoria da qualidade." },
  { sigla: "Resolução COFEN 358/2015", nome: "Sistematização da Assistência de Enfermagem", desc: "Dispõe sobre o Processo de Enfermagem nos ambientes de cuidado." },
  { sigla: "Lei 8.080/1990", nome: "Lei Orgânica da Saúde (SUS)", desc: "Regula as ações e serviços de saúde em todo o território nacional." },
  { sigla: "Lei 13.146/2015", nome: "Estatuto da Pessoa com Deficiência", desc: "Assegura acessibilidade e atendimento prioritário." },
  { sigla: "NBR ISO 9001:2015", nome: "Sistema de Gestão da Qualidade", desc: "Requisitos para a gestão da qualidade de processos e serviços." },
];

// ============================================================
// Serviços (condições tratadas + tipos de tratamento)
// ============================================================
export interface Servico {
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  icone: string;
  cor: string; // hex sem #
  imagemLabel: string;
  metodologia: string[];
  legislacao: string[];
  beneficios?: string[];
  tipo: "condicao" | "tratamento";
}

const NORMAS_PADRAO = ["Portaria 529/2013 (MS)", "RDC 36/2013 (ANVISA)", "Resolução COFEN 358/2015"];

export const SERVICOS: Servico[] = [
  {
    slug: "pes-diabeticos",
    titulo: "Pés Diabéticos",
    subtitulo: "Prevenção e tratamento do pé diabético",
    descricao:
      "O pé diabético é uma das complicações mais frequentes da diabetes e exige acompanhamento especializado para prevenir infecções, úlceras e amputações. Avaliamos a sensibilidade, a circulação e a integridade da pele, com plano de cuidado individualizado e educação do paciente.",
    icone: "🦶",
    cor: "A0826D",
    imagemLabel: "Pés Diabéticos",
    metodologia: [
      "Avaliação clínica e classificação de risco (escala de Wagner / Texas)",
      "Teste de sensibilidade (monofilamento) e avaliação vascular",
      "Desbridamento e curativos especiais conforme o tipo de lesão",
      "Orientação de calçados, autocuidado e controle glicêmico",
      "Acompanhamento periódico para prevenir recidivas",
    ],
    legislacao: NORMAS_PADRAO,
    tipo: "condicao",
  },
  {
    slug: "ulcera-venosa",
    titulo: "Úlcera Venosa",
    subtitulo: "Cicatrização de úlceras de origem venosa",
    descricao:
      "As úlceras venosas resultam da insuficiência venosa crônica e costumam aparecer na região dos tornozelos. Nosso protocolo combina terapia compressiva, curativos avançados e cuidado da pele perilesional para acelerar a cicatrização e reduzir o risco de recorrência.",
    icone: "🩹",
    cor: "A0826D",
    imagemLabel: "Úlcera Venosa",
    metodologia: [
      "Avaliação da insuficiência venosa e do leito da ferida",
      "Terapia compressiva (bota de Unna / bandagens) quando indicada",
      "Curativos avançados conforme exsudato e fase de cicatrização",
      "Cuidado da pele perilesional e controle de edema",
      "Reavaliação contínua e orientação de prevenção",
    ],
    legislacao: NORMAS_PADRAO,
    tipo: "condicao",
  },
  {
    slug: "ulcera-arterial",
    titulo: "Úlcera Arterial",
    subtitulo: "Manejo de úlceras de origem isquêmica",
    descricao:
      "As úlceras arteriais decorrem da redução do fluxo sanguíneo (isquemia) e exigem manejo cuidadoso, muitas vezes em conjunto com a equipe vascular. O foco é proteger o tecido, controlar a dor e a infecção e favorecer a perfusão, evitando agravamento da lesão.",
    icone: "❤️‍🩹",
    cor: "A0826D",
    imagemLabel: "Úlcera Arterial",
    metodologia: [
      "Avaliação da perfusão (índice tornozelo-braço) e da dor",
      "Encaminhamento e atuação conjunta com equipe vascular",
      "Curativos que protegem o leito sem comprometer a circulação",
      "Controle de infecção e manejo da dor isquêmica",
      "Monitoramento próximo da evolução da lesão",
    ],
    legislacao: NORMAS_PADRAO,
    tipo: "condicao",
  },
  {
    slug: "deiscencias-cirurgicas",
    titulo: "Deiscências Cirúrgicas",
    subtitulo: "Cuidado de feridas e deiscências cirúrgicas",
    descricao:
      "Feridas cirúrgicas que apresentam deiscência (abertura) ou cicatrização retardada precisam de acompanhamento especializado para prevenir infecção e favorecer o fechamento. Atuamos no manejo da ferida operatória complexa, com técnicas e curativos adequados a cada fase.",
    icone: "🩺",
    cor: "A0826D",
    imagemLabel: "Feridas Cirúrgicas",
    metodologia: [
      "Avaliação da ferida operatória e dos sinais de deiscência",
      "Limpeza, desbridamento e preparo do leito da ferida",
      "Terapia por pressão negativa quando indicada",
      "Curativos especiais conforme exsudato e profundidade",
      "Acompanhamento até o fechamento e orientação pós-operatória",
    ],
    legislacao: NORMAS_PADRAO,
    tipo: "condicao",
  },
  {
    slug: "preventivo",
    titulo: "Tratamento Preventivo",
    subtitulo: "Prevenir antes que a ferida apareça",
    descricao:
      "A prevenção é o cuidado mais eficaz e econômico. Avaliamos fatores de risco — diabetes, problemas circulatórios, mobilidade reduzida — e construímos um plano para proteger a pele, evitar lesões por pressão e identificar precocemente qualquer alteração.",
    icone: "🛡️",
    cor: "A0826D",
    imagemLabel: "Tratamento Preventivo",
    metodologia: [
      "Avaliação de risco individual e da integridade da pele",
      "Plano de prevenção de lesões por pressão e do pé diabético",
      "Educação do paciente e da família no autocuidado",
      "Acompanhamento periódico e reavaliação de risco",
    ],
    beneficios: [
      "Reduz o risco de úlceras e complicações graves",
      "Evita internações e procedimentos mais invasivos",
      "Mais qualidade de vida e autonomia",
      "Cuidado contínuo e educação em saúde",
    ],
    legislacao: NORMAS_PADRAO,
    tipo: "tratamento",
  },
  {
    slug: "curativo",
    titulo: "Tratamento Curativo",
    subtitulo: "Cicatrização ativa de feridas instaladas",
    descricao:
      "Quando a ferida já está presente, o tratamento curativo busca a cicatrização no menor tempo possível, com segurança e conforto. Utilizamos curativos avançados, técnicas de preparo do leito da ferida e acompanhamento próximo de cada fase da cicatrização.",
    icone: "🌿",
    cor: "A0826D",
    imagemLabel: "Tratamento Curativo",
    metodologia: [
      "Avaliação completa da ferida (TIME: tecido, infecção, umidade, bordas)",
      "Desbridamento e preparo do leito da ferida",
      "Seleção de curativos avançados conforme a fase",
      "Controle de infecção, dor e exsudato",
      "Reavaliação contínua até a cicatrização",
    ],
    beneficios: [
      "Cicatrização mais rápida e segura",
      "Menos dor e troca de curativos otimizada",
      "Acompanhamento profissional de cada fase",
      "Redução do risco de infecção e recidiva",
    ],
    legislacao: NORMAS_PADRAO,
    tipo: "tratamento",
  },
];

export const SERVICOS_HOME = SERVICOS.slice(0, 3);

export function getServico(slug: string): Servico | undefined {
  return SERVICOS.find((s) => s.slug === slug);
}

export function normasDoServico(s: Servico): NormaItem[] {
  return LEGISLACAO.filter((n) => s.legislacao.includes(n.sigla));
}

// ============================================================
// SEO — helper de metadata por página
// ============================================================
export function buildMetadata(opts: { title?: string; description?: string; path?: string; imageLabel?: string }): Metadata {
  const title = opts.title ? `${opts.title} — ${SITE.nome}` : `${SITE.nome} — ${SITE.slogan}`;
  const description = opts.description || SITE.descricao;
  const path = opts.path || "/";
  const canonical = `${SITE.url}${path}`;
  const ogImage = img(1200, 630, opts.imageLabel || SITE.nome, "A0826D");
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.nome,
      locale: "pt_BR",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}
