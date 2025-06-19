import Image from "next/image"
import { RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from "@remixicon/react"

const footerLinkGroups = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "#" },
      { label: "Features", href: "#" },
      { label: "News & Blogs", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Call Center", href: "#" },
      { label: "Support", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Services", href: "#" },
      { label: "Payments", href: "#" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container grid">
        <a href="#" className="footer_logo">
          <Image height={26} width={26} src="/logo.svg" alt="Logo image" className="footer_logo_img" />
          <span>GoTravel</span>
        </a>
        <div className="footer_content grid">
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="footer_title">{group.title}</h3>
              <ul className="footer_links">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer_link">
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
      <span className="footer_copy">&#169; All Rights Reserved By JhonySouza</span>
    </footer>
  )
}
