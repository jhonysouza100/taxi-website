import Image from "next/image"
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from "@remixicon/react"

import config from "@/config"

const linkGroupA = [
  {
    title: "Contacto",
    links: [
      { label: "+54 3757 123-456", href: "#" },
      { label: "info@taxipuertoiguazu.com", href: "#" },
      { label: "Puerto Iguazú, Misiones, Argentina", href: "#" },
    ],
  }
]

const linkGroupB = [
  {
    title: "Más Información",
    links: [
      { label: "Parque Nacional Iguazú", href: "https://iguazuargentina.com/es/" },
      { label: "Parque Nacional do Iguazú (Brasil)", href: "https://cataratasdoiguacu.com.br/" },
      { label: "Documentación para ingresar a Brasil (DNM)", href: "https://www.argentina.gob.ar/aplicaciones/fronteras/recomendaciones/brasil" },
      { label: "Paseo de Luna Llena", href: "https://iguazuargentina.com/tickets/es/luna.html" },
      { label: "Aeropuerto Iguazú", href: "https://www.aa2000.com.ar/iguazu" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container grid">
        <a href="#" className="footer_logo">
          <Image height={26} width={26} src="/logo.svg" alt="Logo image" className="footer_logo_img" />
          <span>Traslados Portillo</span>
        </a>
        <div className="footer_content grid">
          {linkGroupA.map((group) => (
            <div key={group.title}>
              <h3 className="footer_title">{group.title}</h3>
              <ul className="footer_links">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <div className="footer_link">
                      {link.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {linkGroupB.map((group) => (
            <div key={group.title}>
              <h3 className="footer_title">{group.title}</h3>
              <ul className="footer_links">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer_link" target="_blank">
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
        &#169; All Rights Reserved By <a href={config.DEVELOPER_URL} about="_blank" className="footer_author">JhonySouza</a>
      </span>
    </footer>
  )
}
