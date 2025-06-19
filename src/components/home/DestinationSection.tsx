import Image from "next/image"
import { RiMapPin2Fill } from "@remixicon/react"

const destinations = [
  {
    src: "/images/cataratas-iguazu-2.jpg",
    subtitle: "Pura Naturaleza",
    title: "Cataratas del Iguazú",
    country: "Iguazú",
    alt: "Destination image 1",
  },
  {
    src: "/images/san-ignacio.jpg",
    subtitle: "Arquitectura Histórica",
    title: "Ruinas de San Ignacio",
    country: "Wanda",
    alt: "Destination image 1",
  },
  {
    src: "/images/duty-free-shop-iguazu.jpg",
    subtitle: "Compras",
    title: "DUTY FREE",
    country: "Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/cellshop.jpg",
    subtitle: "Paseo de Compras",
    title: "PARAGUAY",
    country: "Ciudad del Este",
    alt: "Destination image 3",
  },
  {
    src: "/images/aeropuerto-iguazu.jpg",
    subtitle: "Translados",
    title: "Aeropuerto",
    country: "Puerto Iguazú / Foz de Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/aripuca-iguazu.jpg",
    subtitle: "Cultura y Conciencia Ambiental",
    title: "LA ARIPUCA",
    country: "Iguazú",
    alt: "Destination image 2",
  },
  {
    src: "/images/minas-wanda.jpg",
    subtitle: "Formaciones Naturales",
    title: "MINAS DE WANDA",
    country: "Wanda",
    alt: "Destination image 3",
  },
  {
    src: "/images/catamaran-iguazu.webp",
    subtitle: "Navegación, Shows y Atardeceres Únicos",
    title: "CATAMARÁN",
    country: "Rio Parana - Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/hito-3-fronteras-dia.jpg",
    subtitle: "Encuentro de Culturas",
    title: "HITO 3 FRONTERAS",
    country: "Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/represa-de-itaipu.jpg",
    subtitle: "Turismo Sustentable",
    title: "Represa de Itaipú",
    country: "Brasil",
    alt: "Destination image 3",
  },
  {
    src: "/images/yup-star.png",
    subtitle: "Vuelta al Mundo",
    title: "Rueda Gigante",
    country: "Foz de Iguazú - Brasil",
    alt: "Destination image 3",
  },
  {
    src: "/images/saltos-del-mocona-misiones.jpg",
    subtitle: "Paseo Náutico",
    title: "Saltos del Moconá",
    country: "Río Uruguay - El Soberbio",
    alt: "Destination image 3",
  },
  {
    src: "/images/saltos-del-monday.jpg",
    subtitle: "Turismo Aventura",
    title: "Saltos del Monday",
    country: "Ciudad del Este",
    alt: "Destination image 3",
  },
  {
    src: "/images/arroyo-mbocay.jpg",
    subtitle: "Tesoro Escondido",
    title: "Arroyo M´bocay",
    country: "2000 Hectáreas - Puerto Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/cabalgata-ecologica.jpg",
    subtitle: "Paseo a Caballo",
    title: "Cabalgata Ecológica",
    country: "Puerto Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/guira-oga.jpg",
    subtitle: "Ecoturismo",
    title: "GÜIRÁOGA",
    country: "Puerto Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/icebar-iguazu.jpg",
    subtitle: "Bar de Hielo",
    title: "ICE BAR",
    country: "Puerto Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/museo-de-cera.jpg",
    subtitle: "Meseo de Cera",
    title: "DREAMLAND",
    country: "Foz de Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/rafain-cena-show.jpg",
    subtitle: "Sabores e Culturas",
    title: "Rafain Churrascaria Show",
    country: "Foz de Iguazú",
    alt: "Destination image 3",
  },
]

export default function DestinationSection() {
  return (
    <section className="destination section" id="destination">
      <h2 className="section_title">
        ¿A Dónde Vamos?
      </h2>
      <div className="destination_container container grid">
        {destinations.map((dest, idx) => (
          <article className="destination_card" key={idx}>
            <Image
              height={700}
              width={700}
              src={dest.src}
              quality={100}
              alt={dest.alt}
              className="destination_img"
              sizes="(max-width: 425px) 75vw,(max-width: 768px) 45vw, (max-width: 1200px) 50vw, 45vw"
            />
            <div className="destination_data">
              <h3 className="destination_subtitle">{dest.subtitle}</h3>
              <h2 className="destination_title">{dest.title}</h2>
              <p className="destination_country">
                <RiMapPin2Fill />
                <span>{dest.country}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
