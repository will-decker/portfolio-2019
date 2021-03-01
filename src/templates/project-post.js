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
import Snapshot from "../../src/components/snapshot"

const ProjectPage = ({ data: { mdx: project } }) => {
  const { title } = project.frontmatter
  const { body } = project
  return (
    <Layout>
      <SEO title={title} />
      <BLMBanner />
      <section id="portfolio-projects">
        <h1>{title}</h1>
        <div className="project-image">
          <Img
            fluid={project.frontmatter.featureImage.childImageSharp.fluid}
            fadeIn={true}
            style={{ height: 450 }}
          />
        </div>
        <div className="container">
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
                <h5>Year</h5>
                <ul>
                  <li>{project.frontmatter.year}</li>
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
                      Visit Site
                    </a>
                  </li>
                  {project.frontmatter.github === null ? null : (
                    <li>
                      <a
                        href={project.frontmatter.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
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
        </div>
        <Snapshot image={project.frontmatter.showcaseImage.publicURL} />
        {project.frontmatter.showcaseImage2 === null ? null : (
          <Snapshot image={project.frontmatter.showcaseImage2.publicURL} />
        )}
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
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        showcaseImage {
          publicURL
        }
        showcaseImage2 {
          publicURL
        }
        year
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
