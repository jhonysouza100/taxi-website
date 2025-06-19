import Image from "next/image"
import { RiArrowRightLine } from "@remixicon/react"

export default function JoinSection() {
  return (
    <section className="join section" id="join">
      <div className="join_container container grid">
        <div className="join_data">
          <h2 className="section_title">
            Your Journey <br /> Starts Here
          </h2>
          <p className="join_description">Get up to date with the latest travel and information from us.</p>
          <form action="" className="join_form">
            <input type="email" placeholder="Enter your email" className="join_input" />
            <button type="submit" className="join_button button">
              Join our newsletter
              <RiArrowRightLine />
            </button>
          </form>
        </div>
        <Image height={700} width={700} src="/join-img.png" quality={100} alt="Join image" className="join_img" />
      </div>
    </section>
  )
}