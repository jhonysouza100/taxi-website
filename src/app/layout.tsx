import type { Metadata } from "next";
import { Dancing_Script, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteVerification = process.env.NEXT_PUBLIC_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: "Traslados Puerto Iguazú",
    template: "%s | Traslados Iguazú",
  },
  description: "Servicio de traslados en Puerto Iguazú. Traslados al aeropuerto, Cataratas, hoteles y destinos turísticos. Vehículos cómodos, conductores profesionales y reservas online fáciles.",
  keywords: [
    "Traslados Puerto Iguazú",
    "Transfer aeropuerto Iguazú",
    "Traslados Cataratas del Iguazú",
    "Transporte turístico Iguazú",
    "Taxi Puerto Iguazú",
    "Remis Iguazú",
    "Traslados hotel Iguazú",
    "Transfer Foz do Iguaçu",
    "Traslados privados Iguazú",
    "Reserva traslado Iguazú"
  ],
  category: 'transportation',
  openGraph: {
    locale: "es_AR",
    type: "website",
    url: siteUrl,
    title: "Traslados en Puerto Iguazú",
    description: "Traslados seguros y cómodos en Puerto Iguazú. Reserva tu transfer al aeropuerto, hoteles y Cataratas. Atención personalizada y precios accesibles.",
    siteName: "Traslados Puerto Iguazú",
    images: [{
      url: `${siteUrl}/images/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: "Traslados en Puerto Iguazú"
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traslados en Puerto Iguazú | Transfers y Taxis',
    description: 'Reserva tu traslado en Puerto Iguazú: aeropuerto, hoteles y Cataratas. Servicio profesional y seguro.',
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  appleWebApp: { 
    capable: true, 
    statusBarStyle: "black-translucent", 
    title: "Traslados Puerto Iguazú", 
    startupImage: [{
      url: '/apple-icon.png',
      media: '(device-width: 768px) and (device-height: 1024px)',
    }]
  },
  verification: { google: `${siteVerification}.html` },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': `${siteUrl}/en`,
      'pt-BR': `${siteUrl}/pt`,
    }
  },
  other: {
    street_address: 'Av. Victoria Aguirre 123',
    locality: 'Puerto Iguazú',
    postal_code: '3370',
    country_name: 'Argentina',
    Latitude: '-25.5970016',
    Longitude: '-54.5684891',
    'og:priceRange': 'U$20',
    'business:contact_data:street_address': 'Av. Victoria Aguirre 123',
    'business:contact_data:locality': 'Puerto Iguazú',
    'business:contact_data:postal_code': '3370',
    'business:contact_data:country_name': 'Argentina',
    'place:location:latitude': '-25.695230',
    'place:location:longitude': '-54.436718'
  },
  manifest: "/site.webmanifest",
  authors: [{ name: "Traslados Puerto Iguazú", url: siteUrl }],
  creator: 'jhonysouza100',
  publisher: 'Chill Hop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'Next.js',
  applicationName: 'Traslados Puerto Iguazú',
  referrer: 'origin-when-cross-origin',
};

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