import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"
import { DiHtml5, DiSass, DiReact } from "react-icons/di"
import { FaDesktop, FaCode } from "react-icons/fa"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BLMBanner from "../../components/blmbanner"

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
        <SEO title="Project | Web Developer Portfolio" />
        <BLMBanner />
        <section id="portfolio-projects">
          <div className="container">
            <div className="projects-nav">
              <div className="projects-nav-link">
                <Link to="/projects/focustimer">
                  <IoIosArrowDropleftCircle /> Previous Project
                </Link>
              </div>
              <div className="spacer" />
              <div className="projects-nav-link right">
                <Link to="/#work">
                  Back To Portfolio <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
            <div className="project-image">
              <Img
                fluid={
                  data.allProjectsJson.edges[4].node.image.childImageSharp.fluid
                }
                style={{ height: 450 }}
              />
            </div>
            <h1>Web Developer Portfolio</h1>
            <div className="info">
              <div className="buttons">
                <a href="/">
                  <FaDesktop /> Visit Site
                </a>
                <a
                  href={data.allProjectsJson.edges[4].node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode /> View Code
                </a>
              </div>
            </div>
            <p>{data.allProjectsJson.edges[4].node.description}</p>

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
