import Footer from "../Footer"
import ScrollUp from "../ScrollUp"
import Header from "../Header"
import HomeSection from "./HomeSection"
import DestinationSection from "./DestinationSection"
import TestimonialSection from "./TestimonialSection"
import JoinSection from "./JoinSection"
import useDOMHydration from "@/hooks/useDOMHydration"
import ServicesSection from "./ServicesSection"

export default function Home() {
  useDOMHydration()

  return (
    <>
      {/*==================== HEADER ====================*/}
      <Header />

      {/*==================== MAIN ====================*/}
      <main className="main">
        {/*==================== HOME ====================*/}
        <HomeSection />

        {/*==================== DESTINATION ====================*/}
        <DestinationSection />

        {/*==================== TESTIMONIAL ====================*/}
        <TestimonialSection />

        {/*==================== GALLERY ====================*/}
        <ServicesSection />

        {/*==================== JOIN ====================*/}
        <JoinSection />
      </main>

      {/*==================== FOOTER ====================*/}
      <Footer />

      {/*========== SCROLL UP ==========*/}
      <ScrollUp />
    </>
  )
}