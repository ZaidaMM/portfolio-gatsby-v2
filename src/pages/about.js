import React from "react"
import AboutContent from "../components/AboutContent"
import Seo from "../components/Seo"

const About = () => {
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <AboutContent />
        </div>
      </section>
    </>
  )
}
export default About
