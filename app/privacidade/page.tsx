import { SITE, buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Política de Privacidade",
  description: "Política de Privacidade e tratamento de dados pessoais em conformidade com a LGPD (Lei 13.709/2018).",
  path: "/privacidade/",
  imageLabel: "Privacidade",
});

const secoes = [
  {
    t: "1. Quem somos",
    p: `Esta Política de Privacidade descreve como a ${SITE.nome} coleta, usa e protege os dados pessoais dos usuários deste site e dos pacientes, em conformidade com a Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018).`,
  },
  {
    t: "2. Dados que coletamos",
    p: "Coletamos apenas os dados que você nos fornece voluntariamente (como nome, telefone e mensagem no formulário de contato) e dados de navegação estritamente necessários ao funcionamento do site. Não comercializamos dados pessoais.",
  },
  {
    t: "3. Dados de saúde",
    p: "Dados relativos à saúde são dados pessoais sensíveis e recebem proteção reforçada. São utilizados exclusivamente para a prestação do cuidado, com sigilo profissional, e nunca compartilhados sem a sua autorização, salvo obrigação legal.",
  },
  {
    t: "4. Finalidade do uso",
    p: "Utilizamos os dados para responder a contatos, agendar atendimentos, prestar o cuidado em saúde e cumprir obrigações legais e regulatórias.",
  },
  {
    t: "5. Compartilhamento",
    p: "Não compartilhamos seus dados com terceiros para fins de marketing. O compartilhamento ocorre apenas quando necessário ao cuidado (ex.: encaminhamentos) ou por exigência legal.",
  },
  {
    t: "6. Seus direitos (LGPD)",
    p: "Você pode, a qualquer momento, solicitar confirmação, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, além de revogar o consentimento. Basta entrar em contato pelos nossos canais.",
  },
  {
    t: "7. Segurança",
    p: "Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda ou alteração indevida.",
  },
  {
    t: "8. Contato do encarregado",
    p: `Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, fale conosco: ${SITE.email} · ${SITE.telefone}.`,
  },
];

export default function PrivacidadePage() {
  return (
    <section className="section">
      <div className="container-base max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">Privacidade</p>
        <h1 className="h-title mt-2">Política de Privacidade</h1>
        <p className="mt-3 text-slate-500">Em conformidade com a LGPD — Lei nº 13.709/2018.</p>
        <div className="mt-8 space-y-7">
          {secoes.map((s) => (
            <div key={s.t}>
              <h2 className="text-xl font-bold text-neutro-escuro">{s.t}</h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
