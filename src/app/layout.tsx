import type { Metadata } from "next";
import { Dancing_Script, Montserrat } from "next/font/google";
import "./globals.css";
import "../components/widgets/styles.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs Responsive Travel Website 3",
  description: 'Viajes a Medida en Puerto Iguazú: Tu Aventura Personalizada Comienza Aquí.',
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dancing.variable}`}
      >
        {children}
      </body>
    </html>
  );
}