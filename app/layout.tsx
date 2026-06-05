import type { Metadata } from "next";
import "./globals.css";
import { SITE, buildMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...buildMetadata({}),
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <SchemaOrg />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
