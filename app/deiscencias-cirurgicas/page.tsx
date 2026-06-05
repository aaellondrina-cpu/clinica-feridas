import ServiceContent from "@/components/ServiceContent";
import { getServico, buildMetadata } from "@/lib/metadata";

const servico = getServico("deiscencias-cirurgicas")!;
export const metadata = buildMetadata({ title: servico.titulo, description: servico.descricao, path: "/deiscencias-cirurgicas/", imageLabel: servico.imagemLabel });

export default function Page() {
  return <ServiceContent servico={servico} />;
}
