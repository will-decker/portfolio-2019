import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"
import { FaDesktop, FaCode } from "react-icons/fa"

import Layout from "../../src/components/layout"
import SEO from "../../src/components/seo"
import BLMBanner from "../../src/components/blmbanner"

const ProjectPage = ({ data: { mdx: project } }) => {
  const { title } = project.frontmatter
  const { body } = project
  return (
    <Layout>
      <SEO title={title} />
      <BLMBanner />
      <section id="portfolio-projects">
        <div className="container">
          <h1>{title}</h1>
          <div className="project-image">
            <Img
              fluid={project.frontmatter.featureImage.childImageSharp.fluid}
              style={{ height: 450 }}
            />
          </div>

          <div className="info">
            <div className="buttons">
              <a
                href={project.frontmatter.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDesktop /> Visit Site
              </a>
              {project.frontmatter.github === null ? null : (
                <a
                  href={project.frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode /> View Code
                </a>
              )}
            </div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
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
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        slug
        title
        featureImage {
          childImageSharp {
            fluid(maxWidth: 1150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        github
        link
      }
    }
  }
`

export default ProjectPage
