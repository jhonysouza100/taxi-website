"use client"

import { useEffect } from "react"
import ScrollReveal from "scrollreveal"
import gsap from "gsap"

export default function useDOMHydration() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Show Menu
    const navMenu = document.getElementById("nav-menu")
    const navToggle = document.getElementById("nav-toggle")
    const navClose = document.getElementById("nav-close")

    const handleToggleMenu = () => {
      navMenu?.classList.add("show-menu")
    }

    const handleCloseMenu = () => {
      navMenu?.classList.remove("show-menu")
    }

    if (navToggle) {
      navToggle.addEventListener("click", handleToggleMenu)
    }

    if (navClose) {
      navClose.addEventListener("click", handleCloseMenu)
    }

    // Remove menu mobile
    const navLink = document.querySelectorAll(".nav_link")
    const linkAction = () => {
      const navMenu = document.getElementById("nav-menu")
      navMenu?.classList.remove("show-menu")
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction))

    // Change background header
    const scrollHeader = () => {
      const header = document.getElementById("header")
      if (window.scrollY >= 50) {
        header?.classList.add("bg-header")
      } else {
        header?.classList.remove("bg-header")
      }
    }
    window.addEventListener("scroll", scrollHeader)

    // Show scroll up
    const scrollUp = () => {
      const scrollUpElement = document.getElementById("scroll-up")
      if (window.scrollY >= 350) {
        scrollUpElement?.classList.add("show-scroll")
      } else {
        scrollUpElement?.classList.remove("show-scroll")
      }
    }
    window.addEventListener("scroll", scrollUp)

    // Scroll sections active link
    const sections = document.querySelectorAll<HTMLElement>("section[id]")
    const scrollActive = () => {
      const scrollDown = window.scrollY

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute("id")
        const sectionsClass = document.querySelector<HTMLElement>(".nav_menu a[href*=" + sectionId + "]")

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          sectionsClass?.classList.add("active-link")
        } else {
          sectionsClass?.classList.remove("active-link")
        }
      })
    }
    window.addEventListener("scroll", scrollActive)

    // ScrollReveal animation
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
      reset: false,
    })

    sr.reveal(`.testimonial_container, .footer_container`)
    // sr.reveal(`.hero_title`, { delay: 600 })
    // sr.reveal(`.hero_description`, { delay: 900 })
    // sr.reveal(`.hero_data .button`, { delay: 1200 })
    sr.reveal(`.destination_card, .services_card`, { interval: 100 })
    sr.reveal(`.join_data`, { origin: "left" })
    sr.reveal(`.booking-widget-container`, { origin: "right" })

    // GSAP animations (tl = timeline)
    const tl = gsap.timeline()

    tl.from(".hero_image", { x: 1000, duration: 2 }, 0)
      .from(".hero_text", { y: 100, opacity: 0, delay: 0.5 }, 2)
      .from(".hero_title", { y: 100, opacity: 0, delay: 0.1 }, 2.1)
  
    // Cleanup function
    return () => {
      tl.kill()
      window.removeEventListener("scroll", scrollHeader)
      window.removeEventListener("scroll", scrollUp)
      window.removeEventListener("scroll", scrollActive)
      navLink.forEach((n) => n.removeEventListener("click", linkAction))

      if (navToggle) {
        navToggle.removeEventListener("click", handleToggleMenu)
      }

      if (navClose) {
        navClose.removeEventListener("click", handleCloseMenu)
      }
    }
  }, [])
}