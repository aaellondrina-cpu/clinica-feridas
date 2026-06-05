import ServiceContent from "@/components/ServiceContent";
import { getServico, buildMetadata } from "@/lib/metadata";

const servico = getServico("ulcera-arterial")!;
export const metadata = buildMetadata({ title: servico.titulo, description: servico.descricao, path: "/ulcera-arterial/", imageLabel: servico.imagemLabel });

export default function Page() {
  return <ServiceContent servico={servico} />;
}
