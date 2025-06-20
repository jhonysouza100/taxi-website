import Image from "next/image"
import { RiApps2Fill, RiCloseLine } from "@remixicon/react"

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#destination", label: "Destinos" },
  { href: "#testimonial", label: "Reseñas" },
  { href: "#services", label: "Servicios" },
  { href: "#join", label: "Reservar" },
]

export default function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="nav_logo-container">
        <a href="#" className="nav_logo">
          <Image height={700} width={700} src="/logo.svg" alt="logo image" />
        </a>
        <span>Traslados Portillo</span>
        </div>

        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list">
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav_link${idx === 0 ? " active-link" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav_close" id="nav-close">
            <RiCloseLine />
          </div>
        </div>

        <div className="nav_buttons">
          <div className="nav_toggle" id="nav-toggle">
            <RiApps2Fill />
          </div>
        </div>
      </nav>
    </header>
  )
}