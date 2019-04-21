import React from "react"
import Project from "./work/project"

const Work = ({ projects }) => (
  <section id="work">
    <div className="work-container">
      <h1>Work</h1>
      <p>A selection of design, web development and animation projects</p>
      <div className="projects">
        {/* {projects.map(project => (
          <Project key={project.node.title} project={project.node} />
        ))} */}
        <Project />
      </div>
    </div>
  </section>
)

export default Work
