import React from "react"
import Title from "./Title"
import Project from "./Project"

const Projects = ({ projects, title }) => {
  return (
    <section className="section projects">
      <Title title="Projects" />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}
export default Projects
