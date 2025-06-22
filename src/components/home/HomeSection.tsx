import Image from "next/image"
import { RiArrowRightLine, RiArrowLeftLine } from "@remixicon/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import BookingWidgetHome from "../widgets/BookingWidgetHome"

const slides = [
  { src: "/images/gallery-img-1.jpg", label: "Home image 1" },
  { src: "/images/gallery-img-2.jpg", label: "Home image 2" },
  { src: "/images/gallery-img-3.jpg", label: "Home image 3" },
  { src: "/images/gallery-img-4.jpg", label: "Home image 4" },
]

export default function HomeSection() {
  return (
    <section className="home section" id="home">
      <Image height={700} width={700} src="/images/home-bg.jpg" alt="Home image" className="home_bg" />
      <div className="home_blur"></div>
      <div className="home_container container grid">
        <div className="home_data">
          <h1 className="home_title">
            Viaja <br /> Descubre <br /> Explora
          </h1>
          <p className="home_description">
            Descubrí la magia de la región con nosotros, en un viaje donde cada traslado es seguro y lleno de experiencias únicas.
          </p>
          <a href="#destination" className="button button_opa-30">
            Selecciona tu destino
            <RiArrowRightLine />
          </a>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          slidesPerView="auto"
          grabCursor={true}
          navigation={{
            nextEl: ".home_swiper .swiper-button-next",
            prevEl: ".home_swiper .swiper-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="home_swiper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide className="home_article" key={idx}>
              <Image
                height={700}
                width={700}
                src={slide.src}
                quality={100}
                alt={slide.label}
                className="home_img"
              />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev">
            <RiArrowLeftLine size={20} />
          </div>
          <div className="swiper-button-next">
            <RiArrowRightLine size={20} />
          </div>
        </Swiper>

      <BookingWidgetHome />
      
      </div>
    </section>
  )
}