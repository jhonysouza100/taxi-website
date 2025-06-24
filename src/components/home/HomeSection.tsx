import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade, Autoplay } from "swiper/modules"
import { RiArrowRightLine } from "@remixicon/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

import "@/components/home/HomeSection.css"
import BookingWidgetHome from "../widgets/BookingWidgetHome"

const carData = [
  {
    id: 1,
    color: "orange",
    subtitle: "Let's",
    title: "TRAVEL",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-a.png",
    driver: "/images/driver-img-1.png",
  },
  {
    id: 2,
    color: "green",
    subtitle: "Let's",
    title: "TRAVEL",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-b.png",
    driver: "/images/driver-img-1.png",
  },
  {
    id: 3,
    color: "blue",
    subtitle: "Let's",
    title: "TRAVEL",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-c.png",
    driver: "/images/driver-img-1.png",
  },
]

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <Image height={700} width={700} src="/images/gallery-img-2.jpg" alt="Home image" className="home_bg" />
      <div className="home_blur"></div>

      <Swiper className="home_swiper"
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
          <SwiperSlide key={car.id} className={`home_article swiper-slide car_${car.color}`}>
            <div className="home_content container">
              <div className="home_data">
                <div className="home_text">
                  <h3 className="home_subtitle">{car.subtitle}</h3>
                  <h1 className="home_title">{car.title}</h1>
                </div>
      
                <div className="home_image">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt="Car image"
                    className="home_img"
                    width={800}
                    height={400}
                    priority
                  />
                  <Image
                    src={car.driver || "/placeholder.svg"}
                    alt="Driver image"
                    className="home_img-driver"
                    width={800}
                    height={400}
                    priority
                  />
                </div>
              </div>
      
              <div className="home_info">
                <div className="home_specs">
                  {/* {car.specs.map((spec, index) => (
                    <span key={index}>{spec}</span>
                  ))} */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home_interaction">
          {/* <!-- Swiper Pagination --> */}
          <div className="swiper-pagination"></div>
      </div>

      <div className="home_actions">
        <BookingWidgetHome />

        <a href="#destination" className="home_button button button_opa-30">
          <span>A Donde Vamos?</span>
          <RiArrowRightLine />
        </a>
      </div>

    </section>
  )
}