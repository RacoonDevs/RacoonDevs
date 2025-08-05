import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Racoon Devs - Arquitectos Digitales del Futuro",
  description:
    "No desarrollamos software. Esculpimos el futuro digital de tu empresa. Cada línea de código es una obra de arte, cada interfaz una sinfonía visual.",
  keywords:
    "desarrollo software, arquitectos digitales, experiencias imposibles, revolución digital, México",
  openGraph: {
    title: "Racoon Devs - Creamos Experiencias Imposibles",
    description:
      "Transformamos visiones en realidades digitales que conquistan mercados",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
