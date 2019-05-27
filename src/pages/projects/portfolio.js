import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  IoIosCode,
  IoIosDesktop,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"
import { DiHtml5, DiSass, DiReact } from "react-icons/di"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              image {
                childImageSharp {
                  fluid(maxWidth: 1150, quality: 75) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              description
              link
              github
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Become Organized Website" />
        <section id="portfolio-projects">
          <div className="container">
            <div className="projects-nav">
              <div className="projects-nav-link">
                <Link to="/projects/childishgambino">
                  <IoIosArrowDropleftCircle /> Previous Project
                </Link>
              </div>
              <div className="spacer" />
              <div className="projects-nav-link right">
                <Link to="/">
                  Back To Portfolio <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
            <div className="project-image">
              <Img
                fluid={
                  data.allProjectsJson.edges[2].node.image.childImageSharp.fluid
                }
                style={{ height: 450 }}
              />
            </div>
            <h1>Web Developer Portfolio</h1>
            <div className="info">
              <div className="buttons">
                <a href="/">
                  <IoIosDesktop /> Visit Site
                </a>
                <a
                  href={data.allProjectsJson.edges[2].node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosCode /> Code
                </a>
              </div>
            </div>
            <p>{data.allProjectsJson.edges[2].node.description}</p>

            <div className="technologies">
              <h3>Built Using</h3>

              <div className="icons">
                <div className="icon">
                  <DiHtml5 />
                </div>
                <div className="icon">
                  <DiSass />
                </div>
                <div className="icon">
                  <DiReact />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default Portfolio
