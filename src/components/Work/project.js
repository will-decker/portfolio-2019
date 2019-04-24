import React from "react"
import Img from "gatsby-image"

const Project = ({ project }) => (
  <div className="project" key={project}>
    <div className="project-image">
      <Img fluid={project.image.childImageSharp.fluid} />
    </div>
    <div className="project-info">
      <div className="project-info-wrap">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-category">{project.category}</p>
        <button className="project-link">
          <a target="_blank" rel="noopener noreferrer" href="/">
            Info
          </a>
        </button>
        <button className="project-link">
          <a target="_blank" rel="noopener noreferrer" href={`${project.link}`}>
            Live Site
          </a>
        </button>
        <button className="project-link">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${project.github}`}
          >
            Code
          </a>
        </button>
      </div>
    </div>
  </div>
)

export default Project
