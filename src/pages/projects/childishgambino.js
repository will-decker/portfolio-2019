import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  IoIosCode,
  IoIosDesktop,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"
import { DiHtml5, DiCss3, DiJqueryLogo } from "react-icons/di"

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const ChildishGambino = () => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              image {
                childImageSharp {
                  fluid(maxWidth: 1150) {
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
        <SEO title="Project | Childish Gambino Tribute Site" />
        <section id="portfolio-projects">
          <div className="container">
            <div className="projects-nav">
              <div className="projects-nav-link">
                <Link to="/projects/becomeorganized">
                  <IoIosArrowDropleftCircle /> Previous Project
                </Link>
              </div>
              <div className="spacer" />
              <div className="projects-nav-link right">
                <Link to="/projects/portfolio">
                  Next Project <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
            <div className="project-image">
              <Img
                fluid={
                  data.allProjectsJson.edges[1].node.image.childImageSharp.fluid
                }
                style={{ height: 450 }}
              />
            </div>
            <h1>Childish Gambino Tribute Site</h1>
            <div className="info">
              <div className="buttons">
                <a
                  href={data.allProjectsJson.edges[1].node.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosDesktop /> Visit Site
                </a>
                <a
                  href={data.allProjectsJson.edges[1].node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosCode /> Code
                </a>
              </div>
            </div>
            <p>{data.allProjectsJson.edges[1].node.description}</p>

            <div className="technologies">
              <h3>Built Using</h3>

              <div className="icons">
                <div className="icon">
                  <DiHtml5 />
                </div>
                <div className="icon">
                  <DiCss3 />
                </div>
                <div className="icon">
                  <DiJqueryLogo />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default ChildishGambino
