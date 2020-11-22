import React, { Component } from "react"
import { graphql } from "gatsby"

import BLMBanner from "../components/blmbanner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import Skills from "../components/skills"
import Work from "../components/work"
import Contact from "../components/contact"

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
        <BLMBanner />
        <Intro />
        <About />
        <Skills />
        <Work projects={data.allMdx.edges} />
        <Contact />
      </Layout>
    )
  }
}

export const query = graphql`
  query ProjectQuery {
    allMdx(filter: { frontmatter: { postType: { eq: "project" } } }) {
      edges {
        node {
          body
          frontmatter {
            date
            github
            link
            slug
            title
            featureImage {
              childImageSharp {
                fluid(maxWidth: 1150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            order
          }
        }
      }
    }
  }
`

export default IndexPage
