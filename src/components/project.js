import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Project = ({ project }) => (
  <Link to={`${project.page}`} class={`box grid-item${project.id}`}>
    <div className="project" key={project}>
      <div className="hover-bg">
        <div className="title">
          <div className="text">{project.title}</div>
        </div>
      </div>
    </div>
  </Link>
)

export default Project
