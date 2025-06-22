// import Image from "next/image"
import BookingWidget from "../widgets/BookingWidget"

export default function JoinSection() {
  return (
    <section className="join section" id="join">
      <div className="join_container container grid">
        <div className="join_data">
          <h2 className="section_title">
            Comienza tu <br /> Viaje Aqui
          </h2>
            <p className="join_description">Completa este formulario para reservar tu taxi de manera rápida y sencilla.</p>
        </div>
        <BookingWidget />
        {/* <Image height={700} width={700} src="/images/gallery-img-4.jpg" quality={100} alt="Join image" className="join_img" /> */}
      </div>
    </section>
  )
}