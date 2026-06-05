import ServiceContent from "@/components/ServiceContent";
import { getServico, buildMetadata } from "@/lib/metadata";

const servico = getServico("pes-diabeticos")!;
export const metadata = buildMetadata({ title: servico.titulo, description: servico.descricao, path: "/pes-diabeticos/", imageLabel: servico.imagemLabel });

export default function Page() {
  return <ServiceContent servico={servico} />;
}
