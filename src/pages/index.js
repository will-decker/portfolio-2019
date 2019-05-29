import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Intro from "../components/Intro"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Contact from "../components/Contact"

import "../components/css/main.scss"

class IndexPage extends Component {
  render() {
    const { data } = this.props

    return (
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
        <Work projects={data.allProjectsJson.edges} />
        <Contact />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          page
          link
          github
        }
      }
    }
  }
`

export default IndexPage
