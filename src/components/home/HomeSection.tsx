import Image from "next/image"
import gsap from "gsap"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade } from "swiper/modules"
import { RiArrowRightLine } from "@remixicon/react"
import { useEffect, useRef } from "react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

import "@/components/home/HomeSection.css"

const carData = [
  {
    id: 1,
    color: "orange",
    subtitle: "Let's",
    title: "RACE",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-1.png",
  },
  {
    id: 2,
    color: "green",
    subtitle: "Let's",
    title: "RACE",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-2.png",
  },
  {
    id: 3,
    color: "blue",
    subtitle: "Let's",
    title: "RACE",
    specs: ["302 MPH", "0 - 100 KM/H", "360 KW"],
    image: "/images/car-3.png",
  },
]

export default function HomeSection() {
  const homeRef = useRef<HTMLElement>(null)
  
    // useEffect(() => {
    //   // GSAP animations
    //   const tl = gsap.timeline()
  
    //   tl.from(".home_panel-1", { y: -1000, duration: 2 })
    //     .from(".home_panel-2", { y: 1000, duration: 2 }, 0)
    //     .from(".home_image", { x: 1000, duration: 2 }, 0)
    //     .from(".home_titles", { y: 100, opacity: 0, delay: 0.5 }, 2)
    //     .from(".home_title", { y: 100, opacity: 0, delay: 0.1 }, 2.1)
  
    //   return () => {
    //     tl.kill()
    //   }
    // }, [])
  return (
    <section className="home" id="home" ref={homeRef}>
      <Image height={700} width={700} src="/images/home-bg.jpg" alt="Home image" className="home_bg" />
      <div className="home_blur"></div>

      <Swiper className="home_swiper swiper"
        modules={[Pagination, EffectFade]}
        effect="fade"
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
                <div className="home_titles">
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
                </div>
              </div>
      
              <div className="home_info">
                <div className="home_specs">
                  {car.specs.map((spec, index) => (
                    <span key={index}>{spec}</span>
                  ))}
                </div>
                <a href="#" className="home_button">
                  <span>Discover More</span>
                  <RiArrowRightLine />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="home_interaction">
          {/* <!-- Swiper Pagination --> */}
          <div className="swiper-pagination"></div>
      </div>
    </section>
  )
}