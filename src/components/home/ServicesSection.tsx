import { RiUser3Line, RiHotelLine, RiPlaneLine, RiShoppingBag3Line } from "@remixicon/react"

export default function ServicesSection() {
  return (
    <section className="services section" id="services">
      <h2 className="section_title">Nuestros Servicios</h2>
      <p className="section_description">Te llevamos a donde necesites, ofrecemos traslados a puntos turísticos, alojamientos, aeropuerto y mas.</p>
      <div className="services_container container grid">
        <article className="services_card">
          <div className="services_icon">
            <RiUser3Line size={48} />
          </div>
          <h3 className="services_title">Puntos Turísticos</h3>
          <p className="services_description">
            Explorá los destinos más importantes y emblemáticos de la región. Te ofrecemos un traslado flexible para que puedas recorrer y disfrutar sin preocuparte por el tiempo.
          </p>
        </article>

        <article className="services_card">
          <div className="services_icon">
            <RiHotelLine size={48} />
          </div>
          <h3 className="services_title">Hoteles</h3>
          <p className="services_description">
            Traslados puntuales desde aeropuertos o terminales hasta tu alojamiento, sin demoras.
          </p>
        </article>

        <article className="services_card">
          <div className="services_icon">
            <RiPlaneLine size={48} />
          </div>
          <h3 className="services_title">Aeropuerto</h3>
          <p className="services_description">
            Pickup y drop-off en aeropuerto con máxima seguridad y espacio para equipaje.
          </p>
        </article>

        <article className="services_card">
          <div className="services_icon">
            <RiShoppingBag3Line size={48} />
          </div>
          <h3 className="services_title">Tour de Compras</h3>
          <p className="services_description">
            Te llevo a Ciudad del Este o al Duty Free con traslados rápidos y sin contratiempos.
          </p>
        </article>
      </div>
    </section>
  )
}