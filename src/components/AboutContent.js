import React from "react"
import Title from "./Title"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import stackItems from "../constants/stack"

const AboutContent = () => {
  return (
    <>
      <div className="about-img-container">
        <StaticImage
          src="../assets/images/projects-3.jpg"
          alt="about"
          className="about-img-svg"
        />
      </div>
      <article className="about-text">
        <Title title="about" />
        <p>
          I'm a passionate self-taught Web Developer with a background in
          Accounting. My proactive approach in life has been important in my
          professional development in tech.
        </p>
        <p>
          Since I've entered the world of web development I've learned about
          Front End Development, Javascript and a variety of other technologies,
          and how I can solve problems using them. I moved on to a Full Stack
          and Mobile Development Bootcamp, where I kept learning new
          technologies and ways to apply them to solve different kind of
          problems.
        </p>
        <p>
          In previous experiences I've successfully gathered, analysed and
          interpreted financial data, and presented my findings to management
          and directive levels for decision making. These skills have proved
          useful in my transition to web development, where I find solutions to
          the problem at hand and communicate them effectively.
        </p>
        <Title title="skills" />
        <div className="about-stack">
          {stackItems.map(item => {
            return <span key={item.id}>{item.text}</span>
          })}
        </div>
      </article>
    </>
  )
}
export default AboutContent
