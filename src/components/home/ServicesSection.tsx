import Image from "next/image"

const servicesImages = [
  {
    src: "/images/services-img-1.jpg",
    alt: "services image 1",
    subtitle: "Nusa",
    title: "Indonesia",
  },
  {
    src: "/images/services-img-2.jpg",
    alt: "services image 2",
    subtitle: "Cook",
    title: "Nueva Zelanda",
  },
  {
    src: "/images/services-img-3.jpg",
    alt: "services image 3",
    subtitle: "Bora Bora",
    title: "Polinesia",
  },
  {
    src: "/images/services-img-4.jpg",
    alt: "services image 4",
    subtitle: "Santorini",
    title: "Grecia",
  },
]

export default function ServicesSection() {
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Nuestros Servicios</h2>
      <div className="services_container container grid">
        {servicesImages.map((img, idx) => (
          <article className="services_card" key={idx}>
            <Image
              height={700}
              width={700}
              src={img.src}
              quality={100}
              alt={img.alt}
              className="services_img"
            />
            <div className="services_shadow"></div>
            <div className="services_data">
              <h3 className="services_subtitle">{img.subtitle}</h3>
              <h2 className="services_title">{img.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}