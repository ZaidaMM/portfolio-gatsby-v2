import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  console.log(site.siteMetadata.title)

  return (
    <Helmet
      title={`${site.siteMetadata.title} | ${title}`}
      meta={[{ name: `description`, content: metaDescription }]}
      htmlAttributes={{ lang: "en" }}
    ></Helmet>
  )
}
export default Seo
