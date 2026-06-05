import ServiceContent from "@/components/ServiceContent";
import { getServico, buildMetadata } from "@/lib/metadata";

const servico = getServico("lesao-por-pressao")!;
export const metadata = buildMetadata({ title: servico.titulo, description: servico.descricao, path: "/lesao-por-pressao/", imageLabel: servico.imagemLabel });

export default function Page() {
  return <ServiceContent servico={servico} />;
}
