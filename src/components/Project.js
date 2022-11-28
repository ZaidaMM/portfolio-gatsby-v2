import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ index, description, title, github, stack, url, image }) => {
  return (
    <article className="project">
      {/* <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="project-img-container"
      > */}
      <GatsbyImage
        image={getImage(image)}
        className="project-img"
        alt={title}
      />
      {/* </a> */}
      <div className="project-info">
        <span className="project-number">{index + 1}.</span>
        <h3 className="project-slug">{title}</h3>
        <p className="project-desc">{description.description}</p>
        <div className="project-stack">
          {stack.tags.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a
            href={github}
            className="project-icon"
            alt="github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href={url}
            className="project-icon"
            alt="project"
            target="_blank"
            rel="noreferrer"
          >
            <FaShareSquare />
          </a>
        </div>
      </div>
    </article>
  )
}
export default Project
