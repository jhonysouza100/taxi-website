import Image from "next/image"
import { RiCalendarLine, RiFacebookCircleFill, RiFlashlightLine, RiInstagramFill, RiMailLine, RiMapPinLine, RiPhoneLine, RiSparkling2Line, RiTimeLine, RiTwitterXFill, RiWhatsappLine } from "@remixicon/react"

import config from "@/config"
import { ReactNode } from "react";

type FooterLink = 
  | { label: string; icon: ReactNode; href?: undefined }
  | { label: string; href: string; icon?: undefined }

type FooterLinkGroup = {
  title: string
  links: FooterLink[]
}

const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Contacto",
    links: [
      { label: "+54 3757 123-456", icon: <RiPhoneLine /> },
      { label: "+54 3757 123-456", icon: <RiWhatsappLine /> },
      { label: "info@taxipuertoiguazu.com", icon: <RiMailLine /> },
      { label: "Puerto Iguazú, Misiones, Argentina", icon: <RiMapPinLine /> },
    ],
  },
  {
    title: "Horarios",
    links: [
      { label: "Servicio 24/7", icon: <RiTimeLine /> },
      { label: "Disponible todos los días", icon: <RiSparkling2Line /> },
      { label: "Respuesta inmediata", icon: <RiFlashlightLine /> },
      { label: "Reservas anticipadas", icon: <RiCalendarLine /> },
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
                  <li key={idx} className="footer_link">
                    <span className="footer_icon">
                      {link.icon}
                    </span>
                    <span>
                      {link.label}
                    </span>
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
