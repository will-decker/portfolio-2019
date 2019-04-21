import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import Skills from "../components/skills"
import Work from "../components/work"
import Contact from "../components/contact"

import "../components/css/main.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `web developer`,
        `developer`,
        `front-end developer`,
        `front-end`,
        `design`,
        `web designer`,
        `web design`,
        `website design`,
        `website builder`,
        `responsive web design`,
        `wordpress`,
        `wordpress developer`,
        `wordpress designer`,
      ]}
    />
    <Intro />
    <About />
    <Skills />
    <Work />
    <Contact />
  </Layout>
)

export const query = graphql`
  query ProjectQuery {
    allProjectsJson {
      edges {
        node {
          img
          title
          category
          link
          github
        }
      }
    }
  }
`

export default IndexPage
