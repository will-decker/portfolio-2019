import React from "react"

const Project = ({ project }) => (
  <div className="project" key={project}>
    <div className="project-image">
      <img src={`${project.img}`} />
    </div>
    <div className="project-info">
      <div className="project-title-wrap">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-category">{project.category}</p>
        <a target="_blank" rel="noopener noreferrer" href={`${project.link}`}>
          Live Site
        </a>
        <a target="_blank" rel="noopener noreferrer" href={`${project.github}`}>
          Code
        </a>
      </div>
    </div>
  </div>
)

export default Project
