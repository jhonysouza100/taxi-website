import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taxi Puerto Iguazú - Servicio Confiable a Cataratas y Destinos",
  description:
    "Servicio de taxi en Puerto Iguazú. Te llevamos a las Cataratas, San Ignacio, Saltos del Moconá y viajes a Brasil y Paraguay. Puntualidad y atención personalizada.",
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
        className={`${geistSans.variable} ${geistMono.variable} h-screen antialiased scroll-smooth bg-gradient-to-bl from-gray-50 to-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}
