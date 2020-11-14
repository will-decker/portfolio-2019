import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"
import { FaDesktop, FaCode } from "react-icons/fa"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BLMBanner from "../../components/blmbanner"

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        github
        link
      }
      body
    }
  }
`

const ProjectPage = ({ data: { mdx: project } }) => {
  const { title } = project.frontmatter
  const { body } = project
  return (
    <Layout>
      <SEO title={title} />
      <BLMBanner />
      <section id="portfolio-projects">
        <div className="container">
          <div className="projects-nav">
            <div className="projects-nav-link">
              <Link to="/#work">
                <IoIosArrowDropleftCircle /> Back to Portfolio
              </Link>
            </div>
            <div className="spacer" />
            <div className="projects-nav-link right">
              <Link to="/projects/childishgambino">
                Next Project <IoIosArrowDroprightCircle />
              </Link>
            </div>
          </div>
          <div className="project-image">
            <Img
              fluid={
                data.allProjectsJson.edges[0].node.image.childImageSharp.fluid
              }
              style={{ height: 450 }}
            />
          </div>
          <h1>{title}</h1>
          <div className="info">
            <div className="buttons">
              <a
                href={data.allProjectsJson.edges[0].node.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDesktop /> Visit Site
              </a>
              <a
                href={data.allProjectsJson.edges[0].node.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCode /> View Code
              </a>
            </div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectPage
