import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade, Autoplay } from "swiper/modules"
import { RiArrowRightLine } from "@remixicon/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

import "@/components/home/HeroSection.css"
import BookingWidgetHero from "../widgets/BookingWidgetHero"

const carData = [
  {
    id: 1,
    color: "orange",
    subtitle: "Puerto",
    title: "IGUAZÚ",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-2.webp",
    driver: "/images/driver-1.webp",
  },
  {
    id: 2,
    color: "green",
    subtitle: "Puerto",
    title: "IGUAZÚ",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-4.webp",
    driver: "/images/driver-2.webp",
  },
  {
    id: 3,
    color: "blue",
    subtitle: "Puerto",
    title: "IGUAZÚ",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-1.webp",
    driver: "/images/driver-3.webp",
  },
]

export default function HeroSection() {
  return (
    <div className="home" id="home">
      <Image height={750} width={320} quality={80} src="/images/bg-img-1.webp" alt="Home image" className="hero_bg" />
      <div className="hero_blur"></div>

      <Swiper className="hero_swiper"
        modules={[Pagination, EffectFade, Autoplay]}
        effect='fade'
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: false }}
        speed={1200}
        loop={true}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index: number, className: string) =>
            `<span class="${className}">${String(index + 1).padStart(2, "0")}</span>`,
        }}
      >
        {carData.map((car) => (
          <SwiperSlide key={car.id} className={`hero_article swiper-slide car_${car.color}`}>
            <div className="hero_content container">
              <div className="hero_data">
                <div className="hero_text">
                  <span className="hero_subtitle">{car.subtitle}</span>
                  <h1 className="hero_title">{car.title}</h1>
                </div>
      
                <div className="hero_image">
                  <Image
                    src={car.driver || "/placeholder.svg"}
                    alt="Driver image"
                    className="hero_img-driver"
                    width={320}
                    height={710}
                    quality={100}
                    loading="lazy"
                  />
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt="Car image"
                    className="hero_img"
                    width={710}
                    height={320}
                    quality={100}
                    loading="lazy"
                  />
                </div>
              </div>
      
              <div className="hero_info">
                <div className="hero_specs">
                  {/* {car.specs.map((spec, index) => (
                    <span key={index}>{spec}</span>
                  ))} */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero_interaction">
          {/* <!-- Swiper Pagination --> */}
          <div className="swiper-pagination"></div>
      </div>

      <div className="hero_actions">
        <BookingWidgetHero />

        <a href="#destination" className="hero_button button button_opa-30">
          <span>A Donde Vamos?</span>
          <RiArrowRightLine />
        </a>
      </div>

    </div>
  )
}