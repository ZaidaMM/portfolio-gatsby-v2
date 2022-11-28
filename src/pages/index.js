import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import AboutContent from "../components/AboutContent"
import ContactForm from "../components/ContactForm"
import Seo from "../components/Seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(query)
  const {
    allContentfulProject: { nodes: projects },
  } = data
  // console.log(projects)
  return (
    <>
      <Seo title="HomePage" />
      <main>
        <Hero />
        <Projects title="Projects" projects={projects} showLink />
        <div className="about-homepage">
          <AboutContent />
        </div>
        <div className="contact-homepage">
          <ContactForm />
        </div>
      </main>
    </>
  )
}

const query = graphql`
  {
    allContentfulProject(
      filter: { featured: { eq: true } }
      sort: { order: ASC, fields: order }
    ) {
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

export default IndexPage
