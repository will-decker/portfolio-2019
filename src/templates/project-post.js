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

          <div className="project-details">
            <div className="project-info">
              <div className="info-col">
                <h5>Role</h5>
                <ul>
                  <li>{project.frontmatter.role}</li>
                </ul>
                <h5>Client</h5>
                <ul>
                  <li>{project.frontmatter.client}</li>
                </ul>
              </div>
              <div className="info-col">
                <h5>Work</h5>
                <ul>
                  {project.frontmatter.work.map(w => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
                <h5>Links</h5>
                <ul>
                  <li>
                    <a
                      href={project.frontmatter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDesktop /> Visit Site
                    </a>
                  </li>
                  {project.frontmatter.github === null ? null : (
                    <li>
                      <a
                        href={project.frontmatter.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaCode /> View Code
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="project-overview">
              <MDXRenderer>{body}</MDXRenderer>
            </div>
          </div>
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
        role
        client
        work
        github
        link
      }
    }
  }
`

export default ProjectPage
