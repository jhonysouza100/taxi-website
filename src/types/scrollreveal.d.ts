declare module "scrollreveal" {
  interface ScrollRevealOptions {
    delay?: number
    distance?: string
    duration?: number
    easing?: string
    interval?: number
    opacity?: number
    origin?: "top" | "right" | "bottom" | "left"
    rotate?: {
      x?: number
      y?: number
      z?: number
    }
    scale?: number
    cleanup?: boolean
    container?: HTMLElement | string
    desktop?: boolean
    mobile?: boolean
    reset?: boolean
    useDelay?: "always" | "once" | "onload"
    viewFactor?: number
    viewOffset?: {
      top?: number
      right?: number
      bottom?: number
      left?: number
    }
    afterReveal?: (el: HTMLElement) => void
    afterReset?: (el: HTMLElement) => void
    beforeReveal?: (el: HTMLElement) => void
    beforeReset?: (el: HTMLElement) => void
  }

  interface ScrollRevealInstance {
    reveal(target: string | HTMLElement | NodeList, options?: ScrollRevealOptions): ScrollRevealInstance
    clean(target: string | HTMLElement | NodeList): void
    destroy(): void
    sync(): void
  }

  function ScrollReveal(options?: ScrollRevealOptions): ScrollRevealInstance
  export = ScrollReveal
}