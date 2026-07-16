import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Taubenabwehr Baden-Württemberg | 3 Jahre Garantie | StadtFix",
    template: "%s | StadtFix",
  },
  description:
    "Taubenabwehr für Gewerbe und Privat in Nürtingen, Stuttgart und ganz Baden-Württemberg. Edelstahl-Spikes und Netze, tierschutzkonform, 3 Jahre Garantie.",
  openGraph: {
    siteName: "StadtFix",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 2000, height: 1250 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
