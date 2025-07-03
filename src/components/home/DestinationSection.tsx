import Image from "next/image"
import { RiAddFill, RiMapPin2Fill, RiSubtractFill } from "@remixicon/react"
import { useState } from "react"

const destinations = [
  {
    src: "/images/cataratas-iguazu.webp",
    subtitle: "Pura Naturaleza",
    title: "Cataratas del Iguazú",
    country: "Iguazú",
    alt: "Destination image 1",
  },
  {
    src: "/images/ruinas-sanignacio.webp",
    subtitle: "Arquitectura Histórica",
    title: "Ruinas de San Ignacio",
    country: "Wanda",
    alt: "Destination image 1",
  },
  {
    src: "/images/dutyfree-iguazu.webp",
    subtitle: "Compras",
    title: "DUTY FREE",
    country: "Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/ciudad-del-este.avif",
    subtitle: "Paseo de Compras",
    title: "PARAGUAY",
    country: "Ciudad del Este",
    alt: "Destination image 3",
  },
  {
    src: "/images/aeropuerto-iguazu.webp",
    subtitle: "Translados",
    title: "Aeropuerto",
    country: "Puerto Iguazú / Foz de Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/aripuca-iguazu.webp",
    subtitle: "Cultura y Conciencia Ambiental",
    title: "LA ARIPUCA",
    country: "Iguazú",
    alt: "Destination image 2",
  },
  {
    src: "/images/minas-wanda.webp",
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
    src: "/images/hito-3-fronteras-dia.webp",
    subtitle: "Encuentro de Culturas",
    title: "HITO 3 FRONTERAS",
    country: "Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/represa-itaipu.webp",
    subtitle: "Turismo Sustentable",
    title: "Represa de Itaipú",
    country: "Brasil",
    alt: "Destination image 3",
  },
  {
    src: "/images/yup-star.webp",
    subtitle: "Vuelta al Mundo",
    title: "Rueda Gigante",
    country: "Foz de Iguazú - Brasil",
    alt: "Destination image 3",
  },
  {
    src: "/images/saltos-del-mocona.webp",
    subtitle: "Paseo Náutico",
    title: "Saltos del Moconá",
    country: "Río Uruguay - El Soberbio",
    alt: "Destination image 3",
  },
  {
    src: "/images/saltos-del-monday.webp",
    subtitle: "Turismo Aventura",
    title: "Saltos del Monday",
    country: "Ciudad del Este",
    alt: "Destination image 3",
  },
  {
    src: "/images/arroyo-mbocay.webp",
    subtitle: "Tesoro Escondido",
    title: "Arroyo M´bocay",
    country: "2000 Hectáreas - Puerto Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/cabalgata-ecologica.webp",
    subtitle: "Paseo a Caballo",
    title: "Cabalgata Ecológica",
    country: "Puerto Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/guira-oga.webp",
    subtitle: "Ecoturismo",
    title: "GÜIRÁOGA",
    country: "Puerto Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/icebar-iguazu.webp",
    subtitle: "Bar de Hielo",
    title: "ICE BAR",
    country: "Puerto Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/museo-de-cera.webp",
    subtitle: "Meseo de Cera",
    title: "DREAMLAND",
    country: "Foz de Iguazú",
    alt: "Destination image 3",
  },
  {
    src: "/images/rafain-cena-show.webp",
    subtitle: "Sabores e Culturas",
    title: "Rafain Churrascaria Show",
    country: "Foz de Iguazú",
    alt: "Destination image 3",
  },
]

export default function DestinationSection() {
  const [showAll, setShowAll] = useState(false);
  const firstThreeDestinations = destinations.slice(0, 4);
  const remainingDestinations = destinations.slice(4);

  return (
    <section className="destination section" id="destination">
      <h2 className="section_title">
        ¿A Dónde Vamos?
      </h2>
      <div className="destination_container container grid">

        {/* Primeros tres detinos */}
        {firstThreeDestinations && firstThreeDestinations.map((dest, idx) => (
          <article className="destination_card" key={idx}>
            <Image
              height={300}
              width={300}
              src={dest.src}
              quality={100}
              loading="lazy"
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
          )
        )}
      </div>

      {/* Mostrar más destinos Button */}
        {remainingDestinations && remainingDestinations.length > 0 && (
            <div className="destination_container container grid" style={{ paddingInline: "1rem", paddingBlock: "0.75rem", marginBlock: "1rem" }}>
              <button
                style={{ gridColumn: "1 / -1", width: "100%", cursor: "pointer", backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "end", columnGap: "0.5rem", paddingBlock: "0.5rem", paddingInline: "1rem", transitionProperty: "background-color", transitionDuration: "150ms", }}
                onClick={() => setShowAll(!showAll)}
                className="destination_button"
              >
                <span
                  className="destination_dropdown"
                  style={{ fontSize: "var(--h2-font-size)", fontWeight: 600, }}>
                  {showAll
                    ? "Ver"
                    : `Ver`}
                </span>
                {showAll ? (
                  <RiSubtractFill size={28} />
                ) : (
                  <RiAddFill size={28} />
                )}
              </button>
          </div>
        )}

      <div className="destination_container container grid">
        {showAll && (remainingDestinations?.length ?? 0) > 0 && (
          <>
          {remainingDestinations.map((dest, idx) => (
            <article className="destination_card" key={idx}>
              <Image
                height={700}
                width={700}
                src={dest.src}
                quality={100}
                loading="lazy"
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
          </>
        )}
      </div>
    </section>
  )
}
