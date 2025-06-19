import Image from "next/image"
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

const testimonials = [
  {
    title: "Cataratas del Iguazú",
    description:
      "Me encantó visitar el país porque el paisaje es precioso. Los lugareños también me recibieron con alegría y sonrisas.",
    profileImg: "/testimonial-profile-1.png",
    name: "Will",
    role: "Fotografo",
  },
  {
    title: "Paseo de Compras",
    description:
      "Me encantó visitar el país porque el paisaje es precioso. Los lugareños también me recibieron con alegría y sonrisas.",
    profileImg: "/testimonial-profile-2.png",
    name: "Rose",
    role: "Influencer",
  },
  {
    title: "Aeropuerto",
    description:
      "Me encantó visitar el país porque el paisaje es precioso. Los lugareños también me recibieron con alegría y sonrisas.",
    profileImg: "/testimonial-profile-3.png",
    name: "Gian",
    role: "Blogger",
  },
]

export default function TestimonialSection() {
  return (
    <section className="testimonial section" id="testimonial">
      <h2 className="section_title">
        Que Dicen <br /> Nuestros Pasajeros?
      </h2>
      <div className="testimonial_container container grid">
        <div className="testimonial_img-container">
          <Image
            height={700}
            width={700}
            src="/images/testimonial-img.jpg"
            quality={100}
            alt="Testimonial image"
            className="testimonial_img"
            sizes="(max-width: 425px) 75vw,(max-width: 768px) 45vw, (max-width: 1200px) 50vw, 45vw"
          />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={40}
          grabCursor={true}
          navigation={{
            nextEl: ".testimonial_swiper .swiper-button-next",
            prevEl: ".testimonial_swiper .swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="testimonial_swiper"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide className="testimonial_card" key={idx}>
              <h2 className="testimonial_title">{testimonial.title}</h2>
              <p className="testimonial_description">{testimonial.description}</p>
              <div className="testimonial_profile">
                <Image
                  height={700}
                  width={700}
                  src={testimonial.profileImg}
                  alt="Testimonial profile image"
                />
                <div className="testimonial_info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev">
            <RiArrowLeftLine />
          </div>
          <div className="swiper-button-next">
            <RiArrowRightLine />
          </div>
        </Swiper>
      </div>
    </section>
  )
}