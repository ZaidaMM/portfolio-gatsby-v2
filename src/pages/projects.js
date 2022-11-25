import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"

const ProjectsPage = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulProject: { nodes: projects },
  } = data

  console.log(projects)

  return (
    <>
      <main className="projects-page">
        <Projects title="All Projects" projects={projects} />
      </main>
    </>
  )
}

const query = graphql`
  {
    allContentfulProject(sort: { order: ASC, fields: order }) {
      nodes {
        id
        title
        description {
          description
        }
        stack {
          tags
          id
        }
        url
        github
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        featured
      }
    }
  }
`

export default ProjectsPage
