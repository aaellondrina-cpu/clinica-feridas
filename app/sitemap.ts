import type { MetadataRoute } from "next";
import { SITE, SERVICOS } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const rotas = [
    { path: "/", priority: 1 },
    { path: "/sobre/", priority: 0.7 },
    { path: "/contato/", priority: 0.8 },
    { path: "/privacidade/", priority: 0.3 },
    ...SERVICOS.map((s) => ({ path: `/${s.slug}/`, priority: 0.8 })),
  ];
  return rotas.map(({ path, priority }) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
