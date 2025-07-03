import Image from "next/image"
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from "@remixicon/react"

import config from "@/config"

const footerLinkGroups = [
  {
    title: "Contacto",
    links: [
      { label: "+54 3757 123-456", href: "#" },
      { label: "info@taxipuertoiguazu.com", href: "#" },
      { label: "Puerto Iguazú, Misiones, Argentina", href: "#" },
    ],
  },
  {
    title: "Más Información",
    links: [
      { label: "Parque Nacional Iguazú", href: "https://iguazuargentina.com/es/" },
      { label: "Parque Nacional do Iguazú (Brasil)", href: "https://cataratasdoiguacu.com.br/" },
      { label: "Documentación para ingresar a Brasil (DNM)", href: "https://www.argentina.gob.ar/aplicaciones/fronteras/recomendaciones/brasil" },
      { label: "Aeropuerto Iguazú", href: "https://www.aa2000.com.ar/iguazu" },
      { label: "Paseo de luna llena en las Cataratas del Iguazú", href: "https://iguazuargentina.com/tickets/es/luna.html" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Services", href: "#" },
      { label: "Developer", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <a href="#" className="footer_logo">
            <Image height={26} width={26} src="/logo.svg" alt="Logo image" className="footer_logo_img" />
            <span>Traslados Portillo</span>
          </a>
          <p className="footer_description">Tu servicio de taxi confiable en Puerto Iguazú. Conectamos Argentina, Brasil y Paraguay con puntualidad y atención personalizada.</p>
        </div>
      <div className="footer_container container grid">

        <div className="footer_content grid">

          {footerLinkGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="footer_title">{group.title}</h3>
              <ul className="footer_links">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <a className="footer_link" href={link.href} target="_blank">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="footer_title">Social</h3>
            <div className="footer_social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer_social-link"
                rel="noreferrer"
                aria-label="facebook"
              >
                <RiFacebookCircleFill />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer_social-link"
                rel="noreferrer"
                aria-label="instagram"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer_social-link"
                rel="noreferrer"
                aria-label="twitter"
              >
                <RiTwitterXFill />
              </a>
            </div>
          </div>

        </div>
      </div>

      <span className="footer_copy">
        &#169; All Rights Reserved by <a href={config.DEVELOPER_URL} about="_blank" className="footer_author">JhonySouza</a>
      </span>
    </footer>
  )
}
